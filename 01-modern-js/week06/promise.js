// const promise = new Promise((resolve, reject) => {
//   resolve('成功しました');
// });

// const promise = new Promise((resolve, reject) => {
//   reject('失敗しました');
// });

// promise.then((result) => {
//   console.log(result);
// });

// promise.catch((error) => {
//   console.log(error);
// });

/* 成功と失敗をひとつにまとめる */
// const isSuccess = true;

// const promise = new Promise((resolve, reject) => {
//   if (isSuccess) {
//     resolve('処理成功');
//   } else {
//     reject('処理失敗');
//   }
// });

// promise
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

/* Promiseと非同期処理を組み合わせる */
  // console.log('開始');
  
  // const promise1 = new Promise((resolve, reject) => {
  //   setTimeout(() => {
  //     resolve('データ取得完了');
  //   }, 2000);
  // });

  // promise1.then((result) => {
  //   console.log(result);
  // });

  // console.log('終了');

  // console.log('① 開始');

  // const promise = new Promise((resolve) => {
  //   console.log('② Promiseの中');

  //   setTimeout(() => {
  //     resolve('成功');
  //   }, 1000);
  // });

  // promise.then((result) => {
  //   console.log('④', result);
  // });

  // console.log('③ 終了');

/*
演習1：成功するPromise
new Promise()を使用する
numberが10以上ならresolve('合格')
10未満ならreject('不合格')
*/
function checkNumber(number) {
  return new Promise((resolve, reject) => {
    if (number >= 10) {
      resolve('合格');
    } else {
      reject('不合格');
    }
  });
};

checkNumber(15)
  .then((result) => {
    console.log(result)
  })
  .catch((error) => {
    console.log(error)
  });

checkNumber(5)
  .then((result) => {
    console.log(result)
  })
  .catch((error) => {
    console.log(error)
  });

/*
基礎演習2：1秒後に判定するPromise
成功・失敗の判定を1秒後に実行するよう変更すること
*/
function checkNumber2(number) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (number >= 10) {
        resolve('合格');
      } else {
        reject('不合格');
      }
    }, 1000);
  });
};

console.log('開始');

checkNumber2(15)
  .then((result) => console.log(result))
  .catch((error) => console.log(error));

console.log('終了');

/*
② 本演習：非同期メンバー検索
getMemberAsync(memberId)という関数を自力で実装してください。
要件
1. new Promise()を使用し、Promiseを返す。
2. setTimeout()で500ミリ秒後に検索処理を開始する。
3. find()で指定されたIDのメンバーを検索する。
4. 見つかった場合はresolve()でメンバーオブジェクトを渡す。
5. 見つからなかった場合はreject('メンバーが見つかりません')を実行する。
6. .then()と.catch()で成功・失敗の結果を表示する。
*/
const members = [
  { id: 1, name: 'Tanaka' },
  { id: 2, name: 'Suzuki' },
  { id: 3, name: 'Sato' },
];

function getMemberAsync(memberId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const foundMember = members.find((member) => member.id === memberId);
      if (foundMember) {
        resolve(foundMember);
      } else {
        reject('メンバーが見つかりません');
      }
    }, 500);
  });
};

getMemberAsync(1)
  .then((member) => console.log(member))
  .catch((error) => console.log(error));

getMemberAsync(99)
  .then((member) => console.log(member))
  .catch((error) => console.log(error));


// /*
// Q1：同期処理と非同期処理
// 同期処理と非同期処理は、処理の実行順序にどのような違いがありますか？
// */
// 同期処理は上から順に、非同期処理は、処理の完了を待たずに後続のコードを進められる

// /*
// Q2：Promiseの3つの状態
// pending・fulfilled・rejectedは、それぞれ何を意味しますか？
// */
// pending:待機中
// fulfilled：成功
// rejected：失敗

// /*
// Q3：resolveとreject
// resolve()とreject()は、どのようなときに使いますか？
// */
// resolve は処理が成功した際
// rejectは処理が失敗した場合

// /*
// Q4：thenとcatch
// .then()と.catch()は、それぞれ何をするために使用しますか？
// */
// .then()は成功した処理を呼び出す
// .catch()はPromiseチェーンの途中で発生した拒否や例外を処理します。
// そのため、単にreject()で失敗した場合だけでなく、前の.then()内でエラーが発生した場合にも対応できます。
// /*
// Q5：PromiseとsetTimeout
// 次のコードを実行した場合、A・B・Cはどの順番で表示されますか？理由も説明してください。
// */
// console.log('A');

// const promise = new Promise((resolve) => {
//   console.log('B');

//   setTimeout(() => {
//     resolve('完了');
//   }, 1000);
// });

// promise.then(() => {
//   console.log('C');
// });

// A → B → C
// new Promiseないが非同期処理ではないので上から順に実行される