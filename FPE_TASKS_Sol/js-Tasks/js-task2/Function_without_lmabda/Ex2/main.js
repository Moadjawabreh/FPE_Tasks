// task2

let counter = 1;
for (let i = 1; i <= 4; i++) {
  let cont = "";
  for (let index = 1; index <= i; index++) {
    cont += " " + counter;
    counter++;
  }
  console.log(`${cont}\n`);
}
