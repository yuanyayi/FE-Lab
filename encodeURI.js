var part = "春节/test/index.html?名字=桃矢&年龄=2 3"
var url = "http://www.baidu.com/" + part

console.group()
console.log(encodeURI(url))
console.log(encodeURIComponent(url))
console.log(escape(url))
console.groupEnd()

console.log("***********************************************")

console.group()
console.log(encodeURI(part))
console.log(encodeURIComponent(part))
console.log(escape(part))
console.groupEnd()

/*
 * encodeURI()转码出来就是直接可以使用的url
 * encodeURIComponent()转码会更加彻底，转出来的并不是可以直接使用的url
 */

%E6%98%A5%E8%8A%82/test/index.html?%E5%90%8D%E5%AD%97=%E6%A1%83%E7%9F%A2&%E5%B9%B4%E9%BE%84=2%203
%E6%98%A5%E8%8A%82%2Ftest%2Findex.html%3F%E5%90%8D%E5%AD%97%3D%E6%A1%83%E7%9F%A2%26%E5%B9%B4%E9%BE%84%3D2%203