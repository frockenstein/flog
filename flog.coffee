fs = require('fs')
path = require('path')
glob = require('glob')
_ = require 'underscore'
express = require('express')
yaml = require 'js-yaml'
moment = require 'moment'
stache = require 'mustache'
marked = require 'marked'

marked.setOptions
  breaks: true

brain =

  fart: (pffft) ->
    console.log(pffft)

  render: (name, data) ->
    @templates ?= [] # cache 'em if ya got 'em
    if _.contains(@templates, name) is false
      @templates[name] = fs.readFileSync("templates/#{name}").toString()

    template = @templates[name]
    stache.render(template, data)

  renderFull: (name, data) ->
    body = @render(name, data)
    @render('layout.html', { body: body })

  build: (donezo) ->
    glob 'content/**/*', null, (error, files) =>

      @graycells ?= []

      # bail if we've done this already
      return donezo() if @graycells.length > 0

      for file in files
        stat = fs.statSync(file)
        continue if stat.isDirectory()
        content = fs.readFileSync(file).toString()
        meta = @readMeta(content)

        ext = path.extname(file)
        url = '/' + file.replace('content/', '').replace(ext, '')

        cell =
          path: file
          url: url
          body: marked(meta.markdownBody)

        _.extend(cell, meta)

        @graycells.push(cell)

      donezo()

  fetch: (urlpath, donezo) ->

    result = {}

    urlpath = '/index' if urlpath is '/'

    # try to grab raw content, bomb if no dice
    fs.readFile "content#{urlpath}.md", (error, data) =>
      if error?
        fs.readFile "content/404.html", (error, data) ->
          result.status = 404
          result.meta = { title: "No findo: #{urlpath}" }
          result.body = data.toString()
          donezo(result)
      else
        result.meta = @readMeta(data.toString())
        result.body = marked(result.meta.markdownBody)
        donezo(result)

  readMeta: (content) ->

    matches = content.match /^-{3}([\s\S]+?)-{3}([\s\S]*)$/

    return { markdownBody: content } unless matches

    # load front matter
    fm = yaml.load matches[1]

    if fm.date?
      # if we have a front matter date, and it's valid set it
      date = moment(new Date(fm.date))
      if date.isValid()
        fm.date = date
        fm.prettydate = date.format('MMM. Do, YYYY')

    if fm.tags and fm.tags.length > 0
      fm.showtags = true
      for tag, index in fm.tags
        fm.tags[index] = @slugify(tag)

    fm.markdownBody = matches[2]
    return fm

  slugify: (thing) ->
    decodeURI(thing).replace(/[^\w]+/gi, '-')

  byTag: (tag, callback) ->
    items = @graycells.filter (cell) ->
      _.contains(cell.tags, tag)
    items = _.uniq(items)
    callback(items)

  blogIndex: (callback) ->
    cells = @graycells.filter (cell) ->
        cell.url.indexOf('blog/') > -1
    cells = _.sortBy cells, (cell) ->
      cell.date

    callback(cells)


app = express()
app.use(express.static(__dirname + '/static'))
app.set('x-powered-by', false)

app.get '/tags/:tag', (req, res, next) ->
  brain.build () ->
    brain.byTag req.params.tag, (result) ->
      res.send brain.renderFull('tags.html', { tags: result })

app.get '/blog/', (req, res, next) ->
  brain.build () ->
    brain.blogIndex (result) ->
      res.send brain.renderFull('blog.html', { pages: result })

app.get '*', (req, res) ->
  brain.build () ->
    brain.fetch req.url, (result) ->
      if result.status then res.status(result.status)
      res.send(brain.render('layout.html', result))

app.listen(process.env.PORT || 3000)
console.log('listening on port 3000')