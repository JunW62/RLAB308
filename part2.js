let str =
  "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26";
var array2D = [];
let rows = str.split("\n");
rows.forEach((row) => {
  let cell = row.split(",");
  array2D.push(cell);
});
console.log(array2D);
