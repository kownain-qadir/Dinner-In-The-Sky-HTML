document.getElementById("submitbutton").onclick = A;

function A() {
  // for storing input values in variables
  var name = document.getElementById("inpname").value;
  var email_id = document.getElementById("inpemail").value;
  var contact = document.getElementById("inpcontact").value;
  var numbguests = document.getElementById("inpguests").value;
  var date_time = document.getElementById("datetime").value;
  var classtype = document.getElementById("category").value;

  if (name == '' || email_id == '' || contact == '' || numbguests == '' || date_time == defaultStatus) {
    alert("Field can't be empty!");
    return false;
  } else if (numbguests > 40) {
    alert("Only 40 seats are available and you have desired " + String(numbguests) + ", " + String(numbguests - 40) + " people(s) won't be acommodated!");
    return false;
  } else {
    alert("Registered successfully! your desired date and time is " + String(date_time) + ", and number of seats booked are " + String(numbguests) + " in " + String(classtype) + " class.");
    return true;
  }
}
