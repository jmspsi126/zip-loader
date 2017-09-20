var loaderUtils = require('loader-utils');
var AdmZip = require('adm-zip');
var path = require('path');
var querystring = require('querystring');
var _ = require('underscore');

var cache = {};


module.exports = function(source, map) {
    this.callback(null, source, map);    
};
module.exports.raw = true;

module.exports.pitch = function(a, b, data) {
    

    this.cacheable();

    var query = loaderUtils.parseQuery(this.resourceQuery)

    var zip;
    if(typeof cache[this.resourcePath] == 'undefined'){
        zip = new AdmZip(this.resourcePath);
        cache[this.resourcePath] = zip;
    }else{
        zip = cache[this.resourcePath];
    }

    var buffer = zip.readFile(zip.getEntry(query.file))
    //this.emitFile(query.file, buffer)

    //this.resource = '';
    //data.value = this.options.output.path+query.file;
    this.webpack = true;
    return buffer;
    //return this.options.output.path+query.file;
    //return 'module.exports = "'+this.options.output.path+query.file+'"';
};