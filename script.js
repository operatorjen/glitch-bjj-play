/* global pl */

const spositionsEl = document.querySelector('#start-positions')
const rows = document.querySelector('#rows')
const spositions = {
  0: {
    name: 'closed guard',
    start: true
  },
  1: {
    name: 'side mount',
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
let currentRow = 0

function generateItem(id) {
  let pos = document.createElement('li')
  pos.setAttribute('data-value', id)
  if (id > -1 && spositions[id]) {
    pos.textContent = spositions[id].name
    pos.setAttribute('data-row', currentRow)
    pos.onclick = function (ev) {
      // set up next row
      if (currentRow === parseInt(this.getAttribute('data-row'), 10)) {
        let row = document.createElement('ul')
        currentRow++
        row.setAttribute('data-row', currentRow)
        rows.appendChild(row)
        currentPosition = ev.target.getAttribute('data-value')  
        console.log(currentPosition)

        currentPosition = currentPosition != null ? currentPosition : 'Y'
        nextMoves(currentPosition)
      }
    }
  } else {
    // submission
    currentPosition = -1
    pos.className = 'submitted'
    pos.textContent = 'SUBMISSION!'
    
    let restart = document.createElement('button')
    restart.textContent = 'restart'
    restart.onclick = function (ev) {
      ev.preventDefault()
      location.reload()
    }
    pos.appendChild(restart)
  }
  return pos
}

function renderStartPositions() {
  for (let k in spositions) {
    if (spositions[k].start) {
      let pos = generateItem(k)
      spositionsEl.appendChild(pos) 
    }
  }
}

renderStartPositions()

//////////////////////////////////////////

function nextMoves(id) {
  const session = pl.create()
	const program = document.getElementById('positions').value
	session.consult(program)
	session.query(`nextMoves(${id}, X).`)
	session.answers(show(id))
}

function show(id) {
  return function (answer) {
    if (pl.type.is_substitution(answer)) {
      const next = answer.lookup('X')
      const previous = id !== 'Y' ? id : answer.lookup('Y')
      //return console.log('>>> ', spositions[answer.links.X.value].name)
      let pos = generateItem(answer.links.X.value)
      console.log('>>',currentRow)
      document.querySelector(`ul[data-row="${currentRow}"]`).appendChild(pos)
    }
  }
}
