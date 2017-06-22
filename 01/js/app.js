//sets input event handlers for as-you-type validation
function setHandler(domId, handler) {
  let el = document.getElementById(domId);
['change', 'keyup', 'cut'].forEach(event => el.addEventListener(event, handler));
}


//based on https://stackoverflow.com/questions/46155/validate-email-address-in-javascript
function validateEmail(input) {
  input.type = 'email';
  var result = typeof input.checkValidity == 'function' ? input.checkValidity() : /\S+@\S+\.\S+/.test(input);
  return result;
}

//determine if email input even vaguely resembles an actual address - not really validating (see RFC 2822)
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

function setAccepted(spanId) {
  let el = document.getElementById(spanId);
  el.classList.add('valid');
}
function setUnaccepted(spanId) {
  let el = document.getElementById(spanId);
  el.classList.remove('valid');
}


setHandler('email-form', checkEmail)
setHandler('password-form', checkPassword)
