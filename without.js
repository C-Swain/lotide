

const without = function(source, unwanted) {
  let newArr = source;
  for (let i = 0; i < newArr.length; i++) {
    for (let x = 0; x < unwanted.length; x++) {
      if (source[i] !== unwanted[x]) {
        newArr.splice(i, 1)
      }
    }
  }
  return newArr;
};

module.exports = without;
