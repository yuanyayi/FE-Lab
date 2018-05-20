# 一道逻辑计算题

- 背景：
> 你参加了一个游戏，在你面前有4张100万支票，其中1张是真的。游戏开始，你选了一张，之后主持人在剩下的3张里，选择一个展示出来，验证后发现是假的。
- 问题：请分情况理性分析，此时，你的参赛权的价格
> - 情况1：不允许改之前选择
> - 情况2：有重新选择的权力

- 回答：请用下面两种方式分别作答
> - 方式1（理论推导）：请给出理论推导及计算过程，情况2需说明如何行使权力。
> - 方式2（编程模拟）：请用一个你不熟悉的脚本语言，客观、准确、完整的模拟上述两种情况下（例如：模拟1万次），选手平均获得的奖金，得到参赛权的价格。

## 注意事项
1. 编程模拟时，请不要引入任何主观想法，确保模拟客观、准确、完整，并与理论推导独立，即使是2选一，50%概率这种也不要在代码中体现，而应随机模拟二选一，避免把代码变成理论推导的公式计算器，能够达到相互验证的作用。
2. 时间不限。考验的是交付能力，请确保在交付时已彻底解决，有100%自信能够面对与自己解答不符的观点，并通过讨论指出其中的问题。

尝试解答：
1. 理论推导：第一次选择为真的可能性为1/4（==0.25），撤出一张，剩下两张为真的可能性应为剩余的可能性除以剩余个数（3/4）/2==3/8 (==0.375)。
2. 编程模拟：
  * 预览地址：[https://yuanyayi.github.io/FE-Lab/choosing-test/index.html]
  * 代码地址：[https://github.com/yuanyayi/FE-Lab/tree/master/choosing-test]