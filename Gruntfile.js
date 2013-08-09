/*global module: true */

module.exports = function(grunt) {
'use strict';

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    banner: '/* <%= pkg.name %> - <%= pkg.author.name %> © <%= grunt.template.today("dd-mm-yyyy") %> */\n',
    filesTypes: {
      js : '**/*.js',
      stylus : '**/*.styl',
      css : '**/*.css',
    },
    uglify: {
      options: {
        banner: '<%= banner %>'
      },
      dist: {
        files: {
          '<%= pkg.main %>': ['<%= pkg.directories.srcJs %>/<%= filesTypes.js %>']
        }
      }
    },
    jshint: {
      files: [
        'gruntfile.js',
        '<%= pkg.directories.srcJs %>/<%= filesTypes.js %>'
      ],
      options: {
        globals: {
          jQuery: true,
          console: true,
          Drupal: true,
          document: true,
          window: true
        },
        ignores: [
          '**/*min.js'
        ]
      }
    },
    watch: {
      js: {
        files: [
          '<%= pkg.directories.srcJs %>/<%= filesTypes.js %>'
        ],
        tasks: ['jshint', 'uglify'],
      }
    },
    stylus: {
      compile: {
        options: {
          paths: ['<%= pkg.directories.srcStylus %>'],
          banner: '<%= banner %>'
        },
        files: {
          '<%= pkg.name %>.css': ['<%= pkg.directories.srcStylus %>/<%= filesTypes.stylus %>']
        }
      }
    }
  });

  grunt.log.write(grunt.config.process('<%= pkg.directories.srcCss %>/<%= filesTypes.stylus %>'));

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-stylus');

  grunt.registerTask('build:js', ['jshint', 'uglify']);
  grunt.registerTask('build:css', ['stylus']);
  grunt.registerTask('default', 'watch');

};

