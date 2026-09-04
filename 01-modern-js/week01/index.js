const users = [
  {
    id: 1,
    name: "Taro",
    age: 30,
  },
  {
    id: 2,
    name: "Hanako",
    age: 25,
  },
];

const getUserName = (user) => {
  return user.name;
};

console.log(getUserName(users[0]));