const form = document.getElementById("form");
const username = document.getElementById("username");
const password = document.getElementById("password");
const check = document.getElementById("check");
const toogle = document.getElementById("toogle");

form.addEventListener('submit', e=>{
    e.preventDefault();

    validateInputs();
});

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success');
}

const setSuccess = element =>{
     const inputControl = element.parentElement;
     const errorDisplay = inputControl.querySelector('.error');

     errorDisplay.innerText = '';
     inputControl.classList.add('success')
     inputControl.classList.remove('error');
};


const validateInputs = () => {
    const usernameValue = username.value.trim();
    const passwordValue = password.value.trim();
    const checkValue = check.value.trim();
    const toogleValue = toogle.value.trim();


if(usernameValue === '') {
   setError(username, 'Username is required');
} else {
setSuccess(username);
}



if(passwordValue === '') {
    setError(password, 'Password is required');
}else if(passwordValue.length < 8 ) {
    setError(password, 'Password must be at least 8 character.')
}else { 
    setError(password);
}


if(checkValue === '') {
    setError(check, 'Check is required');
 } else {
 setSuccess(check);
 }

 if(toogleValue === '') {
    setError(toogle, 'Toogle is required');
 } else {
 setSuccess(toogle);
 }

};



