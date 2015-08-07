module.exports = (grunt) ->


  require('load-grunt-tasks')(grunt)

  grunt.initConfig

    pkg: grunt.file.readJSON('package.json')

    coffee:
      options:
        join: true
        literate: true

      compile:
        files: 'static/app.js': ['static/scripts/*.coffee']

    less:
      dev:
        files:
          'static/style.css': ['static/style.less']

      prod:
        options:
          compress: true
          report: 'min'
        files:
          'static/style.css': ['static/style.less']

    watch:
      options:
        debounceDelay: 300
      files: ['static/*']
      tasks: ['coffee', 'less']

  grunt.registerTask 'default', ['coffee', 'less:prod']