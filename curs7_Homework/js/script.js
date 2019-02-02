alert(
  "Hello Anca! Hopefully this isn't too annoying. To me it wasn't. It was actually a lot of fun:D"
);
alert("1. Display in the console the numbers from 1 to 20");
console.log("********************   1   ********************");
for (i = 0; i <= 20; i++) {
  console.log(i);
}
console.log("");

alert("2. Display in the console the odd numbers from 1 to 20");
console.log("********************   2   ********************");
for (i = 0; i <= 20; i += 2) {
  console.log(i);
}
console.log("");

var inputArr = prompt(
  "3. Enter an array of numbers to calculate the sum. It MUST be in the form: [1, 2, 3, 4, 5] (OR <enter> for default)"
);
console.log("********************   3   ********************");
var arr = eval(inputArr || [1, 2, 3, 4, 5]);
var sum = 0;
for (i = 0; i < arr.length; i++) {
  sum = sum + arr[i];
}
console.log(
  "The sum of the following elements:   " + arr + "   is   " + sum + "."
);
console.log("");

var inputArr = prompt(
  "4. Enter an array of numbers to determine the max. It MUST be in the form: [1, 2, 3, 2, 1] (OR <enter> for default)"
);
console.log("********************   4   ********************");
var arr = eval(inputArr || [1, 2, 3, 2, 1]);
max = arr[0];
for (i = 1; i < arr.length; i++) {
  if (arr[i] > max) {
    max = arr[i];
  }
}
console.log(
  "The maximum of the following numbers:   " + arr + "   is   " + max + "."
);
console.log("");

var inputArr = prompt(
  "5. Enter an array of elements to determine how many times a certain element appears in the array. It MUST be in the form: [1, 1, 2, 2, 'a', 'a'] (OR <enter> for default)"
);
console.log("********************   5   ********************");
var arr = eval(inputArr || [1, 1, 2, 2, "a", "a"]);
var obj = {};
for (i = 0; i < arr.length; i++) {
  if (obj[arr[i]]) {
    obj[arr[i]]++;
  } else {
    obj[arr[i]] = 1;
  }
}
console.log(
  "The following array   [" + arr + "]   has the following element/count:"
);
for (var property in obj) {
  console.log(
    "Element   '" + property + "'   appears   " + obj[property] + "   times."
  );
}
alert("Thanks for reviewing my homework and for leaving a feedback. Good Bye!");
