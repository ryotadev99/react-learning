// 演習１
const price = 420;
const buyNumber = 4;

function sum(price, buyNumber) {
  return price * buyNumber;
}

console.log(sum(price, buyNumber));

// 演習2
const getSumPrice = function(price, buyNumber) {
  return price * buyNumber;
}

console.log(getSumPrice(price, buyNumber));

// 演習３
const getSumPrice2 = (price, buyNumber) => {
  return price * buyNumber;
}
console.log(getSumPrice2(price, buyNumber));

// 演習4
const value = 500;

function getTaxPrice(value) {
  return value * 1.1;
}
console.log(getTaxPrice(value));

const getTaxPrice2 = (value) => {
  return value * 1.1;
}
console.log(getTaxPrice2(value));
