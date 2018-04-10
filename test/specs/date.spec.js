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
  

  describe('getMonthFirstAndEnd', () => {
    const now = new Date('2018-02-23')
    const {start, end} = dateUtils.getMonthFirstAndEnd({
      offset: -1,
      month: 2
    })
    it('first date is 1 and end date is 31', () => {
      expect(start.getDate()).to.equal(1)
      expect(end.getDate()).to.equal(31)
    })
  })

  describe('getWeek', () => {
    const now = new Date('2018-02-23')
    const week = dateUtils.getWeek(now)
    it('2018-02-23 is the 8th week in 2018', () => {
      expect(week).to.equal(8)
    })
  })

  describe('getWeekInYear', () => {
    const now = new Date('2018-02-23')
    const week = dateUtils.getWeekInYear(now)
    it('2018-02-23 is the 8th week in 2018', () => {
      expect(week).to.equal(8)
    })
  })
