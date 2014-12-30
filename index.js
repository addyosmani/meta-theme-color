'use strict';
var cheerio = require('cheerio');

/**
 * Export color string (e.g hex color) from the "content" 
 * portion of the theme-color meta-tag
 * @param  {String} str HTML String
 * @return {String}     theme-color string if one is present
 */
module.exports = function (str) {
  // Tyical input: <meta name="theme-color" content="#3372DF">
  var $          = cheerio.load(str);
  var metatag    = $('meta[name=theme-color]');
  var content    = metatag.attr("content") || '';
  return content.trim();
};
