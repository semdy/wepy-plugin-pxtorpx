var PxToRpx = function (opts = {}) {
  var def = {
    filter: new RegExp('.(wxss|wxml|json)$')
  }
  this.setting = Object.assign({}, def, opts)
}

PxToRpx.prototype.apply = function apply(op) {
  if (this.setting.filter.test(op.file)) {
    if (op.code) {
      op.code = op.code.replace(/\b(\d+(\.\d+)?)px\b/ig, function (match, $1) {
        return $1 * 2 + 'rpx'
      })
    }
  }
  op.next()
}

exports.default = PxToRpx