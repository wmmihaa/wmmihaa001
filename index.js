#!/usr/bin/env node
console.log("start");
var npm = require('npm');
var thermometer;

addNpmPackage("iot-simlators", function (err) {
    console.log("Package installed");

    var Thermometer = require(process.env.__npmPath+"iot-simlators").Thermometer;
    thermometer = new Thermometer(null, 39);
    thermometer.start(1000, function (r) {
        console.log(r.temperature);
    })
});

function addNpmPackage(npmPackage, callback) {
    var ret;
    var me = this;

    npm.load({ loaded: true }, function (err) {
        process.env.__npmPath = npm.dir + "/";

        // npm.on("log", function (message) {
        //     ret = null;
        // });
        // npm.on("error", function (error) {
        //     ret = null;
        // });
        npm.commands.install([npmPackage], function (er, data) {
            callback(er);
        });
    });
};