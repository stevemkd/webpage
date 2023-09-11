const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');
const firstname=document.getElementById('fname');
const lastname=document.getElementById('lname');
const address=document.getElementById('address');
const phno=document.getElementById('phone');
const age=document.getElementById('age');
const dob=document.getElementById('dob');
const gender=document.getElementById('gender');
const state=document.getElementById('state');
const city=document.getElementById('city');


form.addEventListener('submit', e => {
    e.preventDefault();

    validateInputs();
});

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success')
}

const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};

const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

const validateInputs = () => {
    const username1 = username.value.trim();
    const email1 = email.value.trim();
    const password1 = password.value.trim();
    const password02 = password2.value.trim();
    const n1= firstname.value.trim();
    const n2= lastname.value.trim();
    const age1=age.value.trim();
    const address1=address.value.trim();
    const dob1=dob.value.trim();
    const gen=gender.value.trim();
    const phno1=phno.value.trim();
    const state1=state.value.trim();
    const city1=city.value.trim();


    if(dob1 === '') {
        setError(dob, 'date of birth is required');
    } else {
        setSuccess(dob);
    }
    if(state1 === '') {
        setError(state, 'state name is required');
    } else {
        setSuccess(state);
    }
    if(city1 === '') {
        setError(city, 'city name is required');
    } else {
        setSuccess(city);
    }
    if(gen === '') {
        setError(gender, 'gender is required');
    } else {
        setSuccess(gender);
    }
    if(phno1 === '') {
        setError(phno, 'phone no is required');
    } else {
        setSuccess(phno);
    }


    if(n2 === '') {
        setError(lastname, 'first name is required');
    } else {
        setSuccess(lastname);
    }
    if(age1=== '') {
        setError(age, 'last name is required');
    } else {
        setSuccess(age);
    }
    if(address1 === '') {
        setError(address, 'address is required');
    } else {
        setSuccess(address);
    }

    if(username1 === '') {
        setError(username, 'Username is required');
    } else {
        setSuccess(username);
    }
   

    if(email1 === '') {
        setError(email, 'Email is required');
    } else if (!isValidEmail(emailValue)) {
        setError(email, 'Provide a valid email address');
    } else {
        setSuccess(email);
    }

    if(password1 === '') {
        setError(password, 'Password is required');
    } else if (passwordValue.length < 8 ) {
        setError(password, 'Password must be at least 8 character.')
    } else {
        setSuccess(password);
    }

    if(password02 === '') {
        setError(password2, 'Please confirm your password');
    } else if (password2Value !== passwordValue) {
        setError(password2, "Passwords doesn't match");
    } else {
        setSuccess(password2);
    }
    if(n1 === '') {
        setError(firstname, 'first name is required');
    } else {
        setSuccess(firstname);
    }

};
