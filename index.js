#!/usr/bin/env node


if (!process.env.__npmPath) {
    process.env.__npmPath = __dirname + "/node_modules"
}
var path = require("path");
var Module = require('module').Module;

packagePath = path.resolve(process.env.APPDATA ? process.env.APPDATA : ".", "node_modules");

var paths = Module._nodeModulePaths(packagePath);
for (var i = 0; i < paths.length; i++) {
    Module.globalPaths.push(paths[i]);
}

//Module.globalPaths.push(".\node_modules");

console.log("start");
var util = require('./lib/Util.js');
var thermometer;

//util.showPaths("Main");

util.addNpmPackage("iot-simlators@latest", function (err) {
    console.log("Package installed");

    var Thermometer = require("iot-simlators").Thermometer;
    thermometer = new Thermometer(null, 39);
    // thermometer.start(1000, function (r) {
    //     console.log(r.temperature);
    // })
});