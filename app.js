const symbols = "!@#$%^&*()\\_+~|}{[]:;?><,./-=";
const numbers = "0123456789";
const upperLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerLetters = "abcdefghijklmnopqrstuvwxyz";

let warning = document.getElementById("warning");
let sum = "";
let sum1 = "";

const button = document.querySelector(".btn");
const input = document.getElementById("pw");

button.addEventListener("click", () => {
  randomPW();
  input.value = "";
  input.value = sum1;
  sum = "";
  warning.innerText = "PW will be lost in 6 sec"
});

function randomPW() {
  for (let i = 0; i <= 2; i++) {
    sum += symbols.charAt(Math.floor(Math.random() * symbols.length));
  }
  for (let i = 1; i <= 3; i++) {
    sum += numbers.charAt(Math.floor(Math.random() * numbers.length));
  }
  for (let i = 1; i <= 3; i++) {
    sum += upperLetters.charAt(Math.floor(Math.random() * upperLetters.length));
  }
  for (let i = 1; i <= 2; i++) {
    sum += lowerLetters.charAt(Math.floor(Math.random() * lowerLetters.length));
  }

  sum1 = [...sum];
  sum1 = sum1.sort(() => Math.random() - 0.5).join("");

  setTimeout(() =>{
    warning.innerText = "";
  },2000);
  setTimeout(() =>{
    input.value = "Your PW in here!";
  },6000);
}


  // return sum1;
  // console.log(sum); //?shufflesiz
  // console.log(sum1); //!shuffleli
  
  