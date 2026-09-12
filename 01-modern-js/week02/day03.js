// Udemy 演習課題
// const price = 100;
// const buyItems = 20;

// const getAmount = (price, buyItems) => {
//   return price * buyItems;
// }
// console.log(getAmount(price, buyItems));

/* スコープ学習 */
// パターンA：関数の外
// const value = 500;

// function getTaxPrice(value) {
//   return value * 1.1;
// }
// console.log(getTaxPrice(value));

// パターンB：関数の中
// function getTaxPrice(value) {
//   return value * 1.1;
//   const value = 500;
//   console.log(getTaxPrice(value));
// }

// console.log(getTaxPrice(value));

// パターンC：ifの中
// if(value > 100) {
//   const message = "高いです！";
//   console.log(message);
// }
// console.log(message);


// 演習1：送料計算
const price = 1500;

function getPostage(price) {
  let postage = 100;
  if(price >= 1000) {
    postage = 0;
  } else {
    postage = 300;
  }
  return postage;
}
// console.log(postage);
console.log(getPostage(price));

// 演習2：ブロックスコープ
if (price >= 1500) {
  const message = '送料はかかりません！';
  console.log(message);
}
// console.log(message);

// 演習3：グローバルとローカル
const taxRate = 0.1;
function getTax(price) {
  return price * taxRate;
}
console.log(getTax(1200));
