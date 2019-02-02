// //Default params
// //ES5
// function es5Params(name, age) {
//   var name = name || "";
//   var age = age || 0;
//   console.log("name: " + name, "age: " + age);
// }
// es5Params();
// es5Params("dan", 35);

// //ES6
// function es6Params(name = "", age = 0) {
//   console.log("name: " + name, "age: " + age);
// }
// es6Params();
// es6Params("dana", 32);

// //Template Literals
// //ES5
// var id = 2;
// var url = "https://myurl.com" + id;
// console.log("URL: " + url);

// var fname = "Sam";
// var lname = "Gabor";
// var name = "My name is " + fname + " " + lname;
// console.log("Name: " + name);

// //ES6
// var url = `https://myurl.com ${id}`;
// console.log("URL: ", url);
// var name = `My name is ${fname} ${lname}`;
// console.log(name);

// // Multi-line Strings
// //ES5
// var html =
//   '<article data-title="123">< h2 > Title</h2><p>Body</p><button>Edit</button> <button>Delete</button></article >';
// var html =
//   '<article data-title="123">' +
//   "< h2 > Title</h2>" +
//   "<p>Body</p>" +
//   "<button>Edit</button>" +
//   "<button>Delete</button> " +
//   "</article >";
// console.log("ES5 html: ", html);

// //ES6
// var html = `<article data-title="123">
//                 < h2 > Title</h2>
//                 <p>Body</p>
//                 <button>Edit</button>
//                 <button>Delete</button>
//             </article >`;
// console.log("ES6 html: ", html);

// // Block-Scoped Constructs Let and Const
// // hoisting
// // hoisting
// //ES5 - variables hoisting
// function varTest() {
//   console.log("X =", x);
//   // console.log("Y =", y); // error
//   var x = 1;
//   console.log("X =", x);
//   if (true) {
//     var z = 2;
//     var x = 3; // same variable x
//     console.log("X =", x);
//   }
//   console.log("X =", x);
// }
// varTest();

// var x = 1;
// function varTest2() {
//   var x = 2;
//   console.log("x local", x);
// }
// console.log("x global", x);
// //ES5 - variables hoisting
// function varTest() {
//   console.log("X = ", x);
//   var x = 1;
// }
// varTest();

// // -> hoisted
// // function varTest() {
// //   var x;
// //   console.log("X =", x);
// //   x = 1;
// //   if (true) {
// //     x = 3; // same variable x
// //     console.log("X =", x);
// //   }
// //   console.log("X =", x);
// // }

// //ES5 - hoisting function
// es5Function();
// function es5Function() {
//   console.log("es 5 function");
// }

// //ES6 - variables hoisting
// function letTest() {
//   //   console.log("X1 = ", x);
//   let x = 1;
//   console.log("X2 = ", x);
//   if (true) {
//     let x = 2;
//     console.log("X3 = ", x);
//   }
//   console.log("X4 = ", x);
// }
// letTest();
// //ES6 - hoisting function

// // CONST
// const pi = 3.14;

// // pi = 3.15; -> error

// // CONST OBJ

// // Display 0, 1, 2, 3 using timeout...

// // Display button index on click without using data from html, event...

// // Arrow function
// console.log("");
// console.log("Arrow function");
// console.log("");
// //ES5
// function es5function() {
//   console.log("ES 5 function");
// }
// es5function();

// // ES6

// // Arrow functions
// // ES5

// // ES6 function no params
// const es61 = () => {
//   console.log("ES 6 function");
// };
// es61();

// const es62 = () => "ES 6 no params return!";
// console.log("ES6 return apel: ", es62());
// // ES 6 with one param
// const es63 = name => name;
// console.log("Name: " + es63("Geo"));

// // with parantheses but codesandbox deletes them
// const es64 = name => name;
// console.log("Name: " + es64("John"));

// const es65 = name => {
//   return name;
// };
// console.log("Name: " + es65("Jack"));

// const es651 = name => {
//   console.log("Name");
//   return name;
// };
// console.log("Name: " + es651("Jim"));
// // ES6 more params
// const es66 = (a, b) => a + b;
// console.log("Sum: " + es66(2, 3));

// const es67 = (a, b) => {
//   console.log("Sum: ", a + b);
//   return a + b;
// };
// console.log("Sum: " + es67(2, 3));

// //ES6 return object use ()
// // {name: 'Geo'}
// const es68 = () => ({
//   name: "Geo"
// });
// console.log("Return object: ", es68());

// const es69 = () => {
//   return {
//     name: "Geo"
//   };
// };
// console.log("Return object: ", es69());

// // THIS SCOPE
// //ES5 this scope

// //ES6 this scope

// // Classes
// //ES5

// for (var i = 0; i < 10; i++) {
//   setTimeout(function() {
//     console.log(i);
//   }, 100);
// }

// // ES5 solution
// function delay(i) {
//   setTimeout(function() {
//     console.log(i);
//   }, 100);
// }

// for (var i = 0; i < 10; i++) {
//   delay(i);
// }

// // ES6 solution
// for (let i = 0; i < 10; i++) {
//   setTimeout(function() {
//     console.log(i);
//   }, 100);
// }

// // my approach
// function button() {
//   var ul = document.getElementById("buttons");
//   var node = document.createElement("button");
//   var textnode = document.createTextNode("Click me!");
//   node.appendChild(textnode);
//   node.setAttribute("id", "b1");
//   document.getElementById("buttons").appendChild(node);
// }
// document.addEventListener("DOMContentLoaded", button);
// document.getElementById("b1").addEventListener("click", function() {
//   console.log(this);
// });

// ES5 this
function es5This() {
  var btn = document.createElement("button");
  btn.innerText = "ES5 this !";
  btn.addEventListener("click", function() {
    console.log(this);
  });
  document.body.appendChild(btn);
}
document.addEventListener("DOMContentLoaded", es5This);

// ES6 this
const es6This = () => {
  var btn = document.createElement("button");
  btn.innerText = "ES6 this !";
  btn.addEventListener("click", () => {
    console.log(this);
  });
  document.body.appendChild(btn);
};
document.addEventListener("DOMContentLoaded", es6This);

function es61This() {
  var btn = document.createElement("button");
  btn.innerText = "ES6 this !";
  // var aaaaa = "ahaaaa";
  btn.addEventListener("click", aaaaa => {
    console.log(aaaaa, this);
  });
  document.body.appendChild(btn);
}
document.addEventListener("DOMContentLoaded", es61This);

// classes
// ES5
function Life(options) {
  this.type = options.type;
}
Life.prototype.walk = function() {
  console.log("Walk!");
};
var life = new Life({ type: "human" });
life.walk();

// ES6
const Life6 = class {
  constructor(options) {
    this.type = options.type;
    console.log("Constructor initiates!");
  }
  walk() {
    console.log("Walk !!!");
  }
  static displayLife() {
    console.log("LIFE");
  }
};

const life6 = new Life6({ type: "dog" });
life6.walk();
Life6.displayLife();
console.log(life6);

class Animal extends Life6 {
  constructor(options = {}) {
    super(options);
    this.speak = options.speak;
  }
  displaySpeak() {
    console.log("Speak");
  }
}

const dog = new Animal({
  type: "dog",
  speak: "ham ham"
});
console.log("Dog: ", dog);
