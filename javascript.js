window.onload = function() {
  document.querySelector('#firstName').value = '';
  document.querySelector('#lastName').value = '';
  document.querySelector('#email').value = '';

  }


function checkInput(str, regex){
    let check=true;
        console.log(str.length);
        if (str.match(regex)){
            console.log("right value");
            return check=true;
        }
        else{
            console.log("wrong value");
            return check=false;
        }
}


let firstName = document.querySelector("#firstName");
firstName.addEventListener("input", (event) =>{
    let regex=/^[A-Za-z- ]+$/;
    let check=true;
    event.preventDefault();
    console.log(firstName.value);
    check = checkInput(firstName.value, regex);
    if (check === false)
        firstName.style.border="2px solid red";
    else
        firstName.style.border="2px solid #99FF66";
});

let lastName = document.querySelector("#lastName");
lastName.addEventListener("input", (event) =>{
    let regex=/^[A-Za-z- ]+$/;
    let check=true;
    event.preventDefault();
    check = checkInput(lastName.value, regex);
    if (check === false)
        lastName.style.border="2px solid red";
    else
        lastName.style.border="2px solid #99FF66";
});

let email = document.querySelector("#email");
email.addEventListener("input", (event) =>{
    let regex=/[@]/;
    let check=true;
    event.preventDefault();
    check = checkInput(email.value, regex);
    if (check === false)
        email.style.border="2px solid red";
    else
        email.style.border="2px solid #99FF66";
});

let phoneNumber = document.querySelector("#phoneNumber");
phoneNumber.addEventListener("input", (event) =>{
    let regex=/^[0-9]+$/;
    let check=true;
    event.preventDefault();
    check = checkInput(phoneNumber.value, regex);
    if (check === false)
        phoneNumber.style.border="2px solid red";
    else
        phoneNumber.style.border="2px solid #99FF66";
});
let password = document.querySelector("#password");
password.addEventListener("input", (event) =>{
    let regex=/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;
    let check=true;
    event.preventDefault();
    check = checkInput(password.value, regex);
    if (check === false)
        password.style.border="2px solid red";
    else
        password.style.border="2px solid #99FF66";
});
let confirmPassword = document.querySelector("#confirmPassword");
confirmPassword.addEventListener("input", (event) =>{
    let regex=/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;
    let check=true;
    event.preventDefault();
    check = checkInput(confirmPassword.value, regex);
    if (check === false && password.value != confirmPassword.value)
        confirmPassword.style.border="2px solid red";
    else
        confirmPassword.style.border="2px solid #99FF66";
});