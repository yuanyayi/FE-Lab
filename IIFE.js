// IIFE
// 0. 直接写一个匿名函数会报错，但是赋值给一个变量就好了。
var func = function () { console.log('Test0 is running now.') };
func();
// 1-1. 用括号括起来再加个小括号就是IIFE了！
(function () { console.log('Test1 is running now.') })();
/* 1-2. 如果一定要写匿名的，将函数括起来也行（上面的），整个括起来也行。
 * 在javascript里，括号内部不能包含语句，当解析器对代码进行解释的时候，先碰到了()，然后碰到function关键字就会自动将()里面的代码识别为函数表达式而不是函数声明。
 */
(function () { console.log('Test2 is running now.') }());


// 2. 其他写法：
// 括号和JS的一些操作符（如 = && || ,等）可以在函数表达式和函数声明上消除歧义
// 如下代码中，解析器已经知道一个是表达式了，于是也会把另一个默认为表达式
// 但是两者交换则会报错
var i = function () { return 10; }();
true && function () { /* code */ }();
0,
function () { /* code */ }();
// 如果你不怕代码晦涩难读，也可以选择一元运算符
! function () { /* code */ }();
~ function () { /* code */ }(); - function () { /* code */ }(); + function () { /* code */ }();
// 你也可以这样
new function () { /* code */ }
new function () { /* code */ }() // 带参数


// 3. 立即执行函数能配合闭包保存状态。
function loop() {
  for (var i = 0; i < 10; i++) {
    setTimeout(() => console.log(i), 100)
  }
}
loop()

function loop1() {
  for (var i = 0; i < 10; i++) {
    (function (n) {setTimeout(() => { console.log(n) }, 100)}(i))
  }
}
loop1()