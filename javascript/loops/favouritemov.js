let guess =prompt("enter movie name");
let favmovie ="RRR";
while(guess != favmovie && guess != "quit"){
    guess = prompt("wrong guess please try again...");
}
if (guess == favmovie){
   guess= prompt("correct guess. enter quit to exit this game");
}
if (guess == "quit"){
    guess = prompt("exited the game");
}