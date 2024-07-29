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
        else if (users[i].name !== username || users[i.password !== password]) {
            const wrongUserPass = document.createElement("div");
            wrongUserPass.textContent = "Wrong Username or Password";
            form.appendChild(wrongUserPass);
        }
    }
}

function signin () {
    const username = newUsername.value;
    const password = newPassword.value;
    const repassword = newRePassword.value;
    const error = document.createElement("div");

    for (let i = 0; i < users.length; i++) {
        
        if (users[i].name === username) {
            error.textContent = "Choose another user name";
            siginForm.appendChild(error);
            break;
        } else if (password !== repassword ) {
            error.textContent = "Password has to match";
            siginForm.appendChild(error);
            break;   
        } else {
            const newUser = new User(username, password);
            users.push(newUser);
            newUsername.value = "";
            newPassword.value = "";
            newRePassword.value = "";
            error.textContent = "User created, go to log in";
            siginForm.appendChild(error)
            break;
        }
    }
    console.log(users)
}



const form = document.querySelector("form");
const usernameInput = document.querySelector("#username");
const passwordInput = document.querySelector("#password");
const loginButton = document.querySelector(".login-button");

const siginForm = document.querySelector(".sigin-form");
const newUsername = document.querySelector("#new-username");
const newPassword = document.querySelector("#new-password");
const newRePassword = document.querySelector("#new-repassword");
const signinButton = document.querySelector(".signin-button");

let users = [];

users.push(new User("juan", "hola"));
if (loginButton) {
    loginButton.addEventListener("click", (event) => {
        event.preventDefault();
        login();
    });
}

if (signinButton) {
    signinButton.addEventListener("click", (event) => {
        event.preventDefault();
        signin();
    });

}



