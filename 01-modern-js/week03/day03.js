/* Udemy */
// let user = {
//   name: 'Taro Yamada',
//   gender: 'man',
//   birthYear: 1990,
//   calcAge: function(thisYear) {
//     // console.log(birthYear);
//     // console.log(this);
//     // console.log(this.birthYear);
//     return thisYear - this.birthYear;
//   }
// }
// console.log(user.calcAge(2026));

// // for (let i = 1; i <= 3; i++) {
// //   console.log(i);
// // }

// let arr = ['a', 'b', 'c'];
// // for (let i = 0; i < 3; i++) {
// //   console.log(arr[i]);
// // }

// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// }

// 演習1：単純なforループ
for (let i = 1; i < 6; i++) {
  console.log(i);
}

// 演習2：Arrayをforで処理
let arrType = ['JavaScript', 'TypeScript', 'React', 'Figma'];
for (let i = 0; i < arrType.length; i++) {
  console.log(arrType[i]);
}

// 演習3：Array × Object
let products = [
  {
    name: 'クロワッサン',
    price: 250
  },
  {
    name: '食パン',
    price: 300
  },
  {
    name: 'メロンパン',
    price: 180
  }
]
// console.log(products[0].name);

// 演習4：Array × Object × for
for (let i = 0; i < products.length; i++) {
  console.log(products[i].name);
}

