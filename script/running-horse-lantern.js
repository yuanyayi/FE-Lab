function runningHorseLantern(el, col, row) {
  if(!el) return false
  if(!row) row = col
  let play = el.find('.play')
  play.html('开始').attr('selectable', 'false')
  let timer = {}

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
  let indexlist = getIndexlist(col, row)
  indexlist.map((index) => {
    el.children('li').eq(index).addClass('item')
  })
  let cur = 0

  play.on('click', function() {
    if ($(this).hasClass('start')) {
      $(this).removeClass('start').html('暂停')
      timer = setInterval(() => {
        cur += 1
        cur < indexlist.length ? '' : cur = 0
        el.find('.cur').removeClass('cur').parent()
          .children('li').eq(indexlist[cur]).addClass('cur')
      }, 100)
    } else {
      $(this).addClass('start').html('开始')
      clearInterval(timer)
    }
  })
}