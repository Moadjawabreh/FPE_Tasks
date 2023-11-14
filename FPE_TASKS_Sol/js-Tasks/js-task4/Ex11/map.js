//task6

function readyToPutInTheDOM(arr) {
  let strName = [];
  return arr.map(function (params, index) {
    return `<h1>${params.name}}</h1><h2>${params.age}</h2>`;
  });
}

console.log(
  readyToPutInTheDOM([
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
