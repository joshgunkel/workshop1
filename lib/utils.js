

//example usage
//var utils = require('../lib/utils');
//a = [1, 2, 3, 4];
//b = [3, 4, 5];
//c = utils.intersection(a,b);

//intesection of 2 simple arrays
exports.intersection = function (a, b) {
    var c = [];
    j = 0;
    for (var i = 0; i < a.length; ++i) {
        if (b.indexOf(a[i]) != -1)
            c[j++] = a[i];
    }

    return c;
}

//checks if a value exists in an array
exports.arrayContains = function (ary, k) {
    for (var p in ary)
        if (ary[p] === k)
            return true;
    return false;
}


exports.createRandomPassword = function (length, callback) {

    var crypto = require('crypto');

    //generate an access token
    var password = '';
    crypto.randomBytes(length, function (ex, buf) {
        password = buf.toString('hex');
        console.log("password: " + password);

        callback(password);
    });


}


