const inputButton = document.querySelector("#inputButton");
const inputName = document.querySelector("#inputName");
const inputEmail = document.querySelector("#inputEmail");
const inputPassword = document.querySelector("#inputPassword");
    



inputButton.addEventListener("click", (event) =>{
    event.preventDefault();
    let user = inputName.value.trim();
    let email = inputEmail.value.trim();
    let password = inputPassword.value.trim();

    if (!user || !email || !password){
        alert("Changes applied bitch");
        navigator.vibrate(200, 100, 200);
    } else (
        alert("You've been registered successfully")
    )
})