// MDN
const array = [1, 4, 9, 16];
const mapped = array.map((x) => x * 2);
console.log(mapped);

const numbers = [1, 2, 3];
const twiceNumber = numbers.map((x) => x * 2);
console.log(twiceNumber);

const products = [
  {
    name: 'クロワッサン',
    price: 240
  },
  {
    name: 'あんぱん',
    price: 140
  }
];

// 演習1
const productsName = products.map((product) => product.name);
console.log(productsName);

// 演習2
const productsList = products.map((product) => `${product.name}:${product.price}円`);
console.log(productsList);

// 余裕があれば
const productsTen = products.map((product) => {
  return {
    name:product.name,
    price:product.price + 10
  }
});
console.log(productsTen);
console.log(products);
