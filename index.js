document.getElementById("firstH1").textContent = "Please sign in."

//let x = 100 
//console.log(`X is equal to ${x}`)

//EASY WAY TO ACCEPT USER INPUT
//let username = window.prompt("What is your username?");

//PROFESSIONAL WAY TO ACCEPT USER INPUT

let username;
let password;
document.getElementById("submitButton1").onclick = function(){
    username = document.getElementById("usernameInputBox1").value;
    password = document.getElementById("passwordInputBox1").value;
    console.log(`Username: ${username} Password: ${password}`);
    document.getElementById("firstH1").textContent = `Welcome, ${username}!`;
}

//type conversion
let age = "17"; //as though it was user input
age = Number(age);

//constants
const constantVar = "immortal";