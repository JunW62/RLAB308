// Part 2: Expanding Functionality
// Store the results in a 2D array and cache this array in a variable
let str =
  "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26";

var array2D = [];
let rows = str.split("\n");
rows.forEach((row) => {
  let cell = row.split(",");
  array2D.push(cell);
});
// Part 3: Transforming Data
// Transform the rows into objects
var data = [];
let heading = array2D[0];

for (let i = 1; i < array2D.length; i++) {
  let dataRow = array2D[i];
  let obj = {};
  for (let j = 0; j < dataRow.length; j++) {
    let key = heading[j].toLowerCase();
    obj[key] = dataRow[j];
  }
  data.push(obj);
}
// Part 4: Sorting and Manipulating Data
let dataRemoved = data.pop();
let datadded = data.splice(1, 0, {
  id: "48",
  name: "Barry",
  occupation: "Runner",
  age: "25",
});
data.push({ id: "7", name: "Bilbo", occupation: "None", age: "111" });
console.log(data);

// Calculate the average age of the group
let sumAge = 0;
for (let k = 0; k < data.length; k++) {
  sumAge += parseInt(data[k].age);
}
let avgAge = sumAge / data.length;
console.log("The average age of the group is " + avgAge + ".");
