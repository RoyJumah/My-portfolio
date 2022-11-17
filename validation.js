function containsUppercase(str) {
  return /[A-Z]/.test(str);
}
function validateForm() {
  let x = document.forms["myForm"]["contact_email"].value;
  if (containsUppercase(x)) {
    document.getElementById("err_info").innerHTML =
      "Email should not contain a capital letter!";
    return false;
  }
}
