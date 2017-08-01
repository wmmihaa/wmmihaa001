#!/usr/bin/env node

// if (!process.env.__npmPath) {
//     process.env.__npmPath = __dirname + "/node_modules"
// }

// process.env.NODE_DEBUG = "module";
// process.env.NODE_PATH = __dirname + ";" + __dirname + "/node_modules";

// var m = require('module');
// m.Module._initPaths();

// var Module = m.Module;

 var path = require("path");

// console.log('Before');
// for (var i = 0; i < require.main.paths.length; i++) {
//     console.log(require.main.paths[i]);
// }
// console.log('');

console.log("process.env.APPDATA: " + process.env.APPDATA);
console.log("process.env.HOME: " + process.env.HOME);
packagePath = path.resolve(process.env.APPDATA ? process.env.APPDATA : ".", "node_modules");
require('app-module-path').addPath(packagePath);
// require('app-module-path').addPath(__dirname);
require('module').Module.globalPaths.push(packagePath);
// console.log('');


// for (var i = 0; i < require.main.paths.length; i++) {

//     if (Module.globalPaths.indexOf(require.main.paths[i]) === -1)
//         Module.globalPaths.push(require.main.paths[i]);
// }

// console.log('After');
// for (var i = 0; i < require.main.paths.length; i++) {
//     console.log(require.main.paths[i]);
// }

require('colors');
console.log("start".bgYellow.black);
var util = require('./lib/Util.js');
var thermometer;

//util.showPaths("Main");

util.addNpmPackage("iot-simlators@latest", function (err) {
    console.log("Package installed");

    var Thermometer = require("iot-simlators").Thermometer;
    thermometer = new Thermometer(null, 39);

});
