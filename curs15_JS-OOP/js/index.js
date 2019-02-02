// // object literal empty
// var user1 = {};

// // new object empty
// var user2 = new Object();

// var user3 = {
//   name: "Geo"
// };

// // set property
// user3.age = 30;
// console.log("User = " + user3);
// // get property
// console.log("User name = " + user3.name);

var user4 = {
  name: "Geo",
  age: 32,
  sayHi: function() {
    console.log("Hi " + this.name);
  }
};

// // call object method
// user4.sayHi();

// // define new method
// user4.addNewMethod = function() {
//   console.log("Add new method !");
// };

// user4.addNewMethod();
// // get property
// console.log("Name = " + user4["name"]);
// var key = "job";
// user4[key] = "dev";
// console.log("Job = " + user4["job"]);

// console.log("User keys: " + Object.keys(user4));
// console.log("User values: " + Object.values(user4));
// console.log("User entries: " + Object.entries(user4));

// var user = {
//   name: "John Doe",
//   age: 25,
//   height: 170,
//   weight: 70,
//   sayHi: function() {
//     console.log("Hi");
//   },
//   sayHiTo: function() {
//     console.log("Hi " + this.name);
//   },
//   calculateBMI: function() {
//     // return this.height / this.weight;
//     console.log("BMI = " + this.height / this.weight);
//   }
// };

// for (let item in user) {
//   if (typeof user[item] === "function") {
//     user[item]();
//   } else {
//     console.log(user[item]);
//   }
// }

// console.log("*********************");
// var values = Object.values(user);
// for (var i = 0; i < values.length; i++) {
//   if (typeof values[i] === "function") {
//     values[i]();
//   } else {
//     console.log(values[i]);
//   }
// }

// class
function User(options) {
  this.name = options.name;
  this.age = options.age;
  this.sayHi = function() {
    console.log("Hi there! I'm " + this.name + ".");
  };
}

// new -> class instance = object
var geo = new User(user4);
console.log("Geo " + geo);
console.log("Name: " + geo.name);
geo.sayHi();
var maria = new User({ name: "Maria", age: 25 });
maria.sayHi();

function Post(options) {
  this.userId = options.userId;
  this.id = options.id;
  this.title = options.title;
  this.body = options.body;
}

$.ajax({ url: "https://jsonplaceholder.typicode.com/posts/1" }).then(function(
  response
) {
  //   console.log(response);
  var post = new Post(response);
  console.log(post);
});
