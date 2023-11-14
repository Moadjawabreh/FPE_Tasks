// task 30

function markInUniversity(mark) {
  if (mark >= 95 && mark <= 100) {
    return "A";
  } else if (mark >= 85 && mark < 95) {
    return "B";
  } else if (mark >= 70 && mark < 85) {
    return "C";
  } else if (mark >= 50 && mark < 70) {
    return "D";
  } else if (mark >= 0 && mark < 50) {
    return "F";
  } else {
    return "Invalid mark. mark should be between 0 and 100.";
  }
}

console.log(markInUniversity(70));
