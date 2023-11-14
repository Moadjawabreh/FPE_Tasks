//task 4

function namesOnly(arr) {
  let strName = [];
  arr.map(function (params, index) {
    strName[index] = params.name;
  });
  return strName;
}

console.log(
  namesOnly([
    {
      name: "Angelina Jolie",
      age: 80,
    },
    {
      name: "Eric Jones",
      age: 2,
    },
    {
      name: "Paris Hilton",
      age: 5,
    },
    {
      name: "Kayne West",
      age: 16,
    },
    {
      name: "Bob Ziroll",
      age: 100,
    },
    {
      name: "Bob Ziroll",
      age: 100,
    },
  ])
);
