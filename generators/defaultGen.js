var fs = require('fs-extra');
var _ = require('lodash');
var prependFile = require('prepend-file');

var importDefaults = function(defaults, filePath, fileType, directory) {
  if (defaults.match(/no/)) {
    console.log('Defaults: No');
  }
  if (defaults.match(/yes/)) {
    console.log('Defaults: Yes');
    var defaultPath = directory + '/defaults/' + fileType + 'Default.js';
    var loadedFileDefaults = fs.readFileSync(defaultPath, 'utf8', function(err) {
      if (err) {
        console.log(err);
      }
    });

    var fileDefaults = loadedFileDefaults.replace(/\[object Object\]/g, '');
    prependFile(filePath, fileDefaults, function(err) {
      if (err) {
        console.log(err);
      }
    });
  }
};

module.exports.importDefaults = importDefaults;