
'use strict';
var exports = module.exports = {};
var npm = require('npm');
var path = require("path");
var fs = require('fs');

exports.addNpmPackage = function (npmPackage, callback) {
    var ret;
    var me = this;
    
    npm.load({ loaded: true }, function (err) {
        var t= npm.dir + "/";

        npm.commands.install([npmPackage], function (er, data) {
            callback(er);
        });
    });
};

exports.require = function (npmPackage) {
    console.log('require called');

    // Check if package is available in root first
    var packagePath = path.resolve(process.env.__npmPath, npmPackage);
    try {
        var stats = fs.lstatSync(packagePath);
        if (stats.isDirectory()) {
            console.log('loading from root');

            return require(packagePath);
        }
    }
    catch (e) {
        console.log("Unable to load [" + npmPackage + "] package from " + packagePath);
    }

    // Try from process.env.APPDATA
    packagePath = path.resolve(process.env.APPDATA, "node_modules");
    packagePath = path.resolve(packagePath, npmPackage);
    try {
        var stats = fs.lstatSync(packagePath);
        if (stats.isDirectory()) {
            console.log('loading from process.env.APPDATA');

            return require(packagePath);
        }
    }
    catch (e) {
        console.log("Unable to load [" + npmPackage + "] package from " + packagePath);
    }

    // Try from ~/
    packagePath = path.resolve("~/", "node_modules");
    packagePath = path.resolve(packagePath, npmPackage);
    try {
        var stats = fs.lstatSync(packagePath);
        if (stats.isDirectory()) {
            console.log('loading from ~/');

            return require(packagePath);
        }
    }
    catch (e) {
        console.log("Unable to load [" + npmPackage + "] package from " + packagePath);
    }

    console.log('loading from somewhere');
    return require(npmPackage);

};

exports.showPaths = function (from) {
    console.log('');
    console.log('showPaths from: ' + from);

    console.log('rootPath: ' + process.env.__npmPath);
    console.log('__dirname: ' + __dirname);
    console.log('SNAP_DATA:: ' + process.env.SNAP_DATA);
    console.log('SNAP_USER_DATA: ' + process.env.SNAP_USER_DATA);
    console.log('');
    console.log('ENVIRONEMENT VARIABLES:');
    console.log(process.env);
    console.log('');
};
