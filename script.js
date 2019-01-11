const start = document.querySelector('#start-position')
const spositionsEl = document.querySelector('#start-positions')
const spositions = {
  0: {
    name: 'closed guard',
    start: true,
    offense: [
      5
    ],
    defense: [
      6
    ]
  },
  1: {
    name: 'side mount',
    start: false,
    offense: [
      3, 17
    ],
    defense: [
      15
    ]
  },
  2: {
    name: 'half guard',
    start: false,
    offence: [
      0, 3
    ],
    defense: [
      15
    ]
  },
  3: {
    name: 'full mount',
    start: false,
    offense: [
      6, 7, 8, 11, 12, 13, 17
    ],
    defense: [
      15
    ]
  },
  4: {
    name: 'back attack',
    start: true,
    offense: [
      
    ],
    defense: [
      9, 15
    ]
  },
  5: {
    name: 'leg pass over knee',
    start: false,
    offense: [
      1
    ],
    defense: [
      
    ]
  },
  6: {
    name: 'cross collar choke (underhand / underhand)',
    start: false,
    offense: [
      
    ],
    defense: [
      
    ]
  },
  7: {
    name: 'cross collar choke (overhand / overhand)',
    start: false,
    offense: [
      
    ],
    defense: [
      
    ]
  },
  8: {
    name: 'cross collar choke (underhand / overhand)',
    start: false,
    offense: [
      
    ],
    defense: [
      
    ]
  },
  9: {
    name: 'turtle',
    start: true,
    offense: [
      14
    ],
    defense: [
      15
    ]
  },
  10: {
    name: 'front bear hug (arms not free)',
    start: true,
    offense: [

    ],
    defense: [
      18
    ]
  },
  11: {
    name: 'armbar',
    start: false,
    offense: [
      
    ],
    defense: [
      
    ]
  },
  12: {
    name: 'armlock (americana)',
    start: false,
    offense: [
      
    ],
    defense: [
      
    ]
  },
  13: {
    name: 'armlock (kimura)',
    start: false,
    offense: [
      
    ],
    defense: [
      
    ]
  },
  14: {
    name: 'seatbelt choke',
    start: false,
    offense: [
      
    ],
    defense: [
      
    ]
  },
  15: {
    name: 'side shrimp',
    start: false,
    offense: [
      
    ],
    defense: [
      
    ]
  },
  16: {
    name: 'triangle choke',
    start: false,
    offense: [
      
    ],
    defense: [
      
    ]
  },
  17: {
    name: 'cross body choke',
    start: false,
    offense: [
      
    ],
    defense: [
      
    ]
  },
  18: {
    name: 't-position hip throw',
    start: false,
    offense: [
      0, 1, 2
    ],
    defense: [
      
    ]
  },
  19: {
    name: 'double leg takedown',
    start: true,
    offense: [
      0, 1, 2
    ],
    defense: [
      
    ]
  }
}

function renderStartPositions() {
  for (let k in spositions) {
    if (spositions[k].start) {
      let pos = document.createElement('li')
      pos.setAttribute('data-value', k)
      pos.textContent = spositions[k].name
      spositionsEl.appendChild(pos) 
    }
  }
}

renderStartPositions()

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