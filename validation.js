const form = document.getElementById('form');

function containsUppercase(str) {
  return /[A-Z]/.test(str);
}

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const emailEntered = document.forms.myForm.contact_email.value;
  if (containsUppercase(emailEntered)) {
    document.getElementById('err_info').innerHTML = 'Email should not contain a capital letter!';
  }
  return false;
});
