module.exports = (grunt) ->
  grunt.initConfig
    bower:
      install: {}

    coffee:
      compile:
        files:
          "app/assets/js/hoitmc.js": "src/coffee/hoitmc.coffee"

    jshint:
      all: [
        "app/assets/js/hoitmc.js"
        "Gruntfile.js"
      ]

    jade:
      compile:
        options:
          data:
            debug: false

          pretty: true

        files:
          "app/index.html": ["templates/index.jade"]

    sass:
      dist:
        files:
          "app/assets/css/style.css": "src/scss/style.scss"

    cssmin:
      combine:
        files:
          "app/assets/css/style.min.css": ["app/assets/css/style.css"]

    copy:
      main:
        src: 'src/imgs/WMATA_Metro_Logo.png'
        dest: 'app/assets/images/WMATA_Metro_Logo.png'

    karma:
      unit:
        configFile: "karma.conf.js"
        runnerPort: 9999
        singleRun: true
        browsers: ["PhantomJS"]

  
  #load our tasks
  grunt.loadNpmTasks "grunt-bower-task"
  grunt.loadNpmTasks "grunt-contrib-coffee"
  grunt.loadNpmTasks "grunt-contrib-jshint"
  grunt.loadNpmTasks "grunt-contrib-jade"
  grunt.loadNpmTasks "grunt-contrib-cssmin"
  grunt.loadNpmTasks "grunt-contrib-sass"
  grunt.loadNpmTasks "grunt-contrib-jasmine"
  grunt.loadNpmTasks "grunt-karma"
  grunt.loadNpmTasks "grunt-istanbul"
  grunt.loadNpmTasks "grunt-contrib-copy"
  grunt.registerTask "default", [
    "bower"
    "coffee"
    "jshint"
    "jade"
    "sass"
    "cssmin"
    "copy"
  ]
  return
