#!/usr/bin/env node

if (!process.env.__npmPath) {
    process.env.__npmPath = __dirname + "/node_modules"
}
process.env.NODE_PATH = __dirname;
require('module').Module._initPaths();

var path = require("path");
var Module = require('module').Module;

console.log('Before');
for (var i = 0; i < require.main.paths.length; i++) {
    console.log(require.main.paths[i]);
}
console.log('');

packagePath = path.resolve(process.env.APPDATA ? process.env.APPDATA : ".", "node_modules");
require('app-module-path').addPath(packagePath);
require('app-module-path').addPath(__dirname);
Module.globalPaths.push(packagePath);
console.log('');

console.log('After');
for (var i = 0; i < require.main.paths.length; i++) {
    console.log(require.main.paths[i]);
}

console.log("start");
var util = require('./lib/Util.js');
var thermometer;

//util.showPaths("Main");

util.addNpmPackage("iot-simlators@latest", function (err) {
    console.log("Package installed");

    var Thermometer = require("iot-simlators").Thermometer;
    thermometer = new Thermometer(null, 39);

});
