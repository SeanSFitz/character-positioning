function countLetters(str) {

  var noSpaces = str.split(" ").join("");

  var letterTotals = {};

  for (i = 0; i < noSpaces.length; i++) {

    var key = noSpaces[i];

    if (letterTotals[key]) {
      letterTotals[key].count += 1;
      letterTotals[key].position.push(i);
    } else {
      letterTotals[key] = {count: 1, position: [i]};
    }
  }
return letterTotals;
}

console.log(countLetters("lighthouse in the house"));