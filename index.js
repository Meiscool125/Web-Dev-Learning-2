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

//random nums
let randomNumber = Math.random();
let min = 50;
let max = 100;
let betweenRandom = Math.round(Math.random() * (max - min)) + min;

// if statements
let sigma = true

if(sigma){
    console.log("Sigma is true");
}
else if(sigma == 18){
    console.log("yes, sigma = 18")
}
else{
    console.log("Sigma is false");
}

//checked property
document.getElementById("submitButton2").onclick = function(){
    let checkbox1 = document.getElementById("checkbox1");
    let option1 = document.getElementById("radiobutton1");
    let option2 = document.getElementById("radiobutton2");
    let option3 = document.getElementById("radiobutton3");
    let sigmaStatusText = document.getElementById("sigmaStatusText")
    let optionChosenText = document.getElementById("optionChosenText")

    if(checkbox1.checked){
        sigmaStatusText.textContent = "Sigma status: Sigma";
    }
    else{
        sigmaStatusText.textContent = "Sigma status: Beta";
    }

    if(option1.checked){
        optionChosenText.textContent = "Option chosen: Option 1";
    }
    else if(option2.checked){
        optionChosenText.textContent = "Option chosen: Option 2";
    }
    else if(option3.checked){
        optionChosenText.textContent = "Option chosen: Option 3";
    }
    else{
        optionChosenText.textContent = "No option chosen";
    }
}