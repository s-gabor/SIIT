// IF STATEMENT
// Say good evening if hour after 7
var date = new Date();
var hour = date.getHours();
if (hour < 10) {
  console.log("Good Morning!");
} else if (hour >= 19) {
  console.log("Good Evening!");
} else {
  console.log("Good Evening!");
}

// for (i = 0; i <= 10; ++i) {
//   console.log(i);
// }

// // fib: 0, 1, 1, 2, 3, 5, 8, 13

// var a = 0;
// var b = 1;
// for (var n = 0; n <= 100; n = a + b) {
//   console.log(n);
//   a = b;
//   b = n;
// }

var client1 = {
  name: "John Doe",
  gender: "M",
  height: 1.82,
  weight: 95
};

var client2 = {
  name: "Mary Jane",
  gender: "F",
  height: 1.52,
  weight: 55
};

var clients = [client1, client2];
console.log("CLIENTS: ", clients);

for (i = 0; i < clients.length; i++) {
  var c = clients[i];
  var BMI = Math.round(c.weight / (c.height * c.height));
  if (BMI < 18.5) {
    output = "Underweight";
  } else if (BMI < 25) {
    output = "Normal Weight";
  } else if (BMI < 30) {
    output = "Overweight";
  } else {
    output = "Obese";
  }
  console.log(
    "Client:   " + c.name + " | " + c.gender + " | BMI: " + BMI + " | " + output
  );
}
