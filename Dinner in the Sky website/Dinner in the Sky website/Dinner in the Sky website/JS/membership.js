document.getElementById("submitbutton").onclick = B;

function B() {
  // for storing input values in variables
  var name = document.getElementById("inpname").value;
  var email_id = document.getElementById("inpemail").value;
  var contact = document.getElementById("inpcontact").value;
  var cnic = document.getElementById("inpcnic").value;
  var gendertype = document.getElementById("inpgender").value;

  if (name == '' || email_id == '' || contact == '' || cnic == '' || gendertype == "0") {
    alert("Field can't be empty!");
    return false;
  } else if (gendertype == "male") {

    console.log("Name = " + name);
    console.log("Gender = " + gendertype);
    console.log("Email Address = " + email_id);
    console.log("Contact = " + contact);
    console.log("CNIC number = " + cnic);

    msg = "Congratulations Mr. " + name.toUpperCase() + " on becoming our member! Data you have given is as follows:-\n";
    msg += "Name = " + name + "\n";
    msg += "Gender = " + gendertype + "\n";
    msg += "Email Address = " + email_id + "\n";
    msg += "Contact = " + contact + "\n";
    msg += "CNIC Number = " + cnic + "\n";

    alert(msg);
    return true;
  } else {

    console.log("Name = " + name);
    console.log("Gender = " + gendertype);
    console.log("Email Address = " + email_id);
    console.log("Contact = " + contact);
    console.log("CNIC number = " + cnic);

    msg = "Congratulations Miss " + name.toUpperCase() + " on becoming our member! Data you have given is as follows:-\n";
    msg += "Name = " + name + "\n";
    msg += "Gender = " + gendertype + "\n";
    msg += "Email Address = " + email_id + "\n";
    msg += "Contact = " + contact + "\n";
    msg += "CNIC Number = " + cnic + "\n";

    alert(msg);
    return true;
  }
}
