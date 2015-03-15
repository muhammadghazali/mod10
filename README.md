#  [![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][daviddm-image]][daviddm-url]

What Luhn algorithm can do for us ?
> Validate a variety of identification numbers, such as credit card numbers or IMEI numbers.

What Luhn algorithm cannot do for us ?

> Prevent malicious attacks, what Luhn algorightm does is check digits, specifically checking for typos such as missing digits.

## Install

```sh
$ npm install --save mod10
```


## Usage

```js
var mod10 = require('mod10');

// will return true if the identification number is valid
mod10(30569309025904);
```

## License

MIT © [Muhammad Ghazali](http://muhammadghazali.wordpress.com)


[npm-image]: https://badge.fury.io/js/mod10.svg
[npm-url]: https://npmjs.org/package/mod10
[travis-image]: https://travis-ci.org/muhammadghazali/mod10.svg?branch=master
[travis-url]: https://travis-ci.org/muhammadghazali/mod10
[daviddm-image]: https://david-dm.org/muhammadghazali/mod10.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/muhammadghazali/mod10
