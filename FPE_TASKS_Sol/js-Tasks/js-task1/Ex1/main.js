function task1() {
  var operator = prompt("please inter the operation");
  var num1 = parseFloat(prompt("please inter the first Num"));
  var num2 = parseFloat(prompt("please inter the first Num"));
  var result;
  switch (operator) {
    case "+":
      result = num1 + num2;
      break;
    case "-":
      result = num1 - num2;
      break;
    case "*":
      result = num1 * num2;
      break;
    case "/":
      result = num1 / num2;
      break;
    default:
      result = "Wrong choice";
  }

  console.log(num2 + " " + operator + " " + num2 + " = " + result);
}
