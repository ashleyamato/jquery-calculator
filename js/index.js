$(document).ready(function() {
  let screen = $('#screen')

  var resultArray = []

  function appendButton() {
    let $target = $(event.target).context.innerText
    if ($target === '÷') {
      screen.append($target)
      resultArray.push('/')
      return
    }
    if ($target === 'x') {
      screen.append($target)
      resultArray.push('*')
      return
    } else if ($target != 'C' && $target != '=') {
      screen.append($target)
      resultArray.push($target)
    }
  }

  function clear(){
    screen.empty()
    resultArray = []
  }

  function equals() {
    var result = resultArray.join('')
    if (result.includes('/0')) {
      screen.empty()
      screen.append('error')
    } else if (result.endsWith('/') || result.endsWith('*') || result.endsWith('-') || result.endsWith('+')) {
      screen.empty()
      screen.append('error')
    } else if (result.startsWith('/') || result.startsWith('*') || result.startsWith('+')) {
      screen.empty()
      screen.append('error')
    } else {
      var sum = eval(result)
      screen.empty()
      screen.append(sum)
    }
  }

  $('#equals').click(equals)
  $('#clear').click(clear)
  $('.buttons').click(appendButton)
})
