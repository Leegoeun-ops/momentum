const askform = document.querySelector(".js-ask-form"),
    input = askform.querySelector("input"),
    greeting = document.querySelector(".js-greeting");

function saveCurrentUser(text) {
    localStorage.setItem(USER_LS, text);
}

function userSubmitHandler(event) {
    event.preventDefault();
    const currentValue = input.value;
    printGreeting(currentValue);
    saveCurrentUser(currentValue);
}

function askName() {
    askform.classList.add(SHOW_CN);
    greeting.classList.remove(SHOW_CN);
    ///지우기
    askform.addEventListener("submit", userSubmitHandler);
}

function printGreeting(text) {
    askform.classList.remove(SHOW_CN);
    greeting.classList.add(SHOW_CN);
    greeting.innerText = `Welcome to momentum page, ${text}`;
}

const USER_LS = "currentUser",
    SHOW_CN = "showing";

function loadCurrentUser() {
    const user = localStorage.getItem(USER_LS);
    if (user === null) {
        askName();
    } else {
        printGreeting(user);
    }
}

function init() {
    loadCurrentUser();
}

init();