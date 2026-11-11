// const user = JSON.parse('これはJSONではありません');
// console.log(user);
// エラーとなる

try {
  // 通常の処理
} catch (error) {
  // 例外が発生した場合の処理
}

function checkAge(age) {
  try {
    console.log('年齢を確認をします');

    if (age < 0) {
      throw new Error('年齢が不正です');
    }

    console.log('正常な年齢です');
  } catch (error) {
    console.log(error.message);
  }
}

checkAge(20);

/*
重要ポイント
throw new Error()は、自分で明示的に例外を発生させる処理です。
console.log()とは異なり、例外が処理されるまで通常の処理の流れを中断します。
また、`new Error()`で作成したErrorオブジェクトには、エラー内容を表す`message`プロパティがあります。
*/
const error = new Error('テストエラー');

console.log(error.message);

// try {
//   console.log('処理開始');
// } catch (error) {
//   console.log('エラー発生');
// } finally {
//   console.log('処理終了');
// }

/*
処理順序
最初に`A`が表示されます。
次に、`Promise.reject()`によって失敗状態のPromiseが作られます。
awaitはPromiseの結果を待ちますが、今回は`rejected`になっています。
そのため、その拒否理由が例外として扱われ、`catch`へ処理が移動します。
console.log('B')は実行されません。
*/
async function example() {
  try {
    console.log('A');

    const result = await Promise.reject(
      new Error('処理に失敗しました')
    );

    console.log('B');

  } catch (error) {
    console.log('C');
    console.log(error.message);
  }
}

// example();

async function observe(flag) {
  console.log('処理開始');

  try {
    const result = await (
      flag ? Promise.resolve('成功') : Promise.reject(new Error('失敗'))
    );

    console.log('結果：', result);

  } catch (error) {
    console.log('エラー：', error.message);
  } finally {
    console.log('終了処理');
  }
}

observe(false);

/*
小演習1｜JSON解析のエラー処理
要件
引数`jsonText`に渡されたJSON文字列を、`JSON.parse()`で解析してください。
*/
function parseUserInput(jsonText) {
  try {
    const userJsonText = JSON.parse(jsonText);

    return {
      ok: true,
      value: userJsonText
    }
  } catch (error) {
    return {
      ok: false,
      message: error.message
    }
  }
}
console.log(parseUserInput('{"name":"Taro"}'));
console.log(parseUserInput('{name:"Taro"}'));

/*
小演習2
実装要件
1. async function getPostStatus(postId)を定義します。
2. postIdをURLに組み込みます。
3. try/catch/finallyを使用します。
4. fetch()で通信し、response.okがfalseならthrow new Error()を実行します。
5. 成功時は{ok: true, title: 投稿タイトル}を返します。
6. 失敗時は{ok: false, message: エラーメッセージ}を返します。
7. finallyで「通信処理終了」と表示します。
*/

async function getPostStatus(postId) {
  try {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${postId}`
    );

    if (!response.ok) {
      throw new Error('エラーです')
    }

    const responseOK = await response.json();
    return {
      ok: true,
      title: responseOK.title
    }
  } catch (error) {
    return {
      ok: false,
      message: error.message
    }
  } finally {
    console.log('通信処理終了');
  }
}

// getPostStatus(1).then(console.log);
// getPostStatus(999999).then(console.log);

/*
自力本演習
課題
Todo情報をAPIから取得し、通信の開始・成功・失敗・終了を適切に処理する非同期関数を作成してください。
使用API：
https://jsonplaceholder.typicode.com/todos/1
実装要件
1. async function loadTodoState(todoId)を定義してください。
2. 通信開始時に`loading`をコンソールへ表示してください。
3. fetch()で指定IDのTodo情報を取得してください。
4. response.okが`false`の場合は`throw new Error()`を実行してください。
5. 成功時は`{ok: true, data: {id, title, completed}}`というオブジェクトを返してください。
6. 失敗時は`{ok: false, error: エラーメッセージ}`というオブジェクトを返してください。
7. finallyで`finished`を表示してください。
*/

async function loadTodoState(todoId) {
  try {
    console.log('loading');
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/todos/${todoId}`
    );

    if (!response.ok) {
      throw new Error('エラーです')
    }

    const responseOK = await response.json();
    return {
      ok: true,
      data: {
        id: responseOK.id,
        title: responseOK.title,
        completed: responseOK.completed
      }
    }
  } catch(error) {
    return {
      ok: false,
      error: error.message
    }
  } finally {
    console.log('finished');
  }
}

loadTodoState(1).then(console.log);
// loadTodoState(999999).then(console.log);

// /*
// Q1｜try/catch
// try/catchは何のために使用するのでしょうか。また、catchが実行される条件も説明してください。
// */
// 例外を捕捉して適切に処理するための仕組み。例外が発生するとcatchが実行される。

// /*
// Q2｜throw
// throw new Error()とreturnの違いを説明してください。
// */
// throwは例外を発生させ、通常の処理を中断する
// return 関数から値を返して処理を終了する構文
// async関数の場合は、捕捉されなかった例外によって、その関数が返すPromiseがrejectedになります。
// ただし、例外をcatchで捕捉して正常にreturnすれば、fulfilled状態のPromiseを返すこともできます。

// /*
// Q3｜finally
// finallyはどのようなタイミングで実行されるのでしょうか。また、Reactで役立つ場面を1つ挙げてください。
// */
// finallyはtry/catchの処理を抜ける際に、原則として実行される。
// Reactでの具体例としては、API通信が終了したときにローディング状態を解除する処理

// /*
// Q4｜HTTPエラー
// Fetch APIでHTTP 404が返された場合、通常はPromiseがrejectedになりません。
// その理由と、HTTP 404を例外として扱うために必要な処理を説明してください。
// */
// Fetch APIでは、HTTP 404でもサーバーからHTTPレスポンスを正常に受信できていれば、通常はPromiseがfulfilledになる。
// throw で例外として扱う

// /*
// Q5｜実行順序
// 次のコードを実行した場合、コンソールにはどのような順番で文字が表示されるでしょうか。また、その理由も説明してください。
// */
// async function test() {
//   console.log('A');

//   try {
//     console.log('B');

//     await Promise.reject(new Error('失敗'));

//     console.log('C');
//   } catch (error) {
//     console.log('D');
//   } finally {
//     console.log('E');
//   }
// }

// test();

// A
// B
// D
// E