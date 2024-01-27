/**let new_array = arr.map(function callback( currentValue[, index[, array]]) {
    // return element for new_array
}[, thisArg]) */

let array = ["one", "two", "three"];

let newArray = array.map(function (array) {
    return `<li>${array}</li>`;
});
document.getElementById("myList").innerHTML = arrayHtml.join();
 

const grades = ["A", "B", "A"];
function convertGradeToPoints(grade) {
  let points = 0;
  if (grade === "A") {
    points = 4;
  } else if (grade === "B") {
    points = 3;
  }
  return points;
}
const gpaPoints = grades.map(convertGradeToPoints);

const pointsTotal = gpaPoints.reduce(function (total, item) {
  return total + item;
});
const gpa = pointsTotal / gpaPoints.length;

/* this could be further simplified as
const gpa = gpaPoints.reduce((total, item) => total + item) / gpaPoints.length;*/




