// Udemy
const displayMessage = function() {
  console.log('Timeout!');
}

setTimeout(displayMessage, 3000);

// コールバック関数
// function greeting(name) {
//   console.log('Hello!' + name + '-san.');
// }

// function inputUserName(callback) {
//   let name = prompt('あなたのお名前を入力してください');
//   callback(name);
// }

// inputUserName(greeting);


// 演習1
// function sayHello() {
//   console.log('こんにちは');
// }

// function execute(callback) {
//   callback();
// }

// execute(sayHello);

// 演習2
// function sayGoodbye() {
//   console.log('さようなら');
// }

// execute(sayGoodbye);


// 演習3
const sayHello = () => {
  console.log('こんにちは');
}

const sayGoodbye = () => {
  console.log('さようなら');
}

function execute(callback) {
  callback();
}

execute(sayHello);
execute(sayGoodbye);
