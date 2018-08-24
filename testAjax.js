function myajax(options) {
  var xhr = new XMLHttpRequest
  options.method = options.method ? options.method.toUpperCase() : 'GET'
  options.data = options.data || {}
  if(options.method === 'GET' && options.data) {
    options.url += stringifyData(options.data)
  }
  xhr.open(
    options.method,
    options.url,
    options.async,
    options.user || '',
    options.password || ''
  )
  options.type ? xhr.overrideMimeType(options.type) : ''

  xhr.addEventListener('readystatechange', () => {
    // console.log('xhr.readyState=' + xhr.readyState)
    if (xhr.readyState === 4 && xhr.status === 200) {
      options.onsuccess(JSON.parse(xhr.responseText))
    } else {
      options.onerror ? options.onerror() : ''
    }
  })

  options.method === 'GET' ? xhr.send() : xhr.send(options.data)

  function stringifyData(data){
    if(JSON.stringify(data) === '{}') return ''
    var query = '?'
    for(var key in data) {
      query += `${key}=${data[key]}&`
    }
    return query.replace(/&$/,'')
  }
  return xhr
}

var xhr = myajax({
  url: 'https://test-miniprogram.com/api/weather/now',
  data: {
    city: '北京'
  },
  onsuccess: function(ret) {
    console.log(ret)
  },
  onerror: function() {
    console.log('服务器异常')
  }
})