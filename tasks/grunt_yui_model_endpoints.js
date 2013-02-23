module.exports = function (grunt) {
  var path = require('path');

  grunt.registerTask('yuiModelEndpoints', 'List all YUI Model REST Endpoints', function() {
    var paths = this.options().files;

    paths = grunt.file.expand(paths);

    console.log('');
    console.log('Endpoints');
    paths.forEach(function (p) {
      var resolvedPath  = path.resolve(p),
          contents      = grunt.file.read(resolvedPath),
          pattern       = /root: ['|"](.+)['|"]/g;

      console.log(' - ' + pattern.exec(contents)[1]);
    });
  });
};
