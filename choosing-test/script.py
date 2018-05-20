# coding: utf-8

import random

def runOnce(chooseAgain = 0):
  lotteries = [{ 'name': 'a', 'win': 1 }, { 'name': 'b', 'win': 0 }, { 'name': 'c', 'win': 0 }, { 'name': 'd', 'win': 0 }]
  player = {}

  def chooseOne():
    nonlocal player
    i = random.randint(0, len(lotteries)-1)
    player = lotteries[i]
    lotteries.pop(i)

  def takeOneOut():
    for lottery in lotteries:
      if(lottery['win'] == 0):
        lotteries.pop(lotteries.index(lottery))
        break

  # -----------------MAIN----------------- #
  chooseOne()
  takeOneOut()
  if (chooseAgain):
    chooseOne()
  return player['win']


def runTests(times):
  finalPrice = 0
  for i in range(times):
    finalPrice += runOnce(0)
  return (finalPrice / times)

def run():
  testList  = []
  print ('calculating...finish about 400 seconds...')
  for i in range(1000):
    temp = runTests(10000)
    testList.append(temp)
    print(temp)
  return testList

# print (testTable)