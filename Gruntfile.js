module.exports = function(grunt) {
  grunt.initConfig({
    yuiModelEndpoints: {
      options: {
        files: ['test/fixtures/*.js']
      }
    }
  });

  grunt.loadTasks('tasks');
};
