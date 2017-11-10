const expect = chai.expect

describe('clear', function () {
  it('is a function', function () {
    expect(sum).to.be.a('function')
  })
  it('should add numbers together', function () {
    expect(sum('10+20')).to.equal(30)
  })
  it('should multiply numbers together', function () {
    expect(sum('10*20')).to.equal(200)
  })
  it('should divide numbers', function () {
    expect(sum('20/10')).to.equal(2)
  })
  it('should subtract numbers', function () {
    expect(sum('20-10')).to.equal(10)
  })
})
