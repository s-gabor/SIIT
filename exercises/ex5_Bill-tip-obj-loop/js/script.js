// Create an object John
var John = {
  bills: [124, 48, 268, 180, 42],
  calcTips: function() {
    this.tips = [];
    this.finalBills = [];
    // Determine tips based on tipping rules
    for (var i = 0; i < this.bills.length; i++) {
      var bill = this.bills[i];
      var tip;
      if (bill < 50) {
        tip = bill * 0.2;
      } else if (bill < 200) {
        tip = bill * 0.15;
      } else {
        tip = bill * 0.1;
      }
      // Add results to the corresponding arrays
      this.tips.push(tip);
      this.finalBills.push(bill + tip);
    }
  }
};

// Create an object Mark
var Mark = {
  bills: [77, 375, 110, 45],
  calcTips: function() {
    this.tips = [];
    this.finalBills = [];
    // Determine tips based on tipping rules
    for (var i = 0; i < this.bills.length; i++) {
      var bill = this.bills[i];
      var tip;
      if (bill < 100) {
        tip = bill * 0.2;
      } else if (bill < 300) {
        tip = bill * 0.1;
      } else {
        tip = bill * 0.25;
      }
      // Add results to the corresponding arrays
      this.tips.push(tip);
      this.finalBills.push(bill + tip);
    }
  }
};

// Determine the average of an array
function average(array) {
  var sum = 0;
  for (var i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum / array.length;
}

// Generate the tips and finalBills property in each object
John.calcTips();
Mark.calcTips();
// Add an averageTip property to each object
John.averageTip = average(John.tips);
Mark.averageTip = average(Mark.tips);

// Log to the console
console.log(John);
console.log(Mark);

if (John.averageTip > Mark.averageTip) {
  console.log("On average John paid a higher tip of $" + John.averageTip);
} else {
  console.log("On average Mark paid a higher tip of $" + Mark.averageTip);
}
