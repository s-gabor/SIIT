$("#b0").click(function(event) {
  $("#t1").off("keyup", function(event) {
    $("#p1").html(event.key + " key was pressed");
  });
});

// document.getElementById("b1").addEventListener("click", function(event) {
// 	if (event.which == 0)
// 		document.getElementById("b0").value = "Hi said";
// 	else
// 		document.getElementById("b0").value = "See you later";
// });
$("#b1").mousedown(function(event) {
  if (event.which == 0) $("#b0").val("Hi said!");
  else $("#b0").val("See you later");
});

// document.getElementById("t1").addEventListener("keyup", function(event) {
// 	document.getElementById("p1").innerHTML =  event.key + " key was pressed";
// });
$("#t1").keyup(function() {
  $("#p1").html(event.key + " key was pressed");
});
