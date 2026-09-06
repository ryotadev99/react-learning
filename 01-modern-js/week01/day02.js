// 演習課題
const productName = 'クロワッサン';
const price = 180;
const buyNumber = 3;
const cash = 1200;

// ① 単価 × 購入個数で合計金額を計算する
const total = price * buyNumber;

const remainingCash = cash - total;
// ② 所持金と合計金額を比較する
if (cash >= total) {
  // ③ 買える場合「○○を購入できます」と表示する
  console.log(`${productName}を購入できます`);
  console.log(remainingCash);
} else {
  // ④ 買えない場合「所持金が足りません」と表示する
  console.log('所持金が足りません');
}