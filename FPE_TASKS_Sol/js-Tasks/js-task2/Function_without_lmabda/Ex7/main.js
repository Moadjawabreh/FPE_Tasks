// task7

var favoriteDrink = prompt("Enter your favorite drink:");

favoriteDrink = favoriteDrink.toLowerCase();

switch (favoriteDrink) {
  case "banana":
    console.log("The price of a banana drink is 20 dollars");
    break;
  case "apple":
    console.log("The price of an apple drink is 15 dollars");
    break;
  case "orange":
    console.log("The price of an orange drink is 18 dollars");
    break;
  case "coffee":
    console.log("The price of a coffee drink is 25 dollars");
    break;
  case "tea":
    console.log("The price of a tea drink is 12 dollars");
    break;
  default:
    console.log("Sorry, we don't have the price for your favorite drink.");
    break;
}

