// STEP 1：spread構文の基本
const numbers = [10, 20, 30];
console.log(numbers);
console.log(...numbers);

const numbers2 = [...numbers];
numbers2.push(4);

console.log(numbers);
console.log(numbers2);

// STEP 2：配列の結合
const fruits1 = ['Apple', 'Banana'];
const fruits2 = ['Orange', 'Grape'];

const fruits3 = [...fruits1, ...fruits2];
console.log(fruits3);

// STEP 3：オブジェクトのコピー
const user = {
  id: 1,
  name: 'Tanaka',
  age: 30,
};

const user2 = {...user};
user2.age = 31;
console.log(user2);
console.log(user);

// STEP 4：rest構文の基本
function showNumbers(first, ...others) {
  console.log(first);
  console.log(others);
}

showNumbers(10, 20, 30, 40);

// 演習1：配列の結合
const frontend = ['HTML', 'CSS'];
const programming = ['JavaScript', 'TypeScript'];

const skills = [...frontend, ...programming];
console.log(skills);

// 演習2：オブジェクトの更新
const member = {
  id: 1,
  name: 'Suzuki',
  role: 'designer',
  active: true,
};

const updatedMember = {...member};
updatedMember.role = 'engineer';
updatedMember.active = false;
console.log(updatedMember);
console.log(member);

// 演習3：rest構文とreduce()
function sumNumbers(...numbers) {
  console.log(numbers);
  const total = numbers.reduce((acc, cur) => {
    return acc + cur;
  }, 0);
  return total;
}
console.log(sumNumbers(10, 20, 30));
console.log(sumNumbers(100, 200, 300, 400));

// 演習4：記事データの追加（応用）
const articles = [
  {
    id: 1,
    title: 'News 01',
    category: 'news',
  },
  {
    id: 2,
    title: 'News 02',
    category: 'news',
  },
];

const newArticle = {
  id: 3,
  title: 'News 03',
  category: 'news',
};

const updatedArticles = [...articles, newArticle];
console.log(updatedArticles);
const getTitle = updatedArticles.map((article) => article.title);
console.log(getTitle);

// // Q1. spread構文とは、どのような目的で使用する構文ですか？
// 複数の配列やオブジェクトを展開することができる構文

// // Q2. rest構文とは何ですか？spread構文との違いも説明してください。
// 関数が不定数の引数を配列として使用できるもの。値を展開するか、残りの値をまとめるかに違いがある

// // Q3. 次のコードでは何が出力されますか？
// // const numbers = [1, 2, 3];

// // const newNumbers = [...numbers, 4, 5];

// // console.log(newNumbers);
// [1, 2, 3, 4, 5]

// // Q4. 次のコードでは、それぞれ何が出力されますか？理由も説明してください。
// // const user = {
// //   name: 'Tanaka',
// //   age: 30,
// // };

// // const updatedUser = {
// //   ...user,
// //   age: 35,
// // };

// // console.log(user.age);
// // console.log(updatedUser.age);
// 30
// 35
// spread構文によってuserとは別のオブジェクトとなり、更新されているため

// // Q5. 次のコードでは何が出力されますか？
// // function test(a, ...numbers) {
// //   console.log(a);
// //   console.log(numbers);
// // }

// // test(10, 20, 30, 40);
// 10
// [20, 30, 40]
// numbersには配列の20, 30, 40が格納される