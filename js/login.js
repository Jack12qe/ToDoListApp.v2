const loginForm = document.querySelector("#login-form");
const loginInput = loginForm.querySelector("input");
const greeting = document.querySelector("#greeting");
const logoutForm = document.querySelector("#logout");

const HIDDEN_CLASS = "hidden";
const USERNAME_LOGIN = "username";

/*
    function section
*/

function loginListner(event) {
    event.preventDefault();
    const username = loginInput.value;
    loginInput.value = "";
    loginForm.classList.add(HIDDEN_CLASS);
    saveIdInStorage(username);
    printLogin(username);
    logoutForm.classList.remove(HIDDEN_CLASS);
}

function logoutListner(event) {
    event.preventDefault();
    logoutForm.classList.add(HIDDEN_CLASS);
    localStorage.removeItem(USERNAME_LOGIN);
    greeting.innerText = "";
    greeting.classList.add(HIDDEN_CLASS);
    loginForm.classList.remove(HIDDEN_CLASS);
}

function printLogin(username) {
    greeting.innerText = `Welcome ${username}, good to see you!!`;
    greeting.classList.remove(HIDDEN_CLASS);
}

function saveIdInStorage(username) {
    localStorage.setItem(USERNAME_LOGIN, username);
}

/*
    execute section
*/

const savedUsername = localStorage.getItem(USERNAME_LOGIN);
logoutForm.addEventListener("submit", logoutListner);

if (savedUsername == null) {
    loginForm.classList.remove(HIDDEN_CLASS);
    loginForm.addEventListener("submit", loginListner);
} else {
    printLogin(savedUsername);
    logoutForm.classList.remove(HIDDEN_CLASS);
}
