#!/usr/bin/env node

var serialize = require('serialize-javascript');
var beautify = require('js-beautify')
var path = require('path');

var targetModule = process.argv[2];
var targetInclude = '';

if (!targetModule) {
  console.error('Provide path to module!');
  process.exit(0);
}

// if name starts with `./` load from local
if (targetModule.match(/^\.\//)) {
  targetInclude = path.join(process.cwd(), targetModule.replace(/^\.\//, ''));
}
else {
  // load from local node_modules
  var targetPackage = path.join(process.cwd(), 'node_modules', targetModule);
  var packageInfo = require(path.join(targetPackage, 'package.json'));

  if (packageInfo.main) {
    targetInclude = path.join(targetPackage, packageInfo.main);
  }
  else {
    targetInclude = path.join(targetPackage, 'index.js');
  }
}

var contentModule = require(targetInclude);
var result = serialize(contentModule);

console.log(beautify(result, {
  indent_size: 2,
  brace_style: "expand",
  unescape_strings: true,
  preserve_newlines: true
}));

