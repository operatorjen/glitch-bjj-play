const start = document.querySelector('#start-position')
const spositions = {
  0: {
    name: 'closed guard',
    next_top: [
      5
    ],
    next_bottom: [

    ]
  },
  1: {
    name: 'side mount',
    next_top: [

    ],
    next_bottom: [

    ]
  },
  2: {
    name: 'half guard',
    next_top: [
      3
    ],
    next_bottom: [

    ]
  },
  3: {
    name: 'full mount',
    next_top: [
      
    ],
    next_bottom: [

    ]
  },
  4: {
    name: 'back attack',
    next_top: [

    ],
    next_bottom: [

    ]
  },
  5: {
    name: 'leg pass over knee',
    next_top: [
      1
    ],
    next_bottom: [
      
    ]
  }
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