//task10
function extractFullName(people) {
  return people.map(function (person) {
    return `${person.first} ${person.last}`;
  });
}

console.log(
  extractFullName([
    { first: "Elie", last: "Schoppik" },
    { first: "Tim", last: "Garcia" },
    { first: "Matt", last: "Lane" },
    { first: "Colt", last: "Steele" },
  ])
);
