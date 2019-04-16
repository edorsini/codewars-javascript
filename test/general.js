let expect = require('chai').expect;

// Code to test:
const duplicateEncode_v1 = require("../src/duplicateEncode_v1.js");
const duplicateEncode_v2 = require("../src/duplicateEncode_v2.js");
const XO_v1 = require("../src/XO_v1.js");
const XO_v2 = require("../src/XO_v2.js");

describe('duplicateEncode() version 1', function () {
    it('should pass the "hello" test', function () {
        let input = 'hello';
        let result = duplicateEncode_v1.duplicateEncode(input);
        expect('(())(').to.be.equal(result);
    });

    it('should pass the "din" test', function () {
        let input = 'din';
        let result = duplicateEncode_v1.duplicateEncode(input);
        expect('(((').to.be.equal(result);
    });

    it('should pass the "recede" test', function () {
        let input = 'recede';
        let result = duplicateEncode_v1.duplicateEncode(input);
        expect('()()()').to.be.equal(result);
    });

    it('should pass the "Success" test ignorning the case', function () {
        let input = 'Success';
        let result = duplicateEncode_v1.duplicateEncode(input);
        expect(')())())').to.be.equal(result);
    });
});

describe('duplicateEncode() version 2', function () {
    it('should pass the "hello" test', function () {
        let input = 'hello';
        let result = duplicateEncode_v2.duplicateEncode(input);
        expect('(())(').to.be.equal(result);
    });

    it('should pass the "din" test', function () {
        let input = 'din';
        let result = duplicateEncode_v2.duplicateEncode(input);
        expect('(((').to.be.equal(result);
    });

    it('should pass the "recede" test', function () {
        let input = 'recede';
        let result = duplicateEncode_v2.duplicateEncode(input);
        expect('()()()').to.be.equal(result);
    });

    it('should pass the "Success" test ignorning the case', function () {
        let input = 'Success';
        let result = duplicateEncode_v2.duplicateEncode(input);
        expect(')())())').to.be.equal(result);
    });
});

describe('XO() version 1', function () {
    it('should pass the "xo" test', function () {
        let input = 'xo';
        let result = XO_v1.XO(input);
        expect(result).to.be.true;
    });

    it('should pass the "xxOo" test', function () {
        let input = 'xxOo';
        let result = XO_v1.XO(input);
        expect(result).to.be.true;
    });

    it('should pass the "xxxm" test', function () {
        let input = 'xxxm';
        let result = XO_v1.XO(input);
        expect(result).to.be.false;
    });

    it('should pass the "Oo" test', function () {
        let input = 'Oo';
        let result = XO_v1.XO(input);
        expect(result).to.be.false;
    });

    it('should pass the "ooom" test', function () {
        let input = 'ooom';
        let result = XO_v1.XO(input);
        expect(result).to.be.false;
    });

});


describe('XO() version 2', function () {
    it('should pass the "xo" test', function () {
        let input = 'xo';
        let result = XO_v2.XO(input);
        expect(result).to.be.true;
    });

    it('should pass the "xxOo" test', function () {
        let input = 'xxOo';
        let result = XO_v2.XO(input);
        expect(result).to.be.true;
    });

    it('should pass the "xxxm" test', function () {
        let input = 'xxxm';
        let result = XO_v2.XO(input);
        expect(result).to.be.false;
    });

    it('should pass the "Oo" test', function () {
        let input = 'Oo';
        let result = XO_v2.XO(input);
        expect(result).to.be.false;
    });

    it('should pass the "ooom" test', function () {
        let input = 'ooom';
        let result = XO_v2.XO(input);
        expect(result).to.be.false;
    });

});

