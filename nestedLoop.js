// 循环嵌套

var a = {
  name: 'a',
  child: b,
}

var b = {
  name: 'b',
  child: a
}

console.log(a) // 还没有给b赋值，所以child: undefined.
console.log(b)


function aaa(){
  return {
    name: 'aaa',
    child: bbb()
  }
}

function bbb(){
  return {
    name: 'aaa',
    child: aaa()
  }
}

console.log(aaa()) // RangeError: Maximum call stack size exceeded 栈溢出