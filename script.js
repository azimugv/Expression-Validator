var email = document.getElementById('email');

email.addEventListener('click', validateEmail);

function validateEmail() {
    var userEmail = prompt("Enter Your Email: ");
    var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (re.test(userEmail)) {
        alert("Email is valid");
        return ;
    }
    else {
        alert("Email is not valid");
    }
}



var phone = document.getElementById('phone');

phone.addEventListener('click', validatePhone);

function validatePhone() {
    var userPhone = prompt("Enter Your Phone Number: ");
    // Phone Number
// 01717888888 +8801717888888 8801717888888
    var re = /^01[0-9]{9}$/;
    if (re.test(userPhone)) {
        alert("Phone Number is valid");
        return ;
    }
    else {
        alert("Phone Number is not valid");
    }
}


var postcode = document.getElementById('postcode');

postcode.addEventListener('click', validatePostCode);

function validatePostCode() {
    var userPostcode = prompt("Enter Your Post Code: ");
    var re = /^\d{4}$/;
    if (re.test(userPostcode)) {
        alert("Post Code is valid");
        return ;
    }
    else {
        alert("Post Code  is not valid");
    }
}








