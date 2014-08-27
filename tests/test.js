'use strict';
var expect = require('expect.js');
var validLiteral = require('../index');

describe('valid-literal', function () {
    it('should pass a valid literal', function () {
        var str = 'good';
        var result = validLiteral(str);
        expect(result).to.be.an('object');
        expect(result).to.have.property('needsQuotes', false);
        expect(result).to.have.property('needsBrackets', false);
        expect(result).to.have.property('es3Warning', false);
        expect(result).to.have.property('quotedValue', str);
    });

    it('should need quotes and raise es3 warning on es3 identifier', function () {
        var str = 'var';
        var result = validLiteral(str);
        expect(result).to.have.property('needsQuotes', true);
        expect(result).to.have.property('needsBrackets', false);
        expect(result).to.have.property('es3Warning', true);
        expect(result).to.have.property('quotedValue', '\'' + str + '\'');
    });

    it('should need quotes and brackets on dashed-literal', function () {
        var str = 'hello-there';
        var result = validLiteral(str);
        expect(result).to.have.property('needsQuotes', true);
        expect(result).to.have.property('needsBrackets', true);
        expect(result).to.have.property('es3Warning', false);
        expect(result).to.have.property('quotedValue', '\'' + str + '\'');
    });

    it('should need brackets on number', function () {
        var str = '6.4';
        var result = validLiteral(str);
        expect(result).to.have.property('needsQuotes', false);
        expect(result).to.have.property('needsBrackets', true);
        expect(result).to.have.property('es3Warning', false);
        expect(result).to.have.property('quotedValue', '\'' + str + '\'');
    });

    it('should quote correctly', function () {
        var str = '[hello="hello"]'; //jshint ignore:line
        var result = validLiteral(str);
        expect(result).to.have.property('needsQuotes', true);
        expect(result).to.have.property('needsBrackets', true);
        expect(result).to.have.property('es3Warning', false);
        expect(result).to.have.property('quotedValue', '\'' + str + '\'');
    });

    it('should require a string input on non-string', function () {
        var str = 6;
        expect(validLiteral).withArgs(str).to.throwException();
    });

    it('should work with empty string', function () {
        var str = '';
        var result = validLiteral(str);
        expect(result).to.have.property('needsQuotes', true);
        expect(result).to.have.property('needsBrackets', true);
        expect(result).to.have.property('es3Warning', false);
        expect(result).to.have.property('quotedValue', '\'' + str + '\'');
    });
});
