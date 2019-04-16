let expect = require('chai').expect;
const file = require("../src/duplicateEncode.js");

describe('basicTests()', function () {
    it('should pass the "hello" test', function () {
        let input = 'hello';
        let result = file.duplicateEncode(input);
        expect('(())(').to.be.equal(result);
    });

    it('should pass the "din" test', function () {
        let input = 'din';
        let result = file.duplicateEncode(input);
        expect('(((').to.be.equal(result);
    });

    it('should pass the "recede" test', function () {
        let input = 'recede';
        let result = file.duplicateEncode(input);
        expect('()()()').to.be.equal(result);
    });

    it('should pass the "Success" test ignorning the case', function () {
        let input = 'Success';
        let result = file.duplicateEncode(input);
        expect(')())())').to.be.equal(result);
    });
});


