/*global describe, it */
'use strict';
var assert = require('assert');
var metaThemeColor = require('../');

describe('meta-theme-color node module', function () {
  it('should return a theme-color extracted from a meta tag', function (done) {
    assert.equal(metaThemeColor('<meta name="theme-color" content="#3372DF">'), '#3372DF');
    assert.equal(metaThemeColor('<meta name="theme-color" content="#000">'), '#000');
    assert.equal(metaThemeColor('<meta name=\'theme-color\' content="#3372DF">'), '#3372DF');
    assert.equal(metaThemeColor('<meta   name="theme-color" content="#3372DF" >'), '#3372DF');
    assert.equal(metaThemeColor('<meta   name="theme-color" content=\'#3372DF\' >'), '#3372DF');
    assert.equal(metaThemeColor('<meta name=\'theme-color\' content=\'#3372DF\'>'), '#3372DF');
    assert.equal(metaThemeColor('<meta name=\'theme-color\' content=\'red\'>'), 'red');
    assert.equal(metaThemeColor('<meta content=\'red\' name=\'theme-color\'>'), 'red');
    assert.equal(metaThemeColor('<meta name="theme-color" content=" #3372DF">'), '#3372DF');
    assert.equal(metaThemeColor('<meta   name="theme-color" content=" red   ">'), 'red');
    assert.equal(metaThemeColor('<meta   name="theme-color" content=" rgb(255,0,0)   ">'), 'rgb(255,0,0)');
    assert.equal(metaThemeColor('<meta name="theme-color" content="rgb(255,0,0)">'), 'rgb(255,0,0)');
    done();
  });

  it('should return a theme-color extracted from a HTML string', function (done) {
    assert.equal(metaThemeColor('<html><head><meta name="theme-color" content="#3372DF"></head><body></body></html>'), '#3372DF');
    done();
  });

  it('should return an empty color string for non-valid input', function (done) {
    assert.equal(metaThemeColor('<meta name="theme-color">'), '');
    assert.equal(metaThemeColor('<meta name>'), '');
    assert.equal(metaThemeColor('<html></html>'), '');
    done();
  });
});
