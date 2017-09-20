var loaderUtils = require('loader-utils');
var AdmZip = require('adm-zip');
var path = require('path');
var querystring = require('querystring');
var _ = require('underscore');

var cache = {};


module.exports = function(source) {
    console.log(source)
    var callback = this.async();
    callback(null, 'test2')
};