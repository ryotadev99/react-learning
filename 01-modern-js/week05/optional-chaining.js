// STEP 1：通常のプロパティアクセスとの違い
// const user = {
//   name: 'Tanaka',
//   profile: {
//     age: 30,
//   },
// };

// console.log(user.profile.age);
// console.log(user.profile?.age);

// const user = {
//   name: 'Tanaka',
// };

// console.log(user.profile.age);
// console.log(user.profile?.age);

// STEP 2：ネストしたオブジェクト
const user = {
  name: 'Suzuki',
  profile: {
    address: {
      city: 'Fukuoka',
    },
  },
};
// console.log(user.city);
console.log(user.profile.address.city);
console.log(user.profile.address?.city);
console.log(user.profile?.city);

// STEP 3：配列と関数
// array?.[0]
// callback?.()

// 演習1：ユーザーの住所を安全に取得
const users = [
  {
    id: 1,
    name: 'Tanaka',
    profile: {
      address: {
        city: 'Tokyo',
      },
    },
  },
  {
    id: 2,
    name: 'Suzuki',
    profile: {},
  },
  {
    id: 3,
    name: 'Sato',
  },
];

// 要件
// getCity(user)という関数を作成してください。

function getCity(user) {
  // user.profile.address?.city;
  return user.profile?.address?.city;
};
console.log(getCity(users[0])); // 'Tokyo'
console.log(getCity(users[1])); // undefined
console.log(getCity(users[2])); // undefined

// 演習2：配列の最初の要素を取得
const article1 = {
  title: 'React入門',
  tags: ['React', 'JavaScript'],
};

const article2 = {
  title: 'Webデザイン',
  tags: [],
};

const article3 = {
  title: 'アクセシビリティ',
};

// 要件
// getFirstTag(article)という関数を作成してください。
function getFirstTag(article) {
  return article.tags?.[0];
};
console.log(getFirstTag(article1)); // 'React'
console.log(getFirstTag(article2)); // undefined
console.log(getFirstTag(article3)); // undefined

// 演習3：関数の安全な呼び出し
// 要件
// 引数として受け取った関数が存在する場合のみ、その関数を実行してください。
function executeCallback(callback) {
  callback?.();
}
executeCallback(() => {
  console.log('実行しました');
});
executeCallback();

// 演習4：案件データの検索（応用）
const projects = [
  {
    id: 1,
    title: 'Corporate Site',
    client: {
      name: 'Company A',
    },
  },
  {
    id: 2,
    title: 'Recruit Site',
  },
  {
    id: 3,
    title: 'EC Site',
    client: {
      name: 'Company C',
    },
  },
];

// 要件
// getClientName(projectId)という関数を作成してください。
function getClientName(projectId) {
  const project = projects.find((project) => project.id === projectId);
  return project?.client?.name;
};
console.log(getClientName(1));  // 'Company A'
console.log(getClientName(2));  // undefined
console.log(getClientName(3));  // 'Company C'
console.log(getClientName(99)); // undefined

// // Q1：基本的な違い
// // 通常の.とオプショナルチェーンの?.は、どのような点が異なりますか？
// ?.は直前の評価値がnullまたはundefinedの場合、エラーを発生させることなく、式の途中で終了し、undefinedを返す点

// // Q2：出力結果
// const user = {
//   name: 'Tanaka',
// };

// console.log(user.profile?.age);
// undefined
// オプショナルチェーンを使っているから

// // Q3：ネストしたオブジェクト
// const user = {
//   profile: {
//     address: null,
//   },
// };

// console.log(user.profile?.address?.city);
// undefined
// cityプロパティがない、その前にaddressプロパティがnullなので、?.でundefindが返される

// // Q4：0の場合
// const product = {
//   price: 0,
// };

// console.log(product?.price);
// 0
// 0という値が入っているので。

// // Q5：関数の呼び出し
// function test(callback) {
//   callback?.();
// }

// test();
// エラーは発生しない。
// 存在する関数が引数に入れば実行される