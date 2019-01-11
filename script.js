const start = document.querySelector('#start-position')
const spositions = {
  0: {
    name: 'closed guard',
    offense: [
      5
    ],
    defense: [
      6
    ]
  },
  1: {
    name: 'side mount',
    offense: [
      3, 17
    ],
    defense: [
      15
    ]
  },
  2: {
    name: 'half guard',
    offence: [
      0, 3
    ],
    defense: [

    ]
  },
  3: {
    name: 'full mount',
    offense: [
      11, 12, 13, 17
    ],
    defense: [

    ]
  },
  4: {
    name: 'back attack',
    offense: [
      
    ],
    defense: [
      9, 15
    ]
  },
  5: {
    name: 'leg pass over knee',
    offense: [
      1
    ],
    defense: [
      
    ]
  },
  6: {
    name: 'cross collar choke (underhand / underhand)',
    offense: [
      
    ],
    defense: [
      
    ]
  },
  7: {
    name: 'cross collar choke (overhand / overhand)',
    offense: [
      
    ],
    defense: [
      
    ]
  },
  8: {
    name: 'cross collar choke (underhand / overhand)',
    offense: [
      
    ],
    defense: [
      
    ]
  },
  9: {
    name: 'turtle',
    offense: [
      14
    ],
    defense: [
      15
    ]
  },
  10: {
    name: 'bear hug',
    offense: [
      
    ],
    defense: [
      
    ]
  },
  11: {
    name: 'armbar',
    offense: [
      
    ],
    defense: [
      
    ]
  },
  12: {
    name: 'armlock (americana)',
    offense: [
      
    ],
    defense: [
      
    ]
  },
  13: {
    name: 'armlock (kimura)',
    offense: [
      
    ],
    defense: [
      
    ]
  },
  14: {
    name: 'seatbelt choke',
    offense: [
      
    ],
    defense: [
      
    ]
  },
  15: {
    name: 'side shrimp',
    offense: [
      
    ],
    defense: [
      
    ]
  },
  16: {
    name: 'triangle choke',
    offense: [
      
    ],
    defense: [
      
    ]
  },
  17: {
    name: 'cross body choke',
    offense: [
      
    ],
    defense: [
      
    ]
  }
}

function renderStartPositions() {
  const spositions = getStartPositions() 
}

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