const makeSure = require('../index.js');
const assert = require('assert');

describe('when passed argument is undefined', () => {
    it('it should be clearly communicated', () => {
        assert.equal('{} is undefined', makeSure(undefined).errors[0])
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
