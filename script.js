/* global pl */

const spositionsEl = document.querySelector('#start-positions')
const rows = document.querySelector('#rows')
const program = document.getElementById('positions').value
const canvas = document.querySelector('canvas')
const ctx = canvas.getContext('2d')
//ctx.beginPath()

canvas.width = ctx.width = window.innerWidth
canvas.height = ctx.height = window.innerHeight

let currentPosition = null
let currentRow = 0

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
  },
  20: {
    name: 'scissor sweep',
    start: false
  },
  21: {
    name: 'flower sweep',
    start: false
  }
}

ctx.beginPath()

function generateItem(id) {
  let pos = document.createElement('li')
  pos.setAttribute('data-value', id)
  if (id > -1 && spositions[id]) {
    pos.textContent = spositions[id].name
    pos.setAttribute('data-row', currentRow)
    pos.onclick = function (ev) {
      // set up next row
      if (currentRow === parseInt(this.getAttribute('data-row'), 10)) {
        this.className = 'selected'
        let row = document.createElement('ul')
        currentRow++
        row.setAttribute('data-row', currentRow)
        rows.appendChild(row)
        currentPosition = ev.target.getAttribute('data-value')  
        console.log(currentPosition)

        currentPosition = currentPosition != null ? currentPosition : 'Y'
        nextMoves(currentPosition)
        
        // render selected visual
        ctx.beginPath()
        ctx.strokeWidth = 10
        ctx.strokeStyle = `rgb(${id * 255}, ${id * 255}, ${id * 100})`
        
        ctx.moveTo(ctx.width / 2, ctx.height / 2)
        
        if (id > 0) {
        //  ctx.lineTo(Math.abs(Math.sin(id * 10) * ctx.width / 1.5), Math.abs(Math.cos((id) * 10) * ctx.height / 2))
        }
        //ctx.stroke()
        
        //ctx.fillStyle = `rgba(20, ${(id + 100) * 255}, ${(id + 1) * 155}, 1.0)`
        ctx.arc(Math.abs(Math.sin((id + 10) * 10) * ctx.width / 1.5), Math.abs(Math.cos((id + 1) * 10) * ctx.height / 2), 10, 0, 2 * Math.PI)
        ctx.stroke()
        ctx.lineTo(Math.abs(Math.sin((id + 10) * 10) * ctx.width / 1.5), Math.abs(Math.cos((id) * 10) * ctx.height / 2))
        //console.log(Math.abs(Math.sin((id + 1) * 10) * ctx.width / 2), Math.abs(Math.cos((id + 1) * 10) * ctx.height / 2))
        ctx.stroke()
        //ctx.closePath()
        //ctx.beginPath()
      }
    }
  } else {
    // submission
    currentPosition = -1
    pos.className = 'submitted'
    pos.textContent = 'SUBMISSION!'
 
    ctx.fillStyle = 'rgba(220, 10, 20, 1.0)'
    ctx.arc(Math.abs(Math.sin((id + 10) * 10) * ctx.width / 2), Math.abs(Math.cos((id + 1) * 10) * ctx.height / 2), 10, 0, 2 * Math.PI)
    ctx.fill()
    //ctx.closePath()
    
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

function nextMoves(id) {
  const session = pl.create()
	session.consult(program)
	session.query(`nextMoves(${id}, X).`)
	session.answers(show(id))
}

function show(id) {
  return (answer => {
    if (pl.type.is_substitution(answer)) {
      let pos = generateItem(answer.links.X.value)
      document.querySelector(`ul[data-row="${currentRow}"]`).appendChild(pos)
    }
  })
}
