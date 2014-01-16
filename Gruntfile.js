module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    uglify: {
      my_target: {
        options : {
          sourceMap : 'main.js.map'
          // beautify : true
        },
        files: {
          'standard/scripts/main.min.js': [
            'standard/scripts/init.js',
            'standard/scripts/helpers.js',
            'standard/scripts/cr03.js',
            'standard/scripts/breadcrumb.js'
          ]
        }
      }
    }
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');

  // Default task(s).
  // grunt.registerTask('default', ['uglify']);

};