//creates multiple event handlers for as-you-type validation
function setHandler(domId, handler) {
  let el = document.getElementById(domId);
['change', 'keyup', 'cut'].forEach(event => el.addEventListener(event, handler));
}


//regex validator for email address based on https://stackoverflow.com/questions/46155/validate-email-address-in-javascript
// NOTE: nowhere close to actually validating, but that's complicated (see RFC 2822)
function validateEmail(input) {
  input.type = 'email';
  let result = typeof input.checkValidity == 'function' ? input.checkValidity() : /\S+@\S+\.\S+/.test(input);
  return result;
}

//run email validator function, set checkmark state for email address if it passes
function checkEmail() {
  if (validateEmail(this.value) === true) {
    setAccepted('email-validated');
  } else {
    setUnaccepted('email-validated');
  }
}

//determine if password length is equal or greater to 8, set checkmark state for password
function checkPassword() {
  if (this.value.length >= 8) {
    setAccepted('password-validated');
  } else {
    setUnaccepted('password-validated');
  }
}

//reusable function to add or remove valid class
function setAccepted(spanId) {
  let el = document.getElementById(spanId);
  el.classList.add('valid');
}
function setUnaccepted(spanId) {
  let el = document.getElementById(spanId);
  el.classList.remove('valid');
}

//set event handlers
setHandler('email-form', checkEmail)
setHandler('password-form', checkPassword)
