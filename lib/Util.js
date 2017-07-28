
'use strict';
var exports = module.exports = {};
var npm = require('npm');

exports.addNpmPackage = function (npmPackage, callback) {
    var ret;
    var me = this;

    npm.load({ loaded: true }, function (err) {
        process.env.__npmPath = npm.dir + "/";

        npm.commands.install([npmPackage], function (er, data) {
            callback(er);
        });
    });
};

exports.require = function (npmPackage) {
    console.log('require called');

};
exports.showPaths = function (from) {
    console.log('');
    console.log('showPaths from: ' + from);

    console.log('__dirname: ' + __dirname);
    console.log('SNAP_APP_DATA_PATH: ' + process.env.SNAP_APP_DATA_PATH);
    console.log('SNAP_APP_USER_DATA_PATH: ' + process.env.SNAP_APP_USER_DATA_PATH);
    console.log('SNAP_APP_PATH: ' + process.env.SNAP_APP_PATH);
    console.log('SNAP_APP_DATA_PATH: ' + process.env.SNAP_APP_DATA_PATH);
    console.log('');
    console.log('ENVIRONEMENT VARIABLES:');
    console.log(process.env);
    console.log('');
};
