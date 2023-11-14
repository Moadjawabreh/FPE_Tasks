//task5

function makeStrings(arr) {
  let strName = [];
  return arr.map(function (params, index) {
    if (params.age >= 18) {
      return `${params.name} can go to The Matrix`;
    } else {
      return `${params.name} is under age!!`;
    }
  });
}

console.log(
  makeStrings([
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
  ])
);
