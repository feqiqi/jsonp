function jsonp(url, params, fn) {
  var scriptElement;
  var callbackName = 'itcast_' + (Math.random() * Math.random()).toString().substr(2)
  window[callbackName] = function(data) {
    fn(data)
    document.body.removeChild(scriptElement)
  }
  var queryString = ''
  for (var key in params) {
    queryString += key + '=' + params[key] + '&'
  }
  url = url + '?' + queryString
  url += 'abc=' + callbackName

  var scriptElement = document.createElement('script')
  scriptElement.src = url
  document.body.appendChild(scriptElement)
}

jsonp('https://api.douban.com/v2/movie/in_theaters', {}, function(data) {
  console.log(data)
})
