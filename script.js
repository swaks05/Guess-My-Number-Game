'use strict';

//actual number
let myGuess = Math.trunc(Math.random() * 20) + 1;
let score = 20;  //initial score
let highScore = 0;  //overall high score

let scoreDisplay = document.querySelector(".score");

//select where the event is happening- check button
document.querySelector(".check").addEventListener("click", function () 
{
  const userGuess = Number(document.querySelector(".guess").value);

  if (!userGuess)   //kuch value hi ni daali
  {
    document.querySelector(".message").textContent = "⛔ No number!";
  }
  else if (userGuess === myGuess)   //player wins
  {
    document.querySelector(".message").textContent = "🎉 Correct Number!";
    score--;
    scoreDisplay.textContent = score;

    document.querySelector(".number").textContent = myGuess;

    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";

    highScore = Math.max(highScore, score);
    document.querySelector(".highscore").textContent = highScore;
  } 
  else if (userGuess !== myGuess)  //when guess is different
  {
    if(score > 1)
    {
      document.querySelector(".message").textContent = userGuess > myGuess ? "📈 Too High!" : "📉 Too Low!";
      score--;
      scoreDisplay.textContent = score;
    }
    else
    {
      document.querySelector(".message").textContent = "😔 You lost the game, Play Again!";
      score = 0;
      scoreDisplay.textContent = score;
    }
  } 
  else //wese ye naubat ayegi ni bcuz of html
  {
    document.querySelector(".message").textContent = "⛔ Invalid Input Type ⛔";
  }
});

//restore initial consitions so we can play game without reloading the broswer
document.querySelector(".again").addEventListener("click", function() 
{
    score = 20;
    scoreDisplay.textContent = score;  //initially score 0

    //new secret number
    myGuess = Math.trunc(Math.random() * 20) + 1;

    document.querySelector(".number").textContent = "?";
    document.querySelector(".message").textContent = "Start guessing...";
    document.querySelector("body").style.backgroundColor = "#222";
    document.querySelector(".number").style.width = "15rem";
    document.querySelector(".guess").value = "";
});
