function task4() {
  var x = parseInt(prompt("please inter the first Num"));
  var y = parseInt(prompt("please inter the first Num"));
  var result;
  if (x > y) {
    result = "Hello world";
  } else {
    result = "Goodbye";
  }

  console.log(result);
  alert(result);
  document.getElementById("showresult").innerText = result;
}
