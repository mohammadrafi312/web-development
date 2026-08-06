let max = Number(prompt("Enter the maximum range:"));
let random = Math.floor(Math.random()* max ) + 1;
console.log(random);

let guess =prompt("enter the random number ");
console.log(guess);
while(true){
    if (guess === "quit") {
    console.log("You quit the game.");
    break;
    }else if(guess == random){
        guess =prompt("🎉 Congratulations! You guessed correctly.");
        // break;
    }else{
        guess =prompt("wrong answer try again!");
    }
}
