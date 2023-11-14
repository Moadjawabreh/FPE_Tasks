//task3
function capitalizeNames(arr) {
  return arr.map(function (params) {
    params = params.toLowerCase();
    return (params[0] = params[0].toUpperCase() + params.slice(1));
  });
}

console.log(capitalizeNames(["john", "JACOB", "jinGleHeimer", "schmidt"]));
