document.write("Hello before !");
setTimeout(function() {
  document.write("Hello from set timeout!");
}, 500);
var x = 0;
setInterval(function() {
  document.write(x + " Hello   ");
  x++;
}, 3000);
document.write("Hello after !");
