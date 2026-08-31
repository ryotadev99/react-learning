// 練習問題
const productName = 'クロワッサン';
const price = 180;
const buyNumber = 3;
const cash = 1200;

// ① 合計金額を計算
// 商品の単価 × 購入個数
const sum = price * buyNumber;

// ② console.log()で合計金額を表示
console.log(sum);

// ③ 文章を作る
const message = `${productName}を${buyNumber}個購入すると${sum}円です`;
console.log(message);