//Variables
const guessedNum = document.getElementById("guessed-number"); //select the number input
const form = document.getElementById("form"); //select the form
const chosen = document.getElementById("chosen"); //select the place to display the number guessed
const genNum = document.getElementById("gen-num"); //select the place to display "Number Generated"
const num = document.getElementById("number"); //select the place to display the number generated
const mess = document.getElementById("message");//select the place to display the winning or losing message

//Function
function generateNumber(){
 chosen.textContent = "You guessed: " + guessedNum.value; //set the "you guessed" message
 genNum.textContent = "Number Generated:"; //set the "number generated" message
 num.textContent = Math.ceil(Math.random()*10); //generate and display the random number
 if (guessedNum.value === num.textContent){
 mess.textContent = "You won!" //display winning message if number guessed and number generated match
} else {
 mess.textContent = "You lost... better luck next time!" //display losing message if number guessed and number generated don't match
};
 form.reset(); //reset the form to empty the input
}