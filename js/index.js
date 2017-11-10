var resultArray = []

function sum(str) {
  var finalSum = eval(str)
  return finalSum
}

$(document).ready(function() {
  let screen = $('#screen')

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
    var joinArray = resultArray.join('')
    if (joinArray.includes('/0')) {
      screen.empty()
      screen.append('error')
    } else if (joinArray.endsWith('/') || joinArray.endsWith('*') || joinArray.endsWith('-') || joinArray.endsWith('+')) {
      screen.empty()
      screen.append('error')
    } else if (joinArray.startsWith('/') || joinArray.startsWith('*') || joinArray.startsWith('+')) {
      screen.empty()
      screen.append('error')
    } else {
      sum(joinArray)
      screen.empty()
      screen.append(sum(joinArray))
    }
  }

  $('#equals').click(equals)
  $('#clear').click(clear)
  $('.buttons').click(appendButton)
})

module.exports = {
  appendButton: appendButton,
  clear: clear,
  equals: equals,
}
