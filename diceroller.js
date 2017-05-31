
function diceRoller(){
  result = [];
  for(i = 1; i <=Number(process.argv[2]); i++) {
    var rolled = (Math.floor(Math.random() * (6 - 1 + 1)) + 1)
    result.push(rolled);
  }
  return result
}

console.log("Rolled " + process.argv[2] + " dice: " + diceRoller().join(", "))


