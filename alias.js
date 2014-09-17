var fs = require('fs'),
    path = require('path');

var basePath = path.dirname(require.main.filename),
    map = {};

function alias(key) {
    var arr = key.split(path.sep);
    if (map[arr[0]]) {
        arr[0] = map[arr[0]];
        return path.resolve.apply(null, arr);
    }
    return key;
}

function define(key, value) {
    if (typeof key === 'string' && typeof value === 'string') {
        map[key] = value;
    }
}

alias.define = function(key, value) {
    if (typeof key === 'object') {
        for (var n in key) {
            define(n, key[n]);
        }
    } else {
        define(key, value);
    }
};

alias.require = function(key) {
    return require(path.resolve(basePath, alias(key)));
};

alias.define(require(path.resolve(basePath, 'package.json')).alias);

module.exports = alias;
