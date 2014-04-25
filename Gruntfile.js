module.exports = function (grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        library: grunt.file.readJSON('bower.json'),
        concat: {
            options: {
                separator: ''
            },
            library: {
                src: [
                    'src/*.js',
                    '.tmp/*.templates.js'
                ],
                dest: 'dist/<%= library.name %>.js'
            }
        },
        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n'
            },
            jid: {
                files: {
                    'dist/<%= library.name %>.min.js': ['<%= concat.library.dest %>']
                }
            }
        },
        html2js: {
          main: {
            options: {
              base: 'src',
              module: 'bootstrapSelectButton.templates'
            },
            src: [ 'src/*.html' ],
            dest: '.tmp/bootstrap-select-button.templates.js'
          }
        },
        jshint: {
            beforeConcat: {
                src: ['gruntfile.js', 'src/*.js']
            },
            afterConcat: {
                src: [
                    '<%= concat.library.dest %>'
                ]
            },
            options: {
                // options here to override JSHint defaults
                globals: {
                    jQuery: true,
                    console: true,
                    module: true,
                    document: true,
                    angular: true
                },
                globalstrict: false
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-html2js');

    grunt.registerTask('default', ['html2js', 'concat', 'uglify']);

};
