# coding: utf-8

import random

def runOnce(chooseAgain = 0):
  lotteries = [{ 'name': 'a', 'win': 1 }, { 'name': 'b', 'win': 0 }, { 'name': 'c', 'win': 0 }, { 'name': 'd', 'win': 0 }]
  player = {}

  def chooseOne():
    i = random.randint(0, len(lotteries)-1)
    temp_player = lotteries[i]
    lotteries.pop(i)
    return temp_player

  def takeOneOut():
    for lottery in lotteries:
      if(lottery['win'] == 0):
        lotteries.pop(lotteries.index(lottery))
        break

  # -----------------MAIN----------------- #
  player = chooseOne()
  takeOneOut()
  if (chooseAgain):
    player = chooseOne()
  return player['win']


def runTests(chooseAgain = 0, times = 1000):
  finalPrice = 0
  for i in range(times):
    finalPrice += runOnce(chooseAgain)
  return finalPrice/(times+0.0)

def run(chooseAgain = 0,times = 1000):
  testList  = []
  if(chooseAgain):
    print ('允许重新选择的情况：')
  else:
    print ('不允许重选的情况：')
  for i in range(times):
    temp = runTests(chooseAgain)
    testList.append(temp)
    print(temp)
  return testList

# TestCode
run(0) # 不能重选
run(1) # 重新选择
