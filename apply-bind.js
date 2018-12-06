let b = {
  name: 'Mary'
}

function Person(name) {
  this.name = name
  this.sayName = function(words='Hello') {
    console.log(words+', '+this.name+'!')
  }
}

var a = new Person('Anne')

// 正常的使用：
a.sayName()
a.sayName.apply(b,['Hi']);
var fn = a.sayName.bind(b);
fn('Hi');

// 用call, apply实现bind
// 1. 写个方法
console.log('--------------------')
function applyBind(fn, obj) {
  return () => { fn.apply(obj, [].slice.call(arguments, 2)) }
}

var callB = applyBind(a.sayName, b, 'Good Morning')
callB()

// 2.挂载到Function原型上：
console.log('--------------------')
Function.prototype.applyBind = function(obj){
  return ()=>{this.apply(obj, [].slice.call(arguments, 1))}
}

var callB = a.sayName.applyBind(b, 'Nice to meet you')
callB()