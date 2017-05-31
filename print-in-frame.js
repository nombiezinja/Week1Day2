function printInFrame(list) {
  var list = list.split(' ');//put spaces after each word
  var longest = longestStr(list).length;//getting the length of the longest word
  var border = repeat('*', longest + 4);//define border as repeating * for the length of the longest word

  console.log(border);//print * for length of longest word
  for (word of list) {//where was word defined? what is this word? assume this is the actual word, is this a built in js thing?
    console.log('* ' + word + repeat(' ', longest - word.length) + '*'); //insert length of longest - length of word + 1 blank space to line up
  }
  console.log(border);// print * for length of longest word
}

function repeat(str, times) {//defining repeat function to be used in defining the border variable - repeating it for the length of the longest word
  var result = str;

  for (var i = 1; i < times; i++) {
    result += str;
  }

  return result;
}

function longestStr(list) {//finding out the longest string in the list
  var longest = list[0]; //start from first word of list

  for (str of list) {//this for...of loop is confusing
    if (str.length > longest.length) {
      longest = str;
    }
  }

  return longest;
}
//problem: the top and bottom borders not iterating long enough - fixed
//-->needs to be the length of longest word plus four

//problem: * on right of short words not lined up with * on right of longest word
//needs to be more spaces between * on right side of short word and short word
//BUT too many spaces on right side for here's johnny

// Test driver code, do not modify
printInFrame('May the force be with you');
printInFrame('Here\'s Johnny!');
printInFrame('Supercalifragalisticexpialadocious');
printInFrame('Lost, like tears in the rain');
