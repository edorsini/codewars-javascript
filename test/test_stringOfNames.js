let expect = require('chai').expect;

// Code to test:
const Test = require("../src/stringOfNames.js");

describe('stringOfNames list()', function () {
    it('Must work with many names', function () {
        expect(Test.list([{name: 'Bart'}, {name: 'Lisa'}, {name: 'Maggie'}, {name: 'Homer'}, {name: 'Marge'}])).to.be.equal('Bart, Lisa, Maggie, Homer & Marge');
    });

    it('Must work with many names', function () {
        expect(Test.list([{name: 'Bart'}, {name: 'Lisa'}, {name: 'Maggie'}])).to.be.equal('Bart, Lisa & Maggie');
    });

    it('Must work with two names', function () {
        expect(Test.list([{name: 'Bart'}, {name: 'Lisa'}])).to.be.equal('Bart & Lisa');
    });

    it('Wrong output for a single name', function () {
        expect(Test.list([{name: 'Bart'}])).to.be.equal('Bart');
    });

    it('Must work with no names', function () {
        expect(Test.list([])).to.be.equal('');
    });
});

