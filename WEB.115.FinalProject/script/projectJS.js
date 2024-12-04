const mealData = [];

//Submitting, Creating, and Printing out the Form
const mealTable = document.getElementById("mealTable")
const mealCategory = document.getElementById("mealCategory");
function mealSubmit() {

   const row = mealTable.insertRow(1);
   const rowMealName = row.insertCell(0);
   const rowMealCategory = row.insertCell(1);
   const rowMealDate = row.insertCell(2);
   const rowMealAction = row.insertCell(3);

   createButton();
   rowMealName.innerHTML = mealName.value;
   rowMealCategory.innerHTML = mealCategory.value;
   rowMealDate.innerHTML = mealDate.value;

   //Storing data
   mealData.push({name: mealName.value, category: mealCategory.value, date: mealDate.value});
};

function createButton() {
   let td = document.querySelectorAll("td")[3];
   let btnDelete = document.createElement("button");
   btnDelete.type = "button";
   let btnUpdate = document.createElement("button");
   btnUpdate.type = "button";
   btnDelete.innerHTML = "Delete";
   btnDelete.setAttribute("onclick", "deleteMeal(this)");
   td.appendChild(btnDelete);
   btnUpdate.innerHTML = "Update";
   btnUpdate.setAttribute("onclick", "updateMeal(this)");
   btnUpdate.setAttribute("style", "margin-left: 5px;");
   td.appendChild(btnUpdate);
}

// Element is sleepy & holding onto whats in the parenthesis -- it will use it once the .setAttribute changes it to deleteMeal(this)
// then, once it's changed, it will do what is in the parenthesis (in this case, either removing or updating depending on button)
function deleteMeal(elem) {
   elem.parentElement.parentElement.remove();
}

function updateMeal(elem) {
   const mealName = prompt("Re-enter The Name Of Your Meal");

   if (mealName !== "") {
      elem.parentElement.parentElement.children[0].innerText = mealName;
   }
}


// Script for window popup

const insertEmail = document.getElementById('insertEmail');
const mealForm = document.getElementById('mealForm');

const mealregex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;

mealForm.addEventListener('submit', function (event) {
   // Don't want the input to be cleared
   event.preventDefault();

   if (!mealregex.test(insertEmail.value)) {
      console.log('invalid email');
      window.alert(insertEmail.value + " is not recognized. Sorry, but we can't send this planner without a valid email.");
      return;
   }

   firstName = document.getElementById("firstname").value;
   lastName = document.getElementById("lname").value;

    // Start of the html including the window name
    myText = ("<html><head><link rel='stylesheet' href='css/css.css'>\n</head>\n<header>\n<title>Your Meal Plan</title>\n</header>\n<body>\n");

    // First and last name appear here with intro text to the chart
   myText += ("<h1>Hello " + firstName + " " + lastName + ", this is the start of your Fitness Journey!</h1><br><br>");

   myMeal = document.getElementById("mealCategory").value;
   mealName = document.getElementById("mealName").value;

   // We add a new table with the stored data but no action column
   tableContents = "<table class='table'><thead><tr><th>Meal Name</th><th>Category</th><th>Date</th></tr></thead><tbody>";
   mealData.forEach(meal => {
      tableContents += "<tr><td>" + meal.name + "</td>" + "<td>" + meal.category + "</td>" + "<td>" + meal.date + "</td></tr>";
   });
   tableContents += "</tbody></table>";
   myText += tableContents;

   myText += ("<p><br><button onclick='window.print();'>Print</button></p>");
   
   // End of the html
   myText += ("</body>\n</html>");
   
   // Window popup and size
   flyWindow = window.open('about:blank', 'myPop', 'width=600,height=700,left=200,top=200');
   
   // This writes the text once everything has loaded
   flyWindow.document.write(myText);
});





