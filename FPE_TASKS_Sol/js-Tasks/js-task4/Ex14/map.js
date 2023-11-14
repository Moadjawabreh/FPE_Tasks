//task9

function extractKey(arr, key) {
  let strName = [];
  strName = arr.map(function (params, key) {
    return params.name;
  });
  return strName;
}
console.log(
  extractKey(
    [{ name: "Elie" }, { name: "Tim" }, { name: "Matt" }, { name: "Colt" }],
    "name"
  )
);
