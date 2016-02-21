#!/usr/bin/env node

var open = require('open');
var path = require('path');
var dest = process.cwd();
var arr = dest.split('/');

arr.shift();
arr.shift();
arr.shift();

var newPath = 'http://localhost:';

var port = 8080;
if (process.argv[2] === '--p') {
  port = process.argv[3];
  arr = [];
} else if (typeof process.argv[2] === 'string') {
  arr.push(process.argv[2]);
}

var newPath = 'http://localhost:' + port;

for (var i in arr) {
  newPath += '/' + arr[i];
}

open(newPath, 'Google Chrome');
