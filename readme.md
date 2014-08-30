# valid-literal
> Unquoted JavaScript property name validator

[![NPM Version](http://img.shields.io/npm/v/valid-literal.svg?style=flat)](https://npmjs.org/package/valid-literal)
[![NPM Downloads](http://img.shields.io/npm/dm/valid-literal.svg?style=flat)](https://npmjs.org/package/valid-literal)
[![Build Status](http://img.shields.io/travis/pgilad/valid-literal.svg?style=flat)](https://travis-ci.org/pgilad/valid-literal)

This module checks if a given property name can be used without quotes and/or with dot notation.

It is based on Mathias Bynens brilliant [javascript-properties article](https://mathiasbynens.be/notes/javascript-properties).
So this is a **node-port** of his [website implementation](https://github.com/mathiasbynens/mothereff.in/tree/master/js-properties).

## Installation

```bash
$ npm install valid-literal --save
```

## Usage

```js
var validLiteral = require('valid-literal');

var results = validLiteral('myCoolLiteral');
console.log(results);
/* {
    needsQuotes: false,
    needsBrackets: false,
    es3Warning: false,
    quotedValue: 'myCoolLiteral'
   }
*/
```

## Results

Your property input will be checked and you will get 3 flags as output:

### needsQuotes

Quotes can only be omitted if the property name is a numeric literal or a valid identifier name:

```js
var obj = {
        nonQuoted: true,
        'must-be-quoted' : true
    };
```

### needsBrackets

Dot notation can only be used when the property name is a valid identifier name:

```js
obj.bracketFree = true; //use the supreme dot notation
obj['requires-brackets'] = true; //string must be inside brackets to be used as property
```

### es3Warning

Should you want to support ES3, you cannot use some identifiers:
```js
obj['var'] //-> invalid in ES3
var obj = {
        goto: true //-> invalid in ES3
    };
```

### quotedValue

Your quoted string in case there are problematic characters.

## API

`validLiteral(input)`

### input

Type: `String`

Property to validate

## License
Copyright © 2014 Gilad Peleg.
Licensed under the MIT license.
