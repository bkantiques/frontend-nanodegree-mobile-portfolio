module.exports = function(grunt) {

    // 1. All configuration goes here
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        responsive_images: {
            dev: {
                options: {
                    engine: 'im',
                    sizes: [{
                        width: '150px',
                        rename: false
                    }],
                },
                files: [{
                    src: 'src/views/images/pizzeria.jpg',
                    dest: 'src/views/images/pizzeria_150.jpg'
                }]
            }
        },

        imagemin: {
            dev: {
                files: {
                    'dist/views/images/pizzeria.jpg': 'src/views/images/pizzeria_150.jpg',
                    'dist/img/profilepic.jpg': 'src/img/profilepic.jpg'
                }
            }
        },

        htmlmin: {
            dev: {
                options: {                                 // Target options
                    removeComments: true,
                    collapseWhitespace: true,
                    minifyCSS: true,
                    minifyJS: true
                },
                files: {
                    'dist/index.html': 'src/index.html'
                }
            }
        },

        cssmin: {
            dev: {
                files: {
                    'dist/css/print.min.css': 'src/css/print.css',
                    'src/css/print.min.css':  'src/css/print.css'
                }
            }
        },

        uglify: {
            dev: {
                files: {
                    'dist/js/perfmatters.js': 'src/js/perfmatters.js'
                }
            }
        }

    });

    // 3. Where we tell Grunt we plan to use this plug-in.
    grunt.loadNpmTasks('grunt-responsive-images');
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-contrib-htmlmin');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');

    // 4. Where we tell Grunt what to do when we type "grunt" into the terminal.
    grunt.registerTask('images', ['responsive_images', 'imagemin']);

};