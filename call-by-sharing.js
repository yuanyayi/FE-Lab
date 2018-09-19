function changeStuff(a, b, c) {
  a = a * 10;
  b.item = "changed";
  c = {
    item: "changed"
  };
  console.log(a, b.item, c.item)
  console.log('changeStuff ended.\n\n')
}

var num = 10;
var obj1 = {
  item: "unchanged"
};
var obj2 = {
  item: "unchanged"
};

changeStuff(num, obj1, obj2);

console.log(num);
console.log(obj1.item);
console.log(obj2.item);

// 全部都是值传递，没有引用传递！但是当修改一个变量的**内部组成**时（b.item），这个修改会被传递回来。
// 另一种解释方式：传递的object(b)值中的变量(b.item)是引用传递。