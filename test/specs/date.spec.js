import * as dateUtils from 'lib/date'
import chai from 'chai'
chai.should()

describe('DateFormat', () => {
    const date = new Date('2018/01/30 15:25')
    it('fmt YYYY-MM-DD should be 2018-01-30', () => {
      const fmt = dateUtils.DateFormat(date, 'YYYY-MM-DD')
      expect(fmt).to.equal('2018-01-30')
    })
    it('fmt YYYY/MM/DD should be 2018/01/30', () => {
      const fmt = dateUtils.DateFormat(date, 'YYYY/MM/DD')
      expect(fmt).to.equal('2018/01/30')
    })
    it('fmt YYYYMMDD HH:mm:ss should be 20180130 15:25:00', () => {
      const fmt = dateUtils.DateFormat(date, 'YYYYMMDD HH:mm:ss')
      expect(fmt).to.equal('20180130 15:25:00')
    })
  })
  