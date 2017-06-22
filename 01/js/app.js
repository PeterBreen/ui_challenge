function setHandler(domId, handler) {
  let el = document.getElementById(domId);
['change', 'keyup', 'cut'].forEach(event => el.addEventListener(event, handler));
}

function checkEmail() {
}
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
