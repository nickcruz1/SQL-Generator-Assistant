// CREATE MULTIPLE FUNCTIONS FOR DIFFERENT SQL STATEMENTS (PROBABLY WILL USE SWITCH CASES) AND THEN PUT ALL FUNCTIONS INTO ONE "MASTER FUNCTION" AND ASSIGN IT TO THE GENERATE SQL BUTTON...

function generateSQL() {
  let output = document.getElementById("sqlOutput");
  
  output.innerHTML = `<h2>SELECT * FROM [table name]`;
}

function resetSQL() {
  let output = document.getElementById("sqlOutput");
  
  output.innerHTML = "SQL Code Goes Here...";
}
