//statement functions
function myFirstFunction() {
  console.log("My first function");
}

//call function
myFirstFunction();
myFirstFunction();

//statement functions with return
function myFirstFunctionReturn() {
  return "My first function return"; // return exits the function
}
var str = myFirstFunctionReturn();
console.log(str);
console.log(myFirstFunctionReturn());

//expression function
var expFunction = function() {
  console.log("My exp function");
};
expFunction();

//IIEF
(function() {
  console.log("My self invoking function");
})();

//callback

function callbackFunction() {
  console.log("My callback function");
}
function testcallbackFunction(funcName) {
  console.log("My test callback function");
  //callback function
  if (typeof functName === "function") {
    //check if function
    funcName(); // callbackFunction();
  }
}
testcallbackFunction(callbackFunction);

//play with stars

function displayStars() {
  var char = "*";
  for (var i = 0; i < 5; i++) {
    console.log(char);
    char += "*";
  }
}
//display 3 times starts image of five lines
displayStars();
displayStars();
displayStars();

function displayStars2(nr) {
  var char = "*";
  for (var i = 0; i < nr; i++) {
    console.log(char);
    char += "*";
  }
}
displayStars2(5);
displayStars2(3);
displayStars2(4);
function displayStars3(nr, char) {
  var str = char;
  for (var i = 0; i < nr; i++) {
    console.log(str);
    str += char;
  }
}
displayStars3(5, "*");
displayStars3(3, "-");
displayStars3(4, "+");

//scope
//global variables

x = 1;
var y = 2;
window.z = 3;
console.log("X=", x);
function testScope() {
  a = 4;
  var b = 5;
  console.log("Y=", y);
  console.log("in function A=", a);
  console.log("in function B=", b);
}
var b = 7;
testScope();
console.log("outside A=", a);
console.log("outside B=", b);

var a = 1;
firstFunction();
function firstFunction() {
  var b = 2;
  secondFunction();
  function secondFunction() {
    var c = 3;
    console.log("A=", a); //1
    console.log("B=", b); //2
    console.log("C=", c); //3
  }
  console.log("A=", a); //1
  console.log("B=", b); //2
  // console.log("C=", c); // Ref error
}
console.log("A=", a); //1
//console.log("C=", c);//Ref error

var counter = function() {
  var count = 0;
  return function() {
    count++;
  };
};
