if (pl.type.is_substitution(answer)) {
  // Get the value of the food
  var food = answer.lookup("X");
  // Get the person
  var person = name != "Y" ? name : answer.lookup("Y");
  // Show answer
  result.innerHTML = result.innerHTML + "<div>" + person + " likes " + food + "</div>";
}