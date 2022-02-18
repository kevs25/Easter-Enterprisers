//redirect to home page if user logged in
window.onload = () => {
    if(sessionStorage.user){
        user = JSON.parse(sessionStorage.user);
        if(compareToken(user.authToken, user.email)){
            location.replace('/');
        }
    }
}


const loader = document.querySelector('.loader');

//select inputs
const submitBtn = document.querySelector('.submit-btn');
const name = document.querySelector('#name') || null;
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const number = document.querySelector('#number') || null;
const tac = document.querySelector('#terms-and-cond') || null;

submitBtn.addEventListener('click', () => {
    if(name != null)
    { //signup page
        if(name.value.length < 3){
            showAlert('Name should be three letters');
        }
        else if(!email.value.length)
        {
            showAlert('enter your email');
        }
        else if(password.value.length < 8){
            showAlert('Password should be 8 characters');
        }
        else if(!number.value.length){
            showAlert('enter your number');
        }
        else if(!Number(number.value) || number.value.length<10 || number.value.length>10){
            showAlert('Invalid number, Please enter a valid number');
        }
        else if(!tac.checked){
            showAlert('You must to our terms and conditions');
        }
        else{
            //submit the form
            loader.style.display = 'block';
            sendData('/signup', {
                name: name.value,
                email: email.value,
                password: password.value,
                number: number.value,
                tac: tac.checked 
            })
        }
    }
    else //login page
    {
        if(!email.value.length){
            showAlert('Please enter the Email')
        }
        else if(!password.value.length){
            showAlert('please enter the password')
        }
        else{
            loader.style.display = 'block';
            sendData('/login', {
                email: email.value,
                password: password.value,
            })
        }
    }
})
//send data function
