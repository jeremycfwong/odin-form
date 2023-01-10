
var emailElement = document.getElementById('email');

emailElement.addEventListener('input', (_) => {
    if (emailElement.validity.typeMismatch) {
        emailElement.setCustomValidity('please enter a valid email');
        emailElement.classList.add('wrong');
    } else {
        emailElement.setCustomValidity('');
        emailElement.classList.remove('wrong');
    };
});

// var countryElement = document.getElementById('country')

var zipcodeElement = document.getElementById('zipcode');
zipcodeElement.pattern = `\\d{5,5}`;

var passwordElement = document.getElementById('password');
passwordElement.setAttribute('minlength', '8');

function validateMyForm() {
    
    var cfmPasswordElement = document.getElementById('cfm-password');

    if (passwordElement.value == cfmPasswordElement.value 
        && passwordElement.value != ''){
            alert('high five');
    };
};