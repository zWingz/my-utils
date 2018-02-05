import * as stringUtils from 'lib/string'
import chai from 'chai'
chai.should()

describe('padStart', () => {
    it('hello padEnd * expect to equeal *****hello', () => {
        let str = 'hello'
        str = stringUtils.padStart(str, 10, '*')
        expect(str).to.equal('*****hello')
    })
    it('hello padEnd * expect to equeal hello*****', () => {
        let str = 'hello'
        str = stringUtils.padEnd(str, 10, '*')
        expect(str).to.equal('hello*****')
    })
})
