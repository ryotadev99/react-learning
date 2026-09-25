/* Udemy */
// let user = new Object();
// user.name = 'Taro Yamada';
// user.gender = 'man';
// user.birthYear = 1990;
// console.log(user);

// let user = { name: 'Taro Yamada', gender: 'man', birthYear: 1990};
// console.log(user);

// console.log(user.name);
// console.log(user.gender);
// console.log(user.birthYear);

// console.log(user['name']);
// console.log(user['gender']);
// console.log(user['birthYear']);

// console.log(Object.keys(user).length);

// let keys = Object.keys(user);
// console.log(keys);

// user.prefecture = 'Kanagawa';
// // user['prefecture'] = 'Kanagawa';
// console.log(user);

// user.prefecture = 'Chiba'
// user['prefecture'] = 'Chiba'
// console.log(user);

// let obj1 = { a: 1, b: 2, c:3 };
// let obj2 = { d: 4, e: 5, f:6 };
// let mergedObj = Object.assign(obj1, obj2);
// console.log(mergedObj);

// let person = {};
// console.log(person);

// 演習1：商品Objectを作る
let product = {name: 'クロワッサン', price: 250, stock: true};

// 演習2：値を取得する
console.log(product.name);
console.log(product.price);
console.log(product.stock);

// 演習3：値を変更する
product.price = 280;
console.log(product.price);

// 演習4：プロパティを追加する
product.category = 'パン';
console.log(product);

// Week 2・3の接続演習
let object = {name: 'クロワッサン', price: 60, stock: true};
function getObject(getObjectName) {
  console.log(getObjectName.name);
}
getObject(object);
