# valid-literal
> Check if input is a valid javascript string literal or needs quoting

[![NPM Version](http://img.shields.io/npm/v/valid-literal.svg?style=flat)](https://npmjs.org/package/valid-literal)
[![NPM Downloads](http://img.shields.io/npm/dm/valid-literal.svg?style=flat)](https://npmjs.org/package/valid-literal)
[![Build Status](http://img.shields.io/travis/pgilad/valid-literal.svg?style=flat)](https://travis-ci.org/pgilad/valid-literal)

I wanted a module to verify if a string is a valid literal,
 and I ran into Mathias Bynens brilliant [article](https://mathiasbynens.be/notes/javascript-properties).
And even more - brilliant [website implementation](https://github.com/mathiasbynens/mothereff.in/tree/master/js-properties).

So I **literally** copied his validator, made it more node like and added some tests.

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

Your string input will be checked and you will get 3 flags as output:

### needsQuotes

Whether you must quote your input in order to use it in an object literal:
```js
var obj = {
        nonQuoted: true,
        'must-be-quoted' : true
    };
```

### needsBrackets

Whether you must use bracket notation in order to access this input as a property:
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

String to validate

## License
Copyright © 2014 Gilad Peleg.
Licensed under the MIT license.
