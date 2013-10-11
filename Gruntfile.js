module.exports = function(grunt) {

    grunt.initConfig({

        jshint: {
            all: [
                'app/assets/js/hoitmc.js',
                'Gruntfile.js'
            ]
        },

        jade: {
            compile: {
                options: {
                    data: {
                        debug: false
                    },
                    pretty: true
                },
                files: {
                    "app/index.html": ["templates/index.jade"]
                }
            }
        },

        cssmin: {
            combine: {
                files: {
                    'app/assets/css/style.min.css': ['app/assets/css/style.css']
                }
            }
        },

        karma: {
            unit: {
                configFile: 'karma.conf.js',
                runnerPort: 9999,
                singleRun: true,
                browsers: ['PhantomJS']
            }
        }
        });

    //load our tasks
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-jade');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-jasmine');
    grunt.loadNpmTasks('grunt-karma');
    grunt.loadNpmTasks('grunt-istanbul');

    grunt.registerTask('default', ['jshint', 'jade', 'cssmin']);
};