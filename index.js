// CREATE MULTIPLE FUNCTIONS FOR DIFFERENT SQL STATEMENTS (PROBABLY WILL USE SWITCH CASES) AND THEN PUT ALL FUNCTIONS INTO ONE "MASTER FUNCTION" AND ASSIGN IT TO THE GENERATE SQL BUTTON...
// Create database somewhere in project


<!-- Select Statement Inputs -->
let selectInputs = [
  "How Do You Select Everything from Database", "How To Select Everything from a Database", "How To Select All", "How To Select a column from a database", "How To Select A Column from Database", "How to Select many columns from a database", 
]

<!-- Select Statement Outputs -->
let selectOutputs = [
  "SELECT * FROM [table name]", "SELECT [column name], from [table name]", "SELECT [column name], [column name] from [table name]"
]

<!-- Insert Input Statements -->
let insetInputs = [
  
]

<!-- Insert Output Statements -->
let insertOutputs = [
  
]

<!-- Create Input Statements -->
let createInputs = [
  
]

<!-- Create Output Statements -->
let createOutputs = [
  
]

<!-- Delete Input Statements -->
let deleteInputs = [
  
]

<!-- Delete Output Statements -->
let deleteOutputs = [
  
]

<!-- SQL Input Comments -->
function SQLComments() {
  let askSQLQuestion = document.getElementById("askQuestion");
  let askQuestion = document.getElementById("askQuestion").value.toUpperCase();
  
  let sqlOutput = document.getElementById("sqlOutput");
  
   let commentInputs = [
  "How to write a comment in SQL", "How to create comments", "What do comments in SQL look like"
];

let commentOutputs = [
  "-- This is a comment and /* This is used for a multiline comment */ "
]

// LATER ON ADD ANIMATIONS/STYLE THE BORDER WITH GREEN OR RED FOR A SHORT AMOUNT OF TIME WITH SETTIMEOUT DEPENDING ON INPUT
// ALSO THROW AN ERROR IF NO INPUT IS ENTERED UPON SUBMISSION

switch (askQuestion) {
  case ("HOW TO WRITE A COMMENT IN SQL"):
    sqlOutput.innerHTML = "-- This is a single line comment and /* This is a multi-line comment */";
   askQuestion.value = "";
    break;
  case ("HOW TO CREATE COMMENTS"):
  sqlOutput.innerHTML = "-- This is a single line comment and /* This is a multi-line comment */";
    askQuestion.value = "";
    break;
  case ("WHAT DO COMMENTS IN SQL LOOK LIKE"):
     sqlOutput.innerHTML = "-- This is a single line comment and /* This is a multi-line comment */";
     askQuestion.value = "";
    break;
  case (""):
    askSQLQuestion.style.border = "1px solid red";
    alert("Error. Please Enter a Question");
    break;
  default:
    sqlOutput.innerHTML = "Sorry, please try to be more specific with your question";
     askQuestion.value = "";
}

}

// Make sure when submitting inputs that the toUpperCase() function is added to them... ignore for outputs //
// Might implement RegEx? 


function generateSQL() {
  let output = document.getElementById("sqlOutput");
  
  output.innerHTML = `<h2>SELECT * FROM [table name]`;
}

function resetSQL() {
  let askQuestion = document.getElementById("askQuestion");
  let output = document.querySelector("#sqlOutput");
  
  
  askQuestion.value = "";
  output.innerHTML = "SQL Code Goes Here...";
  askQuestion.style.border = "";
}
