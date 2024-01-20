/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
let fullName = "Hillary Okoth";
let currentYear = 2024;
let profilePicture = "images/hillaryokoth.jpeg";


/* Step 3 - Element Variables */
const nameElement = document.getElementById("name");
const foodElement = document.getElementById("food");
const yearElement = document.querySelector("#year");
const imageElement = document.querySelector("picture img");

/* Step 4 - Adding Content */
nameElement.innerHTML = `<strong>${fullName}</strong>`;
yearElement.textContent = `${currentYear}`;
imageElement.setAttribute("src", profilePicture);
imageElement.setAttribute("alt", fullName);

/* Step 5 - Array */
let favouriteFoods = ["Pizza", "Sushi", "Chocolate", "Tacos", "Ice Cream"];
let moreFood = "Fish"

foodElement.innerHTML = favouriteFoods;
favouriteFoods.push(moreFood);
foodElement.innerHTML += `<br>${favouriteFoods}`;
favouriteFoods.shift();
foodElement.innerHTML += `<br>${favouriteFoods}`;
favouriteFoods.pop();
foodElement.innerHTML += `<br>${favouriteFoods}`;

