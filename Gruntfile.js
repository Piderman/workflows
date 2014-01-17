module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({

    // see http://culttt.com/2013/11/18/setting-sass-grunt/#highlighter_929506

    // update this on a per-project basis?
    project : {
      css : "standard/styles"
    },

    uglify: {
      my_target: {
        options : {
          sourceMap : 'main.js.map'
          // beautify : true
        },
        

        // what files to build. order is important so list all
        files: {
          'standard/scripts/main.min.js': [
            'standard/scripts/init.js',
            'standard/scripts/helpers.js',
            'standard/scripts/cr03.js',
            'standard/scripts/breadcrumb.js'
          ]
        }
      }
    },

    // local and prod settings
    sass: {
    
      // local mode for debuging with sourcemaps and the like
      dev: {
        options: {
          style: "expanded",
          sourcemap: true
        },
        files : {
          "<%= project.css %>/screen.css" : "<%= project.css %>/screen.scss",
          "<%= project.css %>/nomedia.css" : "<%= project.css %>/nomedia.scss"

        }
      },
      

      // production for "minified". NB: doesn't prduct a .min file, IMO not needed
      prod: {
        options: {
          style: "compressed"
        },
        files : {
          "<%= project.css %>/screen.css" : "<%= project.css %>/screen.scss",
          "<%= project.css %>/nomedia.css" : "<%= project.css %>/nomedia.scss"

        }
      }
    },

    /*
    * watching for local changes
    * 
    */
    watch: {
      sass: {

        // update when these types are changed
        files: '**/*.scss',

        // and do what with said change?
        tasks: ['sass:dev']
      },


      livereload: {
        files: ['*.html', '**/*.css'],
        options: {
          livereload: true
        }
      }
    }


    /*
    * go for launch
    */

    push: {
      tasks: ['sass:prod']
    }
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Default task(s).
  // grunt.registerTask('default', ['uglify']);

  grunt.registerTask('default', 'watch');

  grunt.registerTask('push', 'push:tasks');

};