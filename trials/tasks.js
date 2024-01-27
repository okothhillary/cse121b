let firstName = 'Antonia';
let lastName = 'Francesca';

function fullName(first, last){
    let combineName = `${first} ${last}`;
    console.log(combineName);
    return combineName;
}
const fullName = function (first, last) {
    return `${first} ${last}`;
}

const fullName = (first, last) => `${first} ${last}`;

document.querySelector('#fullName').innerHTML = fullName(firstName, lastName);