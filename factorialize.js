var i;
var n;
n=prompt("Please enter a number");

function factorialize(n) {
  for (i = 1; n>=1; n--) {
i = n * i;
  }
  return i;
}

factorialize(n);