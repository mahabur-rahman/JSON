const data = require("./friends_data/friends.json");

// looping method

for (x in data) {
  //   console.log(x);
  //   console.log(data[x]);
}

// json stringify ___________

const obj = {
  name: "mahabur rahman",
  age: 24,
};

// console.log(obj);
// console.log(JSON.stringify(obj));
const obj2 = JSON.stringify(obj);

console.log(JSON.parse(obj2));
// console.log(data);

// console.log(data.friends[0]);
// console.log(data.friends[0].name);
// console.log(`${data.friends[0].name} ${data.friends[0].age}`);

// modify json data ________

// data.friends[0].name = "Mahabur Rahman";
// console.log(data.friends[0].name);

// delete json data _________

// delete data.friends[0].age;
// console.log(data);
