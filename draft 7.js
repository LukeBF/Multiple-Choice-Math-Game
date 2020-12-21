function questions(number)
{
  
//console.log(number)
  const randomNum1 = Math.floor(Math.random() * 25) + 1;
  const randomNum2 = Math.floor(Math.random() * 9) + 1;
  
  let correctAns;


    if(number === "add")
    {

        correctAns = randomNum1 + randomNum2;
    }
    else if(number === "minus")
    {
        correctAns = randomNum1 - randomNum2;
        // if()
        // {

        // }
    }
    else if(number === "divide")
    {
        correctAns = randomNum1 / randomNum2;
    }

    let secondOption = (Math.floor(Math.random() * 3) + 1) + correctAns

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
  return values;
}


function main()
{
  let roundNumber = 1, gameLevel = 1;
  let playerAnswer;
  let chances = 4;
  let correctAnswers = 0;

   
  //console.log(data)

  console.log(`*****Multiple Choice Math Game*****\n
  *****GAME RULES*****\n
  1. Choose the correct multiple choice answer for each math question.\n
  2. For each correct answer, you will advance to the next level in the round and gain ONE (1) points.\n
  3. For each incorrect answer, ONE (1) point will be deducted and you will loose one chance.\n
  4. You have 10 chances to complete the game by answering all the math questions correctly.\n
  GOOD LUCK!"`);

  const playerName = prompt("Please enter your name: ");
  const playerAge = parseInt(prompt("Please enter your age: "));

  let showOperation;

  if(playerAge >= 8 && playerAge <= 11)
  {
    console.log(`\n${playerName}, welcome to Round ${roundNumber}: Addition\n
    Level ${gameLevel}`);
  }
  else
  {
    console.log("\nSorry, you do not meet the age requirments.");
  }

  do
  {
    let data;

    if(gameLevel <= 4)
    {
        data = questions("add")
        showOperation = "+"
    }
    else if(gameLevel > 4 && gameLevel <= 8)
    {
        data = questions("minus")
        showOperation = "-"
    }
    else
    {
        data = questions("divide")
        showOperation = "/"
    }

    /*
    const additionQues = prompt(`Level: ${gameLevel} ${correctAnswers} Enter the letter that represents the correct answer for ${data[0]} + ${data[1]}
    A: ${data[2]}
    B: ${data[3]}
    Your Answer: `)
    */

    let randomNum3 = Math.floor(Math.random() * 2) + 1;

    let additionQues;

    if(randomNum3 === 1)
    {
        additionQues = prompt(`L:${gameLevel} A:${correctAnswers} C: ${chances} Enter the letter that represents the correct answer for ${data[0]} ${showOperation} ${data[1]}
        A: ${data[2]}
        B: ${data[3]}
        Your Answer: `)
    }
    else
    {
        additionQues = prompt(`L:${gameLevel} A:${correctAnswers} C: ${chances} Enter the letter that represents the correct answer for ${data[0]} ${showOperation} ${data[1]}
        A: ${data[3]}
        B: ${data[2]}
        Your Answer: `)
    }

    console.log(additionQues)

    if(additionQues === "A" && randomNum3 == 1 || additionQues === "B" && randomNum3 == 2)
    {
        gameLevel ++
        correctAnswers ++
    }
    else
    {
        gameLevel ++;
        chances --;
    }
    
    // if(additionQues === "B" && randomNum3 == 2)
    // {
    //     gameLevel ++
    //     correctAnswers ++
    // }
    // else
    // {
    //     chances --;
    // }


    if(chances <= 0 || correctAnswers >= 10 )
    {
        break;
    }

    console.log(`${gameLevel} ${correctAnswers}`)

  }while(chances > 0 || correctAnswers < 10)
 
  //questions();

  

   
}
main();
