/*
   n: 初始选项个数
   m: 被排除的选项
   chooseAgain: 
    0: 不允许重新选择；
    1: 允许重新选择，包括自己已选的；
    2: 允许重新选择，不包括自己已选的。
   注意完全模拟！不能进行概率计算！
 */
function runOnce(n = 4, m = 1, chooseAgain = 0) {
  let cardList = [] // 选项列表
  let player = {} // 玩家抽取的号码
  let weight = 1; // 权重
  // 简单条件合法性判断
  if (n == 0) { console.log('选项列表长度不能为0！'); return false }
  // 1. 生成选项列表：
  function creatList() {
    let randIndex = Math.floor(Math.random() * cardList.length)
    for (let i = 0; i < n; i++) {
      if (i == randIndex) {
        cardList.push({ 'index': 0, 'win': 1 })
      } else {
        cardList.push({ 'index': i, 'win': 0 })
      }
    }
  }
  creatList()
  // console.log(cardList)
  // ==> [ { index: 0, win: 1 },{ index: 1, win: 0 },{ index: 2, win: 0 },{ index: 3, win: 0 } ]
  // 2. 玩家抽取一张：
  function chooseOne() {
    let randIndex = Math.floor(Math.random() * cardList.length)
    return cardList[randIndex] // 记录下来就好，不要抽出来。
  }
  player = chooseOne()
  // 3. 获胜的权重。本来每个选项的权重都是1。但是当删除掉一部分选项后，被删除的选项的权重(m)会被平均分配给保留下来的选项(n-m个)，每个选项的权重变为1+m/(n-m) = n/(n-m)
  function takeNOut(n, m = 1) {
    for (let m = 0; m >= 0; m--) {
      // 排除一张错误卡片
      for (let i in cardList) {
        if (cardList[i].win == 0) {
          cardList.splice(i, 1)
          break;
        }
      }
    }
    return n / (n - m);
  }
  weight = takeNOut(cardList.length, m) // 修改权重
  // 重新选择环节的规则：
  if (chooseAgain === 1) {
    player = chooseOne()
  } else if (chooseAgain === 2) {
    var temp = chooseOne()
    while (temp.index === player.index) {
      temp = chooseOne()
    }
    player = temp
  }
  return player.win * weight
}
// console.log(runOnce())
// 每次实验默认抽取1000次计算概率：
function runTests(n, m, chooseAgain, times = 1000) {
  var finalPrice = 0
  for (var i = times; i > 0; i--) {
    finalPrice += runOnce(n, m, chooseAgain)
  }
  return +(finalPrice / times).toFixed(7)
  return
}
// 做1000次实验收集数据：
function giveMeData({ n, m, chooseAgain, times = 1000, timesOfTests = 1000 }) {
  console.log('giveMeData-option:', 'n:' + n, 'm:' + m, 'chooseAgain:' + chooseAgain, 'times:' + times, 'timesOfTests:' + timesOfTests)
  var testList = []
  for (var i = timesOfTests; i > 0; i--) {
    testList.push(runTests(n, m, chooseAgain, times))
  }
  return testList
}
// console.log(giveMeData({ n: 4, m: 1, chooseAgain: 0 }))
// console.log(giveMeData({ n: 4, m: 1, chooseAgain: 1 }))