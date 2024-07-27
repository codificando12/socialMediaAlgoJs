/* 
Requiremets:

1 - The user must be able to enter the username and password.
2 - The sistem should validate the username and password.
3 - If the username and password are correct, the system must show a welcome mensage.
4 - If the username and password are incorrect, the system should show an error mensage

*/
class User {
    constructor (name, password) {
        this.name = name;
        this.password = password;
    }
}

function login () {
    const username = usernameInput.value;
    const password = passwordInput.value;

    for (let i = 0; i < users.length; i++) {
        if (users[i].name === username && users[i].password === password) {
            window.location.replace("welcome.html");
            break;
        }
    }
}
const usernameInput = document.querySelector("#username");
const passwordInput = document.querySelector("#password");
const loginButton = document.querySelector(".login-button");

let users = [];

users.push(new User("juan", "hola"))

loginButton.addEventListener("click", login)