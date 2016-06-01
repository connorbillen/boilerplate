'use strict';

module.exports = function(grunt) {
  require('load-grunt-tasks')(grunt);
  var pkg = require('./package.json');

  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-cucumber');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-uglify');    
  grunt.loadNpmTasks('grunt-string-replace');

  grunt.initConfig({
    copy: {
      css: {
        files: [
          {
            expand: true,
            cwd: 'files',
            src: ['app/css/*'],
            dest: 'public/css/',
            filter: 'isFile'
          }
        ]
      }
    },

    clean: ['public'],

    jshint: {
      options : {
        jshintrc : true
      },
      all: ['Gruntfile.js', 'features/step_definitions/**/*.js', 'app/js/**/*.js']
    },

    uglify: {
      scripts: {
        files: {
          'public/js/script.js': ['app/js/**/*.js']
        }
      }        
    },

    'string-replace': {
      inline: {
        files: {
          'public/index.html': 'app/index.html',
        },
        options: {
          replacements: [
            {
              pattern: /(<script src=".*?" type=".*?"><\/script>)/g,
              replacement: '<script src="js/script.js" type="text/javascript"></script>'
            },
            {
              pattern: /(<link rel="stylesheet" href=".*?" type=".*?">)/g,
              replacement: '<link rel="stylesheet" href="css/style.css" type="text/css">'
            }
          ]
        }
      }
    }
  });

  grunt.registerTask('runCmd', function(directory, cmd, csvArgs){
    var next = this.async();
    var deployTask = grunt.util.spawn({
      cmd: cmd,
      args: csvArgs?csvArgs.split(','):[],
      opts: {
        cwd: directory
      }
    }, function (err, result, code) {
      if (err) {
        grunt.fail.fatal(err, code);
        next(code);
      } else {
        grunt.log.ok();
        next();
      }
    });

    if (typeof deployTask === 'undefined') {
      grunt.fail.fatal(cmd + ' task failed. Is \''+cmd+'\' on PATH?');
    }
    deployTask.stdout.on('data', function (buf) {
      grunt.log.write(String(buf));
    });
    deployTask.stderr.on('data', function (buf) {
      grunt.log.error(String(buf));
    });
  });

  grunt.registerTask('build', [
    'runCmd:.:npm:install',
    'jshint',
    'copy',
    'uglify',
    'string-replace'
  ]);
};
