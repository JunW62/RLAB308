// my old code in ALAB

// var str =
//   "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,QuizMaster,58\n98,Bill,Doctor's Assistant,26";
// var cells = [];
// cell = "";
// for (i = 0; i < str.length; i++) {
//   if (str[i] == "," || str[i] == "\n") {
//     cells.push(cell);
//     cell = "";
//     continue;
//   }
//   cell += str[i];
// }
// cells.push(cell);
// for (i = 0; i < cells.length / 4; i++) {
//   console.log(
//     cells[4 * i],
//     cells[4 * i + 1],
//     cells[4 * i + 2],
//     cells[4 * i + 3]
//   );
// }

// Part 1: Refactoring Old Code

let str =
  "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26";
var cells = [];
let rows = str.split("\n");
rows.forEach((row) => {
  let cell = row.split(",");
  cells.push(cell);
});
cells.forEach((cell) => console.log(cell[0], cell[1], cell[2], cell[3]));
