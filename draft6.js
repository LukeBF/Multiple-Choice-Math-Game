

function questions()
{
  

  const randomNum1 = Math.floor(Math.random() * 25) + 1;
  const randomNum2 = Math.floor(Math.random() * 9) + 1;
  const correctAns = `${randomNum1 + randomNum2}`;

  let secondOption = (Math.floor(Math.random() * 3) + 1) + +correctAns

  let incorrectAns;

  if(incorrectAns == correctAns)
  {
    incorrectAns += 2 
  }
  /*
  const additionQues = prompt(`Enter the letter that represents the correct answer for ${randomNum1} + ${randomNum2}
  A: ${correctAns}
  B: ${secondOption}
  Your Answer: `)
  */
  let values = [randomNum1, randomNum2, correctAns, secondOption]
  return vaues;
}


function main()
{
  let roundNumber = 1, gameLevel = 1;
  let playerAnswer;

   let data = questions();
  console.log(data)

  console.log(`*****Multiple Choice Math Game*****\n
  *****GAME RULES*****\n
  1. Choose the correct multiple choice answer for each math question.\n
  2. For each correct answer, you will advance to the next level in the round and gain ONE (1) points.\n
  3. For each incorrect answer, ONE (1) point will be deducted and you will loose one chance.\n
  4. You have 10 chances to complete the game by answering all the math questions correctly.\n
  GOOD LUCK!"`);

  const playerName = prompt("Please enter your name: ");
  const playerAge = parseInt(prompt("Please enter your age: "));

  if(playerAge >= 8 && playerAge <= 11)
  {
    console.log(`\n${playerName}, welcome to Round ${roundNumber}: Addition\n
    Level ${gameLevel}`);
  }
  else
  {
    console.log("\nSorry, you do not meet the age requirments.");
  }

 
  //questions();

  

   
}
main();