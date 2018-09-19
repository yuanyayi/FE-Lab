function runningHorseLantern(el, col, opts) {
  // 需要容器元素
  if (!el) return false
  // init
  el.append('<li class="cur"></li>')
  el.width(col * el.children().eq(0).width())
  // 默认为方形
  let row = opts.row || col
  // 创建DOM
  let tempLi = ''
  for (let i = 1; i < col * row; i++) {
    tempLi += '<li></li>'
  }
  tempLi += '<div class="play start">开始</div>'
  el.append(tempLi)
  // 动作按钮
  let play = el.find('.play')
  play.html('开始').attr('selectable', 'false')
  let timer = {}

  // 生成参与显示的元素索引值
  function getIndexlist(col, row) {
    let indexlist = []
    for (let i = 0; i < col; i++) {
      indexlist.push(i)
    }
    for (let i = 1; i < row; i++) {
      indexlist.push(col - 1 + i * (col))
    }
    for (let i = col * row - 1; i > col * (row - 1); i--) {
      indexlist.push(i - 1)
    }
    for (let i = row - 2; i > 0; i--) {
      indexlist.push(col * i)
    }
    return indexlist
  }
  // 标识参与跑马的元素
  let indexlist = getIndexlist(col, row)
  // 加入元素内容
  if (opts.contents) {
    indexlist.map((index, i) => {
      el.children('li').eq(index).addClass('item').text(opts.contents[i] || 'empty')
    })
  }else{
    indexlist.map((index, i) => {
      el.children('li').eq(index).addClass('item')
    })
  }
  
  let cur = 0
  let duraction = parseInt(opts.dur) > 0 ? parseInt(opts.dur) : 100
  // 动作按钮行为
  play.on('click', function () {
    if ($(this).hasClass('start')) {
      $(this).removeClass('start').html('暂停')
      timer = setInterval(() => {
        cur += 1
        cur < indexlist.length ? '' : cur = 0
        el.find('.cur').removeClass('cur').parent()
          .children('li').eq(indexlist[cur]).addClass('cur')
      }, duraction)
    } else {
      $(this).addClass('start').html('开始')
      clearInterval(timer)
    }
  })
}