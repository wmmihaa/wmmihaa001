#!/usr/bin/env node


//require('module')._initPaths();

var path = require("path");

console.log(process.argv);
console.log("process.env.APPDATA: " + process.env.APPDATA);
console.log("process.env.HOME: " + process.env.HOME);
console.log("process.env.PWD: " + process.env.PWD);
console.log("__dirname: " + __dirname);
console.log(".: " + path.resolve("."));
console.log("process.cwd: " + path.resolve(process.cwd()));
console.log();
console.log('****************************');

console.log('Before');
for (var i = 0; i < require.main.paths.length; i++) {
    console.log(require.main.paths[i]);
}
console.log('****************************');

packagePath = path.resolve(".", "node_modules");
console.log('packagePath: ' + packagePath);

require('app-module-path').addPath(packagePath);
require('module').Module.globalPaths.push(packagePath);
console.log();
console.log('****************************');

console.log('After');
for (var i = 0; i < require.main.paths.length; i++) {
    console.log(require.main.paths[i]);
}
console.log('****************************');
console.log();

require('colors');

console.log("start".bgYellow.black);
var util = require('./lib/Util.js');

// util.addNpmPackage("wmmihaa002@latest", function (err) {
//     console.log("Package installed");

//     var w2 = require("wmmihaa002");
//     w2.printTime();

// });

util.addNpmPackage("microservicebus.core@beta", true, function (err) {
    if (err) {
        console.log("Unable to install core update".bgRed.white);
        console.log("Error: " + err);
    }
    else {
        console.log("Core installed successfully".bgRed.white);

        var zzz = require("microservicebus.core");
        console.log("isnull: " + zzz == null);
    }
});