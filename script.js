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
    name: 'knee guard pass',
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
  },
  22: {
    name: 'ezekiel choke',
    start: false
  }
}

ctx.beginPath()

let lastX = 0
let lastY = 0

function calc(id) {
  return [
    Math.abs(Math.sin(id * 50) * 180 + (ctx.width / 2)),
    Math.abs(Math.cos(id * 50) * 180 + (ctx.height / 2) + 60)
  ]
}

function generateItem(id) {
  let pos = document.createElement('li')
  pos.setAttribute('data-value', id)

  //ctx.strokeStyle = `rgb(${(id + 1) * 255}, ${(id + 1) * 255}, ${id * 50})`
  //ctx.strokeStyle = `rgba(20, ${(id * Math.random()) * 200}, ${(id * Math.random()) * 200}, 0.3)`
  ctx.strokeStyle = 'rgb(255, 255, 200)'
  ctx.fillStyle = 'rgb(255, 100, 200)'
  
  
  if (spositions[id]) {
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
        currentPosition = currentPosition != null ? currentPosition : 'Y'
        nextMoves(currentPosition)

        const xy = calc(id)
        lastX = xy[0]
        lastY = xy[1]
        
        ctx.arc(lastX, lastY, 22, 0, 2 * Math.PI)
        //ctx.lineTo(lastX, lastY)
        ctx.stroke()
      }
    }
  } else {
    // submission
    currentPosition = -1
    pos.className = 'submitted'
    pos.textContent = 'SUBMISSION!'
    
    //ctx.fillStyle = `rgba(225, ${(id + 1) * 55}, ${id * 110}, 0.5)`
    ctx.strokeStyle = `rgb(225, ${(id + 1) * 55}, ${id * 120})`
    ctx.stroke()
    
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

let count = Object.keys(spositions).length - 1

function render() {
  if (count > -1) {
    ctx.fillStyle = 'rgba(10, 160, 200, 0.3)'
    ctx.strokeWidth = 10

    const xy = calc(count)
    ctx.arc(xy[0], xy[1], 15, 0, 2 * Math.PI)
    ctx.fill()
    count--
    window.requestAnimationFrame(render)
  } else {
    ctx.closePath()
    ctx.beginPath()
  }
}

renderStartPositions()
render()

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

/*
window.onresize = function () {
  canvas.width = ctx.width = window.innerWidth
  canvas.height = ctx.height = window.innerHeight
  count = Object.keys(spositions).length - 1
  render()
}
*/