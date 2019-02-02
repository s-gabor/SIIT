var bills = [124, 48, 268];

function calculateTip(bill) {
  if (bill < 50) {
    return bill * 0.2;
  } else if (bill <= 200) {
    return bill * 0.15;
  } else {
    return bill * 0.1;
  }
}

var tips = [
  calculateTip(bills[0]),
  calculateTip(bills[1]),
  calculateTip(bills[2])
];

console.log("Tips: " + tips);

var finalBills = [tips[0] + bills[0], tips[1] + bills[1], tips[2] + bills[2]];

console.log("Final bills: " + finalBills);
