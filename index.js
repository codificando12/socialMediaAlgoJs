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

class timeLine extends User {
    constructor (name, textArea) {
        super(name);
        this.textArea = textArea
        }
}

function login () {
    const username = usernameInput.value;
    const password = passwordInput.value;
    for (let i = 0; i < users.length; i++) {
        if (users[i].name === username && users[i].password === password) {
            sessionStorage.setItem("username", username)
            window.location.replace("welcome.html");
            return;
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

function postTweet () {
   const tweetText = tweet.value;
   const newTweet = new timeLine(helloUser, tweetText);
   userTimeLine.push(newTweet);
   tweet.value = ""
   renderTweets()
    console.log(userTimeLine)
}

function renderTweets () {
    tweetsContainer.innerHTML = "";
    for (i = 0; i < userTimeLine.length; i++) {
        const newTweetContainer = document.createElement("div");
        const tweetAuthor = document.createElement("h4");
        const tweetContent = document.createElement("p");
    
        tweetAuthor.textContent = userTimeLine[i].name
        newTweetContainer.appendChild(tweetAuthor);
    
        tweetContent.textContent = userTimeLine[i].textArea
        newTweetContainer.appendChild(tweetContent);
        tweetsContainer.appendChild(newTweetContainer);
        
    }
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
let userTimeLine = [{name: "Antonio", textArea: "Como"}];

users.push(new User("juan", "hola"));


if (loginButton) {
    loginButton.addEventListener("click", (event) => {
        event.preventDefault();
        login(username, password);
    });
}

if (signinButton) {
    signinButton.addEventListener("click", (event) => {
        event.preventDefault();
        signin();
    });

}

const helloUser = sessionStorage.getItem("username");
const welcomeTitleContainer = document.querySelector(".welcome-content");
welcomeTitle = document.createElement("h1");
welcomeTitleContainer.appendChild(welcomeTitle)
welcomeTitle.textContent = `Welcome back! ${helloUser}`

const tweet = document.querySelector("#tweet");
const postTweetButton = document.querySelector(".post-tweet")
const tweetsContainer = document.querySelector(".tweets-container");

renderTweets()

if (postTweetButton) {
    postTweetButton.addEventListener("click", (event) => {
        event.preventDefault();
        postTweet();
    });

}

