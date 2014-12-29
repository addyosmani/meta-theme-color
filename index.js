'use strict';
var cheerio = require('cheerio');
var trim    = require('trim');

module.exports = function (str) {
  // Tyical input: <meta name="theme-color" content="#3372DF">
  var $          = cheerio.load(str);
  var metatag    = $('meta[name=theme-color]');
  var content    = metatag.attr("content") || '';
  return trim(content);
};
