TODO:

* new/port design
* rss feed
* folder/file structure that'll work for s3
* sync to s3
* move domain

Requires
---------------------------

	fs = require 'fs'
	path = require 'path'
	url = require 'url'
	http = require 'http'
	cp = require 'child_process'

Extra stuff from npm

	_ = require 'underscore'
	mime = require 'mime'

[Markdown parser](https://npmjs.org/package/marked)

	marked = require 'marked'
	marked.setOptions
		breaks: true

[Mustache for templating](https://github.com/janl/mustache.js/)

	stache = require 'mustache'

[JS YAML for front matter](https://github.com/nodeca/js-yaml)

	yaml = require 'js-yaml'

Date parsing/formatting via [Moment](http://momentjs.com/docs/)

	moment = require 'moment'


Helpers
-------

'Cause I'm lazy and don't wanna type console.log

	log = (yourmom) ->
		console.log yourmom

Facade that'll figure out if you give it a filename, or template string

	render = (template, data = {}) ->
		# looks like a file
		if template.match /^[a-zA-Z_\/\.]+/
			template = fs.readFileSync(template).toString()
		stache.render template, data

Strips html and chops a hunk of text down to ~ x chars

	excerpt = (text, length = 300) ->
		text = text.replace /<(?:.|\n)*?>/gm, ''
		return text if text.length < length
		text = text.substring(0, length)
		text.substring(0, text.lastIndexOf(' ')) + ' ...'

	buildAssets = ->
		cp.exec "lessc static/style.less static/style.css", (error, stdout, stderr) ->
			log error if error?
		log 'css built'
		cp.exec "coffee -o static/ static/scripts/app.coffee", (error, stdout, stderr) ->
			log error if error?
		log 'js built'

Let's get ta bidness
--------------------

Builds an array of all the blog and page entries

	getEntries = ->
		db = []
		for dir in ['pages', 'blog']
			files = fs.readdirSync(dir).filter (f) ->
				path.extname(f) in ['.md', '.html']

			for file in files
				db.push getMeta "#{dir}/#{file}"
		return db

Gleans whatever metadata it can. If file is .md, will try to parse YAML front matter
from it (https://npmjs.org/package/yaml-front-matter)

	getMeta = (file) ->
		stat = fs.statSync file
		ext = path.extname(file)
		dir = path.dirname(file)

		# set up some defaults
		meta =
			# poor man's category
			category: dir

			# id is filename
			id: path.basename(file)

			# start out with create date (may override w front matter)
			date: moment(stat.ctime)

			# use filename minus extension if nothing else
			title: path.basename(file, ext)

			# pages/about.md becomes /pages/about/
			url: "/#{dir}/#{path.basename(file, ext)}/"

			prettydate: () ->
				# context might be page.date or just this.date,
				# hence (@page or @)
				(@page or @)?.date?.format('MMM. Do, YYYY')

			showtags: () ->
				(@page or @)?.tags?.length > 0

		# special case for pages files
		if dir is 'pages'
			meta.url = "/#{path.basename(file, ext)}"

		# read the text - this covers .html files too
		meta.content = fs.readFileSync(file).toString()

		if ext is '.md'
			# grab front matter
			re = /^-{3}([\s\S]+?)-{3}([\s\S]*)$/
			matches = meta.content.match re
			if matches
				# load front matter
				fm = yaml.load matches[1]

				# if we have a front matter date, and it's valid set it
				date = moment(fm.date)
				if date.isValid() then fm.date = date

				# so that extend won't overwrite ctime date
				if fm?.date is null then delete fm.date

				# merge it with existing meta, front matter overrides
				_.extend(meta, fm)

				# the rest is the markdown content
				meta.content = matches[2]

			meta.content = marked(meta.content)

		return meta

Starts up a preview server to mimic the static site.
Great with [Nodemon](https://github.com/remy/nodemon)

	build = ->
		do buildAssets
		cp.exec 'cp -r static/images output/images'
		cp.exec 'cp -r static/style.css output/style.css'
		cp.exec 'cp -r static/app.js output/app.js'

	preview = ->

		do buildAssets

		server = http.createServer (req, res) ->

			# strip querystring off and decode
			parsedurl = decodeURIComponent(url.parse(req.url).pathname)

			# figure out what we're looking for
			file = parsedurl.slice(1) or 'index'

			# don't care about this
			return if file is 'pages/favicon.ico'

Anything in these dirs is considered static - stream them and get out

			if file.match /(images\/|\.js|\.css)/i
				staticfile = "static/#{file}"
				if fs.existsSync staticfile
					res.writeHead 200, 'Content-Type': mime.lookup(staticfile)
					fs.createReadStream(staticfile).pipe res
				else
					res.writeHead 404
					res.end()
				return

			# assume next that we're looking for a page
			if file.indexOf('/') < 1 and file isnt 'index' then file = "pages/#{file}"

			log "Requested: #{file}"

			entries = getEntries()
			page = {}
			statusCode = 200

Grab all the tags from the "db" and display an index of uniques

			if file.match /tags\//
				tag = file.split('/')[1] or 'index'
				if tag is 'index'

					# grab all tags from entries
					tags = _.pluck(entries, 'tags')

					# remove falsy values
					tags = _.compact(tags)

					# flatten array of arrays down to single
					tags = _.flatten(tags)

					# merge all vals down to uniques
					tags = _.union(tags)

					page =
						content: render 'templates/tags.html', { tags: tags }
						title: 'All tags'
						description: "Tags for this site's content"

Find all pages by tag

				else
					pages = entries.filter (f) -> f.tags?.indexOf(tag)
					template = '{{#pages}}<a href="{{url}}">{{title}}</a><br>{{/pages}}'
					page =
						content: render template, { pages: pages }
						title: "Entries about #{tag}"
						description: "All entries tagged #{tag}"

Find all blog entries and create an index

			else if file.match /blog\/$/
				pages = entries.filter (f) -> f.category is 'blog'
				pages = _.sortBy(pages, (x) -> -x.date.toDate().getTime())
				pages.forEach (x) -> x.excerpt = excerpt(x.content)
				template = 'templates/blog.html'
				page =
					content: render template, { pages: pages }
					title: "All entries, newest first"
					description: "All blog entries, newest first"

Render the home page

			else if file is 'index'
				page =
					content: render 'templates/index.html'
					title: 'site title'
					description: 'site description'

Render a specific page, or 404 if nothing found that matches url/path

			else
				id = path.basename(file)
				# find the thing we're looking for
				page = _.find entries, (f) -> f.id is "#{id}.md" or f.id is "#{id}.html"
				unless page
					page = _.find entries, (f) -> f.id is "404.html"
					statusCode = 404

			# only pages in the nav
			nav = entries.filter (f) -> f.category is 'pages' and f.id isnt '404.html'

			res.writeHead statusCode
			res.end render 'templates/layout.html', { nav: nav, page: page }

		port = 3000
		server.listen port
		#cp.exec "open http://localhost:#{port}/about"
		log "Server started on port #{port}"

	do build