let str =
  "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26";
var cells = [];
let rows = str.split("\n");
rows.forEach((row) => {
  let cell = row.split(",");
  cells.push(cell);
});
cells.forEach((cell) => console.log(cell[0], cell[1], cell[2], cell[3]));
