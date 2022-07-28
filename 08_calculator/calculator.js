const add = function(n1, n2) {
  return n1+n2;
};

const subtract = function(n1, n2) {
  return n1-n2;
};

const sum = function(arr) {
  let total = 0;
  for(let i = 0; i < arr.length; i++){
    total += arr[i];
  }
  return total;
};

const multiply = function(arr) {
  let total = 1;
  for(let i = 0; i < arr.length; i++){
    total = total * arr[i];
  }
  return total;
};

const power = function(num, exp) {
  return num ** exp;
};

const factorial = function(num) {
  let final = 1;
	if(num == 0) {
    return final;
  }
  else{
    for(let i = num; i > 0; i--){
      final *= i;
    }
    return final;
  }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
