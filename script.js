const usernameEl = document.querySelector('#username');
const emailEl = document.querySelector('#email');
const password = document.querySelector('#password');
const comfirmPasswordEl = document.querySelector('#confirm-password');
const form = document.querySelector('#signup');

form.addEventListener('submit', function(e)){
    e.preventDefault(); 

    let isUsernameValid = checkUsername(),
        isEmailValid = checkEmail(),
        isPasswordValid = checkPassword(),
        isConfirmPassword = checkConfirmPassword();
    let isFormValid = isUsernameValid
    isEmailValid && isPasswordValid && isConfirmPassword;

    if(isFormValid){
        
    }
}