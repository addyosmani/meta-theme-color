#  [![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][daviddm-url]][daviddm-image]

> Parses a HTML theme-color from a meta tag


## Install

```sh
$ npm install --save meta-theme-color
```


## Usage

```js
var metaThemeColor = require('meta-theme-color');

metaThemeColor('<meta name="theme-color" content="#3372DF">');
// => #3372DF

metaThemeColor('<meta name="theme-color" content="rgb(255,0,0)">');
// => rgb(255,0,0)

metaThemeColor('<meta   name="theme-color" content=" red   ">');
// => red

metaThemeColor('<meta   name="theme-color" content=" rgb(255,0,0)   ">');
// => rgb(255,0,0)

metaThemeColor('<html></html>');
// => ''
```


## License

MIT © [Addy Osmani](addyosmani.com)


[npm-url]: https://npmjs.org/package/meta-theme-color
[npm-image]: https://badge.fury.io/js/meta-theme-color.svg
[travis-url]: https://travis-ci.org/addyosmani/meta-theme-color
[travis-image]: https://travis-ci.org/addyosmani/meta-theme-color.svg?branch=master
[daviddm-url]: https://david-dm.org/addyosmani/meta-theme-color.svg?theme=shields.io
[daviddm-image]: https://david-dm.org/addyosmani/meta-theme-color
