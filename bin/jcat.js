#!/usr/bin/env node

var serialize = require('serialize-javascript');
var beautify = require('js-beautify')

var targetModule = process.argv[2];

if (!targetModule) {
  console.error('Provide path to module!');
  process.exit(0);
}

var contentModule = require(targetModule);
var result = serialize(contentModule);

console.log(beautify(result, {
  indent_size: 2,
  brace_style: "expand",
  unescape_strings: true,
  preserve_newlines: true
}));

