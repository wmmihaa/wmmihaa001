#!/usr/bin/env node
console.log("start");
var util = require('./lib/Util.js');
var thermometer;

util.showPaths("Main");

util.addNpmPackage("iot-simlators@1.0.5", function (err) {
    console.log("Package installed");

    var Thermometer = require(process.env.__npmPath + "iot-simlators").Thermometer;
    thermometer = new Thermometer(null, 39);
    // thermometer.start(1000, function (r) {
    //     console.log(r.temperature);
    // })
});