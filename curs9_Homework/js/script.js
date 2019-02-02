// First Name border validation
document.getElementById("firstName").addEventListener("invalid", function() {
  var classes = document.getElementById("firstName").classList;
  classes.add("borderSolidRed");
});

document.getElementById("firstName").addEventListener("keyup", function() {
  var classes = document.getElementById("firstName").classList;
  classes.remove("borderSolidRed");
});

// Last Name border validation
document.getElementById("lastName").addEventListener("invalid", function() {
  var classes = document.getElementById("lastName").classList;
  classes.add("borderSolidRed");
});

document.getElementById("lastName").addEventListener("keyup", function() {
  var classes = document.getElementById("lastName").classList;
  classes.remove("borderSolidRed");
});

// Textarea border validation
document
  .getElementById("textareaMessage")
  .addEventListener("invalid", function() {
    var classes = document.getElementById("textareaMessage").classList;
    classes.add("borderSolidRed");
  });

document
  .getElementById("textareaMessage")
  .addEventListener("keyup", function() {
    var classes = document.getElementById("textareaMessage").classList;
    classes.remove("borderSolidRed");
  });

// Confirmation banner, logo change and console log
document.querySelector("p").style.display = "none";
document.getElementById("contactForm").addEventListener("submit", function() {
  document.querySelector("p").style.display = "block";
  document.getElementById("confBanner").innerHTML =
    "Thank you for contacting us, " +
    document.getElementById("firstName").value;
  document.getElementById("logo").setAttribute("src", "images/2.jpg");
  logData();
  console.log("Logo: changed");
});

function logData() {
  var inputFields = ["firstName", "lastName", "textareaMessage"];
  for (var i = 0; i < inputFields.length; i++) {
    var data =
      document.getElementById(inputFields[i]).name +
      ": " +
      document.getElementById(inputFields[i]).value;
    console.log(data);
  }
}
