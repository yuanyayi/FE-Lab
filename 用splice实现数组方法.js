
console.log('var arr = [1, 2, 3]\n')
// ------------------
Array.prototype.splicePush = function (...values) {
  this.splice(this.length, 0, ...values)
  return this.length
}
var arr = [1, 2, 3]
console.log('arr.splicePush(10, 11, 12) = ' + arr.splicePush(10, 11, 12) + '; arr = [' + arr + ']\n')
// ------------------
Array.prototype.splicePop = function () {
  var item = this.splice(arr.length-1, 1)[0]
  return item
}
var arr = [1, 2, 3]
console.log('arr.splicePop() = ' + arr.splicePop() + '; arr = [' + arr + ']\n')
// ------------------
Array.prototype.spliceShift = function () {
  var item = this.splice(0, 1)[0]
  return item
}
var arr = [1, 2, 3]
console.log('arr.spliceShift() = ' + arr.spliceShift() + '; arr = [' + arr + ']\n')
// ------------------
Array.prototype.spliceUnshift = function (...values) {
  values.splice(values.length, 0, ...this)
  this.splice(0, this.length, ...values)
  return values.length
}
var arr = [1, 2, 3]
console.log('arr.spliceUnshift(10, 11, 12) = ' + arr.spliceUnshift(10, 11, 12) + '; arr = [' + arr + ']\n')