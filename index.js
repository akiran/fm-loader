var utils = require('loader-utils');
var fm = require('front-matter');
var marked = require('marked');

module.exports = function (content) {
  this.cacheable();
  var opt = utils.parseQuery(this.query);
  var obj = fm(content);
  if (opt.markdown) {
    obj.body = marked(obj.body);
  }
  return "module.exports = " + JSON.stringify(obj, undefined, "\t");
};