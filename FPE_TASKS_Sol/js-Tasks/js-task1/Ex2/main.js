function task2() {
  var result;
  var mark = parseFloat(prompt("Please inter Your Mark"));
  if (mark < 50) {
    result = "Fail";
  } else if (mark >= 50 && mark <= 59) {
    result = "D";
  } else if (mark >= 60 && mark <= 69) {
    result = "C";
  } else if (mark >= 70 && mark <= 79) {
    result = "B";
  }

  if (mark >= 80 && mark <= 89) {
    result = "A";
  } else if (mark >= 90 && mark <= 100) {
    result = "A+";
  }

  document.getElementById("showmark").innerText = result;
}
