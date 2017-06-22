//check if password is >=8 characters
//if yes, document.getElementById('password-valid') and set css class 'valid' (if not present)
//if no, get element by ID and make sure css class 'valid' is not present (alternately, toggle between invalid and valid classes)

// document.getElementById('email').addEventListener('click', function () {
//   let target = document.getElementById('email-validated')
//   if (target.classList.contains('invalid')) {
//    target.classList.remove('invalid');
//    target.classList.add('valid');
//  } else if (target.classList.contains('valid')) {
//    target.classList.remove('valid');
//    target.classList.add('invalid');
//  }
// });
//
// function checkPasswordLength() {
//
// }

function setHandler(domId, handler) {
  let el = document.getElementById(domId);
['change', 'keyup', 'cut'].forEach(event => el.addEventListener(event, handler));
}

function checkEmail() {
  console.log('email: ' + this.value);
}
function checkPassword() {
  console.log('password: ' + this.value)
}

setHandler('email-form', checkEmail)
setHandler('password-form', checkPassword)
