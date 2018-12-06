let b = {
  name: 'Mary'
}

function Person(name) {
  this.name = name
  this.sayName = function() {
    console.log(this.name)
  }
}

var a = new Person('Anne')

// 正常的使用：
a.sayName()
a.sayName.apply(b);
var fn = a.sayName.bind(b);
fn();

// 用call, apply实现bind
// 1. 写个方法
console.log('--------------------')
function applyBind(fn, obj) {
  return () => { fn.apply(obj) }
}

var callB = applyBind(a.sayName, b)
callB()

// 2.挂载到Function原型上：
console.log('--------------------')
Function.prototype.applyBind = function(obj){
  return ()=>{this.apply(obj)}
}

var callB = a.sayName.applyBind(b)
callB()