const makeSure = require('../make-sure.js');
const assert = require('assert');

describe('when passed argument is undefined', () => {
    it('it should be clearly communicated', () => {

        let theobject = undefined;
        let result = makeSure(undefined);
        assert.equal('{} is undefined', result.errors[0])
    })
})

describe('when an expected property is undefined', () => {
    it('it should be clearly communicated', () => {
        const o = {
            dude: {
                surname: 'lebowski'
            }
        };

        assert.equal(makeSure(o).has('dude', x => {
            x.has('firstname').has('lastname')
        }).errors[0], '{}.dude.firstname is undefined')

    })
})
describe('when an expected property is on and undefined parent', () => {
    it('it should be clearly communicated', () => {
        const o = {
            dude: {
                surname: 'lebowski'
            }
        };

        assert.equal(makeSure(o)
          .has('donnie', x => {
            x.has('urn')
          })
        .errors[0], '{}.donnie is undefined')

    })
})
describe('when multiple properties are undefined', () => {
    it('it should be appended to the errors array', () => {
        const o = {
            dude: {

            }
        };

        assert.equal(makeSure(o).has('dude', x => {
            x.has('firstname').has('lastname')
        }).errors.length, 2)

    })
})
describe('when throw is called when errors exist', () => {
    it('it should throw Error', () => {
        const o = {
            dude: {

            }
        };

        assert.throws(() => {makeSure(o).has('dude', x => {
            x.has('firstname').has('lastname')
        }).throw()}, Error)

    })
})
