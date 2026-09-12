function getRectangle(height, width) {
  return height * width;
}

console.log(getRectangle(3, 5));


// 演習１
function sendMessage() {
  return 'こんにちは、JavaScript!';
}

console.log(sendMessage());

// 演習２
const price = 100;
const buyNumber = 3;

function totalCash(price, buyNumber){
  return price * buyNumber;
}

console.log(totalCash(price, buyNumber));
