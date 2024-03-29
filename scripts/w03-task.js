/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */
function add(number1, number2){
    return number1 + number2;
};

function addNumbers(){
    let addNumber1 = Number(document.querySelector("#add1").value);
    let addNumber2 = Number(document.querySelector("#add2").value);
    
    document.querySelector("#sum").value = add(addNumber1, addNumber2);
};

document.querySelector("#addNumbers").addEventListener("click", addNumbers);


/* Function Expression - Subtract Numbers */

const subtract = function(number1, number2) {
    return number1 - number2;
};

const subtractNumbers = function() {
    let subtractNumber1 = Number(document.querySelector("#subtract1").value);    
    let subtractNumber2 = Number(document.querySelector("#subtract2").value);

    document.querySelector("#difference").value = subtract(subtractNumber1, subtractNumber2);
};

document.querySelector("#subtractNumbers").addEventListener("click", subtractNumbers);

/* Arrow Function - Multiply Numbers */

const multiply = (number1, number2) => number1 * number2;

const multiplyNumbers = () => {
    let multiplyNumber1 = Number(document.querySelector("#factor1").value);    
    let multiplyNumber2 = Number(document.querySelector("#factor2").value);

    document.querySelector("#product").value = multiply(multiplyNumber1, multiplyNumber2);
};

document.querySelector("#multiplyNumbers").addEventListener("click", multiplyNumbers);


/* Open Function Use - Divide Numbers */
function divide(dividend, divisor) {
    if (divisor === 0) {
        return "Error: Cannot divide by zero";
    }
    return dividend / divisor;
}

const divideNumbers = () => {
    let dividend = Number(document.querySelector("#dividend").value);
    let divisor = Number(document.querySelector("#divisor").value);
    document.querySelector("#quotient").value = divide(dividend, divisor);
};

document.querySelector("#divideNumbers").addEventListener("click", divideNumbers);


/* Decision Structure */
document.getElementById("getTotal").addEventListener("click", function() {
    const subtotalInput = document.getElementById("subtotal").value.trim();
    if (!subtotalInput || isNaN(subtotalInput)) {
        alert("Please enter a valid number.");
        return;
    }
    const subtotal = parseFloat(subtotalInput);
    const isMemberChecked = document.getElementById("member").checked;
    let total;
    if (isMemberChecked) {
        total = subtotal * 0.8;
    } else {
        total = subtotal;
    }
    document.getElementById("total").textContent = `$${total.toFixed(2)}`;
});


/* ARRAY METHODS - Functional Programming */
const numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

const arrayElement = document.getElementById("array");

arrayElement.innerHTML = numbersArray.join(", ");



/* Output Source Array */

/* Output Odds Only Array */
const oddNumbers = numbersArray.filter(number => number % 2 === 1);
document.querySelector('#odds').innerHTML = oddNumbers.join(', ');


/* Output Evens Only Array */
const evenNumbers = numbersArray.filter(number => number % 2 === 0);
document.querySelector('#evens').innerHTML = evenNumbers.join(', ');


/* Output Sum of Org. Array */
const sum = numbersArray.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
document.querySelector('#sumOfArray').innerHTML = sum;


/* Output Multiplied by 2 Array */
const multipliedArray = numbersArray.map(number => number * 2);
document.querySelector('#multiplied').innerHTML = multipliedArray.join(', ');


/* Output Sum of Multiplied by 2 Array */
const sumOfMultiplied = numbersArray.map(number => number * 2).reduce((accumulator, currentValue) => accumulator + currentValue, 0);
document.querySelector('#sumOfMultiplied').innerHTML = sumOfMultiplied;
