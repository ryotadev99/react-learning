async function inspectTodo() {
  console.log('A：取得開始');

  const response = await fetch(
    'https://jsonplaceholder.typicode.com/todos/1'
  );

  console.log('HTTPステータス：', response.status);
  console.log('取得成功：', response.ok);

  if (!response.ok) {
    throw new Error(`HTTPエラー：${response.status}`);
  }

  const todo = await response.json();

  console.log('取得データ：', todo);
  console.log('完了状態：', todo.completed);
}

inspectTodo().catch((error) => {
  console.error('エラー：', error.message);
});

console.log('B：処理継続');

/*
小演習1：投稿タイトルの取得
目標：APIから取得したオブジェクトのプロパティを表示する。
実装条件：
- getPostTitle()というasync関数を作成する。
- fetch()で投稿データを取得する。
- response.json()を使ってデータを取得する。
- 取得した投稿のtitleを表示する。
https://jsonplaceholder.typicode.com/posts/1
*/

async function getPostTitle() {
  const response = await fetch(
    'https://jsonplaceholder.typicode.com/posts/1'
  );

  const post = await response.json();

  // console.log(post);
  console.log(post.title);
}

getPostTitle();

/*
小演習2｜ユーザー一覧の取得
実装条件は次のとおりです。
1. getUserNames()というasync関数を作成してください。
2. fetch()でユーザー一覧を取得してください。
3. response.json()でJSONデータを取得してください。
4. map()を使用し、各ユーザーのnameだけを取り出してください。
5. ユーザー名の配列をconsole.log()で表示してください。
*/

async function getUserNames() {
  const response = await fetch(
    'https://jsonplaceholder.typicode.com/users'
  );

  const users = await response.json();

  const userName = users.map((user) => user.name);

  console.log(userName);
}

getUserNames();

/*
自力本演習｜getUserProfile(userId)
実装条件
1. 引数userIdを受け取る。
2. テンプレートリテラルを使い、IDに対応したURLを生成する。
3. fetch()でユーザー情報を取得する。
4. response.okを確認する。
5. HTTPエラーの場合は、throw new Error()でエラーを発生させる。
6. 正常時は、response.json()でデータを取得する。
7. 次の形式のオブジェクトを返す。
*/

async function getUserProfile(userId) {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/users/${userId}`
  );

  if (!response.ok) {
    throw new Error(`HTTPエラー：${response.status}`)
  }

  const userProfile = await response.json();
  return {
    name: userProfile.name,
    email: userProfile.email,
    city: userProfile.address.city
  };
}

getUserProfile(1)
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });
getUserProfile(2)
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });
getUserProfile(999)
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });


// // Q1. fetch()は何を返しますか？ また、await fetch()では何を受け取りますか？
// fetch(): promiseを返す。
// await fetch(): promiseがfulfilledになるのを待ち、通常はResponseオブジェクトを受け取る。

// // Q2. 次の2つのawaitは、それぞれ何を待っていますか？
// const response = await fetch(url);
// const data = await response.json();
// 1つ目のawaitは、HTTPレスポンスを受け取るまで待ちます。
// 2つ目のawaitは、レスポンス本文を読み取り、JSONとして解析する処理が完了するまで待ちます。

// // Q3. response.okがtrueになるのは、どのような条件でしょうか？
// HTTPステータスが200以上299以下

// // Q4. HTTPステータス404が返された場合、fetch()のPromiseは自動的にrejectされますか？ 理由も説明してください。
// rejectにはならない。通常、404のレスポンスを受信した時点で、fetch()のPromiseはResponseオブジェクトを伴ってfulfilledになります。HTTPエラーをPromiseのrejectとして扱いたい場合は、response.okを確認してthrow new Error()を実行する。

// // Q5. 次のコードでは、AとBのどちらが先に表示されますか？ また、その理由も説明してください。
// async function getDate() {
//   const response = await fetch(
//     'https://jsonplaceholder.typicode.com/users/1'
//   );

//   console.log('A');
// }
// getDate();
// console.log('B');

// Bが先に表示
// 今回のコードでは、getDate()が呼び出されると、await fetch(...)に到達するまでは同期的に実行されます。

// awaitで処理が一時停止するため、呼び出し元のconsole.log('B')が先に実行されます。その後、通信が完了するとconsole.log('A')が実行されます。