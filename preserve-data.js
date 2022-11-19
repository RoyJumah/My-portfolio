const myDetails = document.getElementById('myform');
const myname = document.getElementById('full-name');
const email = document.getElementById('email');
const message = document.getElementById('message');
const getLocalStorage = localStorage.getItem('userProvidedInfo');
// Load to each contact form fields if there is pre-saved local storage data.
if (getLocalStorage) {
  const dataSave = JSON.parse(getLocalStorage);
  myname.value = dataSave.name;
  email.value = dataSave.email;
  message.value = dataSave.message;
}

document.querySelectorAll('input, textarea').forEach((input) => {
  input.addEventListener('input', (event) => {
    event.preventDefault();
    // Calling input values
    const nameData = document.querySelector('#full-name').value;
    const emailData = document.querySelector('#email').value;
    const msgData = document.querySelector('#message').value;

    // Store values in object;
    const infoProvided = {
      name: nameData,
      email: emailData,
      message: msgData,
    };

    localStorage.setItem('userProvidedInfo', JSON.stringify(infoProvided));
  });
});

// make the form staying to the current load, for visualization or testing purpose
myDetails.addEventListener('submit', (e) => {
  e.preventDefault();
});