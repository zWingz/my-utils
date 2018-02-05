import * as objUtils from 'lib/object'
import chai from 'chai'
chai.should()

// import 'js/dom'
describe('ObjectClone', () => {
  const obj1 = {a: 1}
  const obj2 = objUtils.ObjectClone(obj1)
  it('prototype should be equal ', () => {
    expect(obj1.a).to.equal(obj2.a)
  })
  it('objects should not be equal', () => {
    expect(obj1).to.not.equal(obj2)
  })
})


describe('ValidObj', () => {
  const obj1 = {
    name: 'xiaoming',
    key2: '',
    key3: 'key3'
  }
  it('verify all key should be false', () => {
    expect(objUtils.validObj(obj1)).to.be.false
  })
  it('verify name and key3 should be true', () => {
    expect(objUtils.validObj(obj1, ['name', 'key3'])).to.be.true
  })
  it('verify prototype should be a number', () => {
    const o = { key: 1, key2: '2', key3: 'str' }
    expect(objUtils.validObj(o, Object.keys(o), key => !isNaN(o[key])))
    .to.be.false
  })
})

