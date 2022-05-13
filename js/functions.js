console.log("Please stop looking at my code. owo");
function generateFunny() {
  var funnyPhrases = [
    "Stop poking me.",
    "Quit it.",
    "STOP!",
    "Stop poking me please.",
    "STOP THIS MADNESS",
    "Quit poking me."
  ]
  var funnyWords = document.getElementById('funnyWords');
  funnyWords.innerHTML = funnyPhrases[rollDie() -1 ];
}
function rollDie() {
  var newNumber = Math.random()
  newNumber = newNumber * 6
  newNumber = Math.ceil(newNumber)
  return newNumber
}
function getDieRoll() {
  var dieBox = document.getElementById('dieBox');
  dieBox.innerHTML = rollDie();
}
