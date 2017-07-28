#!/usr/bin/env node


if (!process.env.__npmPath) {
    process.env.__npmPath = __dirname + "/node_modules"
}

console.log("start");
var util = require('./lib/Util.js');
var thermometer;

util.showPaths("Main");

util.addNpmPackage("iot-simlators@latest", function (err) {
    console.log("Package installed");

    var Thermometer = util.require("iot-simlators").Thermometer;
    thermometer = new Thermometer(null, 39);
    // thermometer.start(1000, function (r) {
    //     console.log(r.temperature);
    // })
});