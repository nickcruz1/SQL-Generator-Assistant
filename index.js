// CREATE MULTIPLE FUNCTIONS FOR DIFFERENT SQL STATEMENTS (PROBABLY WILL USE SWITCH CASES) AND THEN PUT ALL FUNCTIONS INTO ONE "MASTER FUNCTION" AND ASSIGN IT TO THE GENERATE SQL BUTTON...

<!-- Select Statement Inputs -->
let selectInputs = [
  "How Do You Select Everything from Database", "How To Select Everything from a Database", "How To Select All", "How To Select a column from a database", "How To Select A Column from Database", "How to Select many columns from a database", 
]

function generateSQL() {
  let output = document.getElementById("sqlOutput");
  
  output.innerHTML = `<h2>SELECT * FROM [table name]`;
}

function resetSQL() {
  let output = document.getElementById("sqlOutput");
  
  output.innerHTML = "SQL Code Goes Here...";
}
