var John = {
  fullName: "John Smith",
  mass: 75,
  height: 1.75,
  calcBMI: function() {
    this.bmi = this.mass / (this.height * this.height);
    return this.bmi;
  }
};

var Mark = {
  fullName: "Mark Smith",
  mass: 75,
  height: 1.75,
  calcBMI: function() {
    this.bmi = this.mass / (this.height * this.height);
    return this.bmi;
  }
};

if (John.calcBMI() > Mark.calcBMI()) {
  console.log(John.fullName + " has a highter BMI: " + John.bmi);
} else if (Mark.bmi > John.bmi) {
  console.log(Mark.fullName + " has a highter BMI: " + Mark.bmi);
} else {
  console.log(
    John.fullName + " and " + Mark.fullName + " have the same BMI: " + John.bmi
  );
}
