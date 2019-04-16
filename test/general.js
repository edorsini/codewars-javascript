let expect = require('chai').expect;

// Code to test:
const duplicateEncode = require("../src/duplicateEncode.js");
const XO = require("../src/XO.js");

describe('duplicateEncode()', function () {
    it('should pass the "hello" test', function () {
        let input = 'hello';
        let result = duplicateEncode.duplicateEncode(input);
        expect('(())(').to.be.equal(result);
    });

    it('should pass the "din" test', function () {
        let input = 'din';
        let result = duplicateEncode.duplicateEncode(input);
        expect('(((').to.be.equal(result);
    });

    it('should pass the "recede" test', function () {
        let input = 'recede';
        let result = duplicateEncode.duplicateEncode(input);
        expect('()()()').to.be.equal(result);
    });

    it('should pass the "Success" test ignorning the case', function () {
        let input = 'Success';
        let result = duplicateEncode.duplicateEncode(input);
        expect(')())())').to.be.equal(result);
    });
});

describe('XO()', function () {
    it('should pass the "xo" test', function () {
        let input = 'xo';
        let result = XO.XO(input);
        expect(result).to.be.true;
    });

    it('should pass the "xxOo" test', function () {
        let input = 'xxOo';
        let result = XO.XO(input);
        expect(result).to.be.true;
    });

    it('should pass the "xxxm" test', function () {
        let input = 'xxxm';
        let result = XO.XO(input);
        expect(result).to.be.false;
    });

    it('should pass the "Oo" test', function () {
        let input = 'Oo';
        let result = XO.XO(input);
        expect(result).to.be.false;
    });

    it('should pass the "ooom" test', function () {
        let input = 'ooom';
        let result = XO.XO(input);
        expect(result).to.be.false;
    });

});


