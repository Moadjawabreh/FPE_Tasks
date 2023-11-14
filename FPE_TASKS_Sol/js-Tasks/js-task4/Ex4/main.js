//task4

function addKeyAndValue(arr, key, value) {
  let newArray = [];
  arr.forEach(function (par) {
    par[key] = value;
    newArray.push(par);
  });
  return newArray;
}

console.log(
  addKeyAndValue(
    [{ name: "Elie" }, { name: "Tim" }, { name: "Matt" }, { name: "Colt" }],
    "title",
    "instructor"
  )
);
