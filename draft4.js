
//create a numbers object to generate and assign random numbers
const numbers =
{
  firstNum: Math.floor(Math.random()* 25) + 1,
  secondNum: Math.floor(Math.random()* 9) + 1
}


function main()
{
  let roundNumber = 1, gameLevel = 1;


  console.log("*****Multiple Choice Math Game*****\n");
  console.log("*****Game Rules*****\n")

  console.log("Choose the correct multiple choice answer for each math question.\n\nFor each correct answer, you will advance to the next level in the round and gain three (3) points.\n\nFor each incorrect answer, one (1) point will be deducted and you will loose one chance.\n\nYou have 10 chances in total to complete the game by answering all the math questions correctly.\n\nGOOD LUCK!")

  const name = prompt("\nPlease enter your first name");
  const age = parseInt(prompt("\nPlease enter your age"));

  if(age >= 8 && age <= 11)
  {
    console.log(`\n${name}, welcome to the Add Round\n\nRound ${roundNumber} - Level ${gameLevel}`);
  }
  else
  {
    console.log("Sorry, you do not meet the age requirments.");
  }

  const playerAns = prompt(`Please enter the letter which represents the correct answer for ${numbers.firstNum} + ${numbers.secondNum}`)

   

}
main();