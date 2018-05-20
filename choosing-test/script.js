function runOnce(chooseAgain) {
  var lotteries = [{ name: 'a', win: 1 }, { name: 'b', win: 0 }, { name: 'c', win: 0 }, { name: 'd', win: 0 }]
  var player = {}
  var chooseAgain = chooseAgain || false

  function chooseOne() {
    var i = Math.random() * lotteries.length
    var index = Math.floor(i)
    player = lotteries[index]
    lotteries.splice(index, 1)
  }

  function takeOneOut() {
    for (var i in lotteries) {
      if (lotteries[i].win == 0) {
        lotteries.splice(i, 1);
        break;
      }
    }
  }
  // ---------------MAIN--------------- //
  chooseOne()
  takeOneOut()
  if (chooseAgain) {
    chooseOne()
  }
  return player.win
}

function runTests(chooseAgain, times = 1000) {
  var finalPrice = 0
  for (var i = times; i > 0; i--) {
    finalPrice += runOnce(chooseAgain)
  }
  return (finalPrice / times)
}

function giveMeData(chooseAgain = 0, timesOfTests = 1000) {
  var testList = []
  for (var i = timesOfTests; i > 0; i--) {
    testList.push(runTests(chooseAgain))
  }
  return testList
}
// console.log(giveMeData(1,1000))