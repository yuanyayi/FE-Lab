var statements = [null, undefined, false, 'false', Boolean(false), [], [[]], '', String(''), 0, Number(0), "0", String("0"), [0], true, "true", Boolean(true), 1, Number(1), "1", String("1"), [1], -1, Number(-1), "-1", String("-1"), [-1], Infinity, -Infinity, Object(), NaN]
var statementsName = ['null', 'undefined', 'false', '\'false\'', 'Boolean(false)', '[]', '[[]]', '\'\'', 'String(\'\')', '0', 'Number(0)', '"0"', 'String("0")', '[0]', 'true', '\"true\"', 'Boolean(true)', '1', 'Number(1)', '\"1\"', 'String(\"1\")', '[1]', '-1', 'Number(-1)', '\"-1\"', 'String(\"-1\")', '[-1]', 'Infinity', '-Infinity', 'Object()', 'NaN']
var ifBox = document.getElementById("if-box")

function addItemIf(condition) {
  var item = document.createElement('span')
  if (condition) {
    item.className = "true"
    item.title = condition
  }
  ifBox.appendChild(item)
}

function createTableHead(target, reverse) {
  var ul = document.createElement('ul')
  arr = statementsName.concat();
  arr = reverse=='reverse' ? arr.reverse() : arr
  console.log(arr)
  console.log(statementsName)
  for (var i in arr) {
    var li = document.createElement('li')
    li.innerHTML = arr[i]
    ul.appendChild(li)
  }
  target.appendChild(ul)
}

createTableHead(document.getElementById('if-box-left'), 'reverse')