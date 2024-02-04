/* LESSON 3 - Programming Tasks */

/* Profile Object  */
let myProfile = {
    name: 'Hillary Okoth',
    photo: 'images/hillaryokoth.jpeg',
    favoriteFoods: [
        'Rice',
        'Fish',
        'Chapati',
        'Pizza',
        'Chicken'
    ],
    hobbies: [
        'Listening to music while walking',
        'Hiking',
        'Barbienheimer'
    ],
    placesLived: []
};

/* Populate Profile Object with placesLive objects */
myProfile.placesLived.push(
    {
        place: 'Umhlanga, KZN',
        length: '6 months'
    },
    {
        place: 'Nairobi, Kenya',
        length: '22 years'
    }
);


/* DOM Manipulation - Output */

/* Name */
document.querySelector('#name').textContent = myProfile.name;

/* Photo with attributes */
document.querySelector('#photo').setAttribute('alt', myProfile.photo);


/* Favorite Foods List*/
myProfile.favoriteFoods.forEach(food => {
    let li = document.createElement('li');
    li.textContent = food;
    document.querySelector('#favorite-foods').appendChild(li);
});


/* Hobbies List */
myProfile.hobbies.forEach(hobby => {
    let li = document.createElement('li');
    li.textContent = hobby;
    document.querySelector('#hobbies').appendChild(li);
});


/* Places Lived DataList */
myProfile.placesLived.forEach(place => {
    let dt = document.createElement('dt');
    dt.textContent = place.place;

    let dd = document.createElement('dd');
    dd.textContent = place.length;

    document.querySelector('#places-lived').appendChild(dt);
    document.querySelector('#places-lived').appendChild(dd);
});
