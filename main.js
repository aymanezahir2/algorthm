let one = [10, 5, 6, 87, 9, 3, 74];
let two = [];

const int = setInterval(function () {
  one.reduce(function (acc, curr) {
    if (acc > curr) {
      return acc;
    }
    two.push(acc);
  }, 0);
  if (two.length == 7) {
    clearInterval(int);
  }
}, 100);
console.log(one.shift());
console.log(two);
