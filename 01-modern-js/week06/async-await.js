/*
// async await
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

async function showMember() {
  try {
    const member = await getMemberAsync(1);
    console.log(member.name);
  } catch (error) {
    console.log(error);
  }
}

showMember();

// asyncはPromiseを返す
async function getNumber() {
  return 100;
}

console.log(getNumber());

// 練習
function getMessage() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject('取得失敗');
      // resolve('データ取得完了');
    }, 1000);
  });
}

async function showMessage() {
  console.log('A：取得開始');
  try {
    const message = await getMessage();
    console.log('C：' + message);
  } catch (error) {
    console.log(error);
  }

}

showMessage();

console.log('B：別の処理');
*/

/*
基礎演習1：async関数の戻り値
getScore()という関数を作成してください。
要件
- asyncを使って関数を定義する
- 80という数値をreturnする
- 呼び出し元で.then()を使用する
- コンソールに80を表示する
*/
async function getScore() {
  return 80;
}

getScore().then((result) => console.log(result));

/*
基礎演習2：awaitで結果を受け取る
次の関数を使用してください。
*/
function getUserName() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('Tanaka');
    }, 1000);
  });
}

/*
要件
- showUserName()というasync関数を作成する
- awaitでgetUserName()の結果を受け取る
- コンソールにユーザー名：Tanakaと表示する
- 関数の外側にもconsole.log('処理終了')を記述し、実行順序を確認する
*/

async function showUserName() {
  const userName = await getUserName();
  console.log(`ユーザー名：${userName}`);
}
showUserName();

console.log('処理終了');

/*
基礎演習3：エラー処理
次の関数を使用してください。
*/
function checkLogin(isLoggedIn) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (isLoggedIn) {
        resolve('ログイン成功');
      } else {
        reject('ログイン失敗');
      }
    }, 500);
  });
}

/*
要件
- loginUser(isLoggedIn)というasync関数を作成する
- awaitでcheckLogin()を呼び出す
- try / catchを使って成功と失敗を処理する
- trueとfalseの両方で動作を確認する
*/
async function loginUser(isLoggedIn) {
  try {
    const isLoggedResult = await checkLogin(isLoggedIn);
    console.log(isLoggedResult);
  } catch (error) {
    console.log(error);
  }
}

loginUser(false);

/*
本演習：複数メンバーの非同期取得
Day 1で作成したgetMemberAsync(memberId)を再利用します。
実装要件
1. getMemberAsync(1)をawaitで呼び出す
2. 続いてgetMemberAsync(2)をawaitで呼び出す
3. 取得した2人のメンバーを配列にまとめる
4. 配列をreturnする
5. try / catchでエラーを処理する
6. 呼び出し元で取得結果をコンソールに表示する
さらに、IDの一方を99に変更して、失敗した場合の動作を確認してください。
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


async function getTwoMembers() {
  try {
    const primaryMember = await getMemberAsync(1);
    const secondaryMember = await getMemberAsync(2);
    const twoMember = [primaryMember, secondaryMember];
    return twoMember;
  } catch (error) {
    console.log(error);
    // throw error;
  }
}

getTwoMembers().then((members) => {
    console.log(members);
  });

// // async関数がreturn 100でもPromiseを返すのはなぜですか？
// Promiseを返す処理だから

// // awaitを使うとJavaScript全体が停止しますか？理由も説明してください。
// 停止しない。awaitが書かれている処理が待機状態になるだけ

// // .then()とawaitの違いは何ですか？
// .then()：Promiseが履行されたときに実行するコールバックを登録する。
// await：Promiseの結果が確定するまで、現在のasync関数の続きの実行を一時停止し、履行された値を受け取る。

// // awaitしているPromiseがreject()された場合、try / catchはどう動作しますか？
// catchへ入る

// // 次のコードの出力順序と理由を説明してください。
// // async function test() {
// //   console.log('A');
// //   await Promise.resolve();
// //   console.log('B');
// // }

// // console.log('C');
// // test();
// // console.log('D');

// C
// A
// D
// B
// awaitで待機状態となるため
