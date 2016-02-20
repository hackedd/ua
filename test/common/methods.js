describe('methods', function () {
  var ua = require('../../')
  var userAgent = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/46.0.2490.80 Safari/537.3'
  var defaultUA = {
    browser: true,
    version: 0,
    prefix: 'webkit',
    platform: 'windows',
    device: 'desktop',
    webview: false
  }
  it('it returns an object', function () {
    expect(ua(userAgent)).to.deep.equal({
      browser: 'chrome',
      version: 46,
      prefix: 'webkit',
      platform: 'mac',
      device: 'desktop',
      webview: false
    })
  })

  it('it can merge into an object', function () {
    var obj = {
      field: true
    }
    ua(userAgent, obj)
    expect(obj).to.deep.equal({
      browser: 'chrome',
      version: 46,
      prefix: 'webkit',
      platform: 'mac',
      device: 'desktop',
      field: true,
      webview: false
    })
  })

  it('it can merge into itself', function () {
    ua(userAgent, true)
    expect(ua.browser).to.equal('chrome')
    expect(ua.version).to.equal(46)
    expect(ua.prefix).to.equal('webkit')
    expect(ua.platform).to.equal('mac')
    expect(ua.device).to.equal('desktop')
  })

  it('should work even it _ua === undefined', function () {
    expect(ua()).to.deep.equal(defaultUA)
  })

  it('should work even it _ua === {}', function () {
    expect(ua({})).to.deep.equal(defaultUA)
  })

  it('should work even it _ua is a number', function () {
    expect(ua(42)).to.deep.equal(defaultUA)
  })

  it('should work even it _ua is a function', function () {
    expect(ua(expect)).to.deep.equal(defaultUA)
  })

  it('should work even it _ua is an array', function () {
    expect(ua([])).to.deep.equal(defaultUA)
  })

  it('should work even it _ua === true', function () {
    expect(ua(true)).to.deep.equal(defaultUA)
  })

  it('should work even it _ua === false', function () {
    expect(ua(false)).to.deep.equal(defaultUA)
  })
})
