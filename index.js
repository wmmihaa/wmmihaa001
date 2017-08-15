



var url = require('url');
var request = require("request");
var uri = 'https://microservicebus.com/jasper/signInUsingICCID?iccid=014752000022947';

var interval = setInterval(function () {
    console.log("calling " + uri);
    request.post({ url: uri, timeout: 3000 }, function (err, response, body) {
        if (err || response.statusCode !== 200)
            console.log("ERROR: " + err);
        else if (response.statusCode !== 200)
            console.log("FAILED: response code: " + response.statusCode);
        else {
            console.log("SUCESS: response code: " + response.statusCode);
        }
    })
}, 5000)

