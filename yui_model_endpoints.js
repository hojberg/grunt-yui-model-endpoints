var fs = require('fs');

var findEndpoint = function (yuiModel) {
  var pattern = /root: ['|"](.+)['|"]/g;

  return pattern.exec(yuiModel)[1];
};

// Run it!
fs.readFile('test/fixtures/user_model.js', 'utf-8', function (err, data) {
  if (err) throw err;
  console.log( findEndpoint(data) );
});
