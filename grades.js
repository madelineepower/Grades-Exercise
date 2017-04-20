console.log("hi");
var scores = [82, 71, 95, 55, 98, 69, 72, 78, 84, 64, 58, 87];
console.log(scores);

// 1. create array for each grade
// 2. As loop runs, numbers are pushed into the correct array and output to the terminal
var AArray = [];
var BArray =[];
var CArray = [];
var DArray = [];
var FArray = [];



for (i = 0; i < scores.length ; i++) {
  if ((scores[i] >= 91) && (scores[i] <= 100)) {
    AArray.push(scores[i]);
  } else if ((scores[i] >= 81) && (scores[i] <= 90)) {
    BArray.push(scores[i]);
  } else if ((scores[i] >= 71) && (scores[i] <= 80)) {
    CArray.push(scores[i]);
  } else if ((scores[i] >= 61) && (scores[i] <= 70)) {
    DArray.push(scores[i]);
  } else if ((scores[i] >= 50) && (scores[i] <= 60)) {
    FArray.push(scores[i]); }
}

console.log("There are " + AArray.length + " A's.");
console.log("There are " + BArray.length + " B's.");
console.log("There are " + CArray.length + " C's.");
console.log("There are " + DArray.length + " D's.");
console.log("There are " + FArray.length + " F's.");

for (i = 0; i < scores.length ; i++) {

}

var max = Math.max(...scores);
console.log("The highest grade is " + max);
var low = Math.min(...scores);
console.log("The lowest grade is " + low);
