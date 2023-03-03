function generateSQL() {
  let output = document.getElementById("sqlOutput");
  
  output.innerHTML = `<h2>SELECT * FROM [table name]`;
}

function resetSQL() {
  let output = document.getElementById("sqlOutput");
  
  output.innerHTML = "SQL Code Goes Here...";
}
