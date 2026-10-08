const products = [
  { id: 1, name: 'Keyboard', price: 300, stock: 5 },
  { id: 2, name: 'Mouse', price: 150, stock: 0 },
  { id: 3, name: 'Monitor', price: 500, stock: 3 },
  { id: 4, name: 'Headphones', price: 200, stock: 0 },
];

// 演習1
const productsName = products.map((product) => product.name);
console.log(productsName);

// 演習2
const priceThan300 = products.filter((product) => product.price >= 300);
console.log(priceThan300);

// 演習3
const findProducts = products.find((product) => product.id === 3);
console.log(findProducts);

// 演習4
const findOutStock = products.some((product) => product.stock === 0);
console.log(findOutStock);

// 演習5
const sumPrice = products.reduce(
  (accumulator, currentValue) => accumulator + currentValue.price, 0,
);
console.log(sumPrice);

const users = [
  { id: 1, name: 'Sato', age: 24, active: true },
  { id: 2, name: 'Tanaka', age: 32, active: false },
  { id: 3, name: 'Suzuki', age: 28, active: true },
  { id: 4, name: 'Yamada', age: 35, active: true },
];

// ・全ユーザーの名前だけ取得する → map()
const getUserName = users.map((user) => user.name);
console.log(getUserName);

// ・30歳以上のユーザーをすべて取得する → filter()
const getUserOld30 = users.filter((user) => user.age >= 30);
console.log(getUserOld30);

// ・最初の非アクティブユーザーを取得する → find()
const findUserInactive = users.find((user) => user.active === false);
console.log(findUserInactive);

// ・非アクティブユーザーが存在するか確認する → some()
const hasInactiveUser = users.some((user) => user.active === false);
console.log(hasInactiveUser);
// ・全ユーザーの年齢合計を求める → reduce()
const getSumUserAge = users.reduce(
  (accumulator, currentValue) => accumulator + currentValue.age, 0,
);
console.log(getSumUserAge);

// // Q1. map() と filter() は、どちらも配列を返しますが、役割はどう違いますか？
// mapはコールバック関数に返った値を全て新しい配列に返す、filterは条件に合った値を配列に入れる

// // Q2. 「IDが一致するユーザーを1人取得する」場合、filter() より find() が適している理由は何ですか？
// 条件に合った最初の値を返すメソッドだから

// // Q3. find() と some() の戻り値の違いは何ですか？
// 配列の値（objectの要素）か真偽値か

// // Q4. 「未完了タスクが1件でもあるか」を確認するとき、どのメソッドを使いますか？
// some()

// // Q5. reduce() の accumulator には、2回目以降何が入りますか？
// １回目の処理値

// // Q6. initialValue を指定しない場合、最初の accumulator と currentValue は何になりますか？
// accumulatorは配列[0] currentValue[1]

// // Q7. 次の要件では、それぞれどのメソッドを使いますか？
// A. 商品名だけの一覧を作る → map()
// B. 1000円以上の商品をすべて取得する → filter()
// C. IDが10の商品を1件取得する → find()
// D. 在庫切れ商品が存在するか確認する → some()
// E. 商品価格の合計を求める → reduce()