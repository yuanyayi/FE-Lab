var obj = {
  name: 'Rose',
  age: 26,
  friend: {
    name: 'Lily',
    age: 17
  }
}
console.log('Original Object Content:')
console.log(obj)

// 对象的深拷贝和浅拷贝
/* 浅拷贝1： ------------------------------------------- */
function shallowCopy1(oldObj) {
  var newObj = {}
  for (var i in oldObj) {
    newObj[i] = oldObj[i]
  }
  return newObj
}
var obj1 = shallowCopy1(obj)
obj1.name = 'Tommy'
obj1.friend.name = 'Micheal'
console.log()
console.log('************** shallowCopy1: **************')
console.log(obj)
console.log(obj1)
// 虽然进行了遍历，但是可以看到对象中嵌套的部分并没有被成功复制。


obj = {
  name: 'Rose',
  age: 26,
  friend: {
    name: 'Lily',
    age: 17
  }
}
/* 浅拷贝2: Object.assign 对象的合并---------------------------------------- */
function shallowCopy2(oldObj) {
  return Object.assign({}, oldObj)
}
var obj2 = shallowCopy2(obj)
console.log()
obj2.name = 'Tommy'
obj2.friend.name = 'Micheal'
console.log('************** shallowCopy2: **************')
console.log(obj)
console.log(obj2)
/*
 * Object.assign()的用法：1. 合并多个对象；2. 对象浅拷贝；3. 批量为对象增加修改项目。
 */


obj = {
  name: 'Rose',
  age: 26,
  friend: {
    name: 'Lily',
    age: 17
  }
}
/* 深拷贝1：递归 -------------------------------------- */
function deepCopy1(oldObj) {
  var newObj = {}
  copy(newObj, oldObj)

  function copy(target, resource) {
    for (var i in resource) {
      if (typeof resource[i] == 'object') {
        target[i] = {}
        copy(target[i], resource[i])
      } else {
        target[i] = resource[i]
      }
    }
    return target
  }
  return newObj
}
var obj3 = deepCopy1(obj)
console.log()
obj3.name = 'Tommy'
obj3.friend.name = 'Micheal'
console.log('************** deepCopy1: **************')
console.log(obj)
console.log(obj3)
// Success!!


// 深拷贝2：JSON转码。只有当原对象严格符合JSON格式时才能使用----------------------
function deepCopy2(oldObj) {
  return JSON.parse(JSON.stringify(oldObj))
}
var obj4 = deepCopy2(obj)
obj4.name = 'Tommy'
obj4.friend.name = 'Micheal'
console.log()
console.log('************** deepCopy2: **************')
console.log(obj)
console.log(obj4)
// Success!!