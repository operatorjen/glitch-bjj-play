const spositionsEl = document.querySelector('#start-positions')
const spositions = {
  0: {
    name: 'closed guard',
    start: true
  },
  1: {
    name: 'half mount',
    start: false
  },
  2: {
    name: 'half guard',
    start: false
  },
  3: {
    name: 'full mount',
    start: false
  },
  4: {
    name: 'back attack',
    start: true
  },
  5: {
    name: 'leg pass over knee',
    start: false
  },
  6: {
    name: 'cross collar choke (underhand / underhand)',
    start: false
  },
  7: {
    name: 'cross collar choke (overhand / overhand)',
    start: false
  },
  8: {
    name: 'cross collar choke (underhand / overhand)',
    start: false
  },
  9: {
    name: 'turtle',
    start: true
  },
  10: {
    name: 'front bear hug (arms not free)',
    start: true
  },
  11: {
    name: 'armbar',
    start: false
  },
  12: {
    name: 'armlock (americana)',
    start: false
  },
  13: {
    name: 'armlock (kimura)',
    start: false
  },
  14: {
    name: 'seatbelt choke',
    start: false
  },
  15: {
    name: 'side shrimp',
    start: false
  },
  16: {
    name: 'triangle choke',
    start: false
  },
  17: {
    name: 'cross body choke',
    start: false
  },
  18: {
    name: 't-position hip throw',
    start: false
  },
  19: {
    name: 'double leg takedown',
    start: true
  }
}

let currentPosition = null

function renderStartPositions() {
  for (let k in spositions) {
    if (spositions[k].start) {
      let pos = document.createElement('li')
      pos.setAttribute('data-value', k)
      pos.textContent = spositions[k].name
      pos.onclick = function (ev) {
        currentPosition = ev.target.getAttribute('data-value')  
        console.log(currentPosition)
        isNextMove(currentPosition)
      }
      spositionsEl.appendChild(pos) 
    }
  }
}

renderStartPositions()

//////////////////////////////////////////

function isNextMove(id) {
  const session = pl.create()
  // attack/counterattack
  const positions = document.querySelector('#positions').value
  session.consult('positions')
  session.query(`isNextMove(${id}, X).`)
  console.log(id)
  session.answers((id) => {
    
  })
  return console.log(ans)
}

function show(name) {
  return function (answer) {
    console.log(answer, '!!')
    if (pl.type.is_substitution(answer)) {
      const next = answer.lookup('X')
      const res = name != 'Y' ? name : answer.lookup('Y')
      console.log('>>> ', res)
    }
  }
}

// session.query()
// session.answer(x => console.log(x))

/*
if (answer) {
  if (pl.type.is_substitution(answer)) {
    // Get the value of the food
    var food = answer.lookup("X");
    // Get the person
    var person = name != "Y" ? name : answer.lookup("Y");
    // Show answer
    result.innerHTML = result.innerHTML + "<div>" + person + " likes " + food + "</div>";
  }
}
*/