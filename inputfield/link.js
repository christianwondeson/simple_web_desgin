/*
phone is required
email is required
message is required
please fix error*/

var nameError = document.getElementById("nameerror");
var phoneerror = document.getElementById("phoneerror");
var emailerror = document.getElementById("emailerror");
var messageerror = document.getElementById("messageerror");
var submiterror = document.getElementById("submiterror");

function validname() {
  var name = document.getElementById("contact-name");

  if (name.length == 0) {
    nameError.innerHTML = "Name is required";
    return false;
  }
  if (!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)) {
    nameError.innerHTML = "Write full name";
    return false;
  }
  nameError.innerHTML = '<i class="fas fa-check-circle"></i>';
  return true;
}
