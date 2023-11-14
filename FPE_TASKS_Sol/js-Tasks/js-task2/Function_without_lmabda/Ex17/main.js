//task17

function canIGetADrivingLicense(age) {
  if (age >= 20) {
    return "yes you can do";
  } else {
    return ` please come back after ${20 - age} years to get one `;
  }
}

console.log(canIGetADrivingLicense(19));
