let randomNum1, randomNum2
function generateFirstRandomNumber()
{
  randomNum1 = Math.floor(Math.random() * 25) + 1;
  return randomNum1;
}


function generateSecondRandomNumber()
{
  randomNum2 = Math.floor(Math.random() * 9) + 1;
  return randomNum2;
}

function getQuestionValues(operator)
{
    let correctAnswer;

    if(operator === "add")
    {
        correctAns = generateFirstRandomNumber() + generateSecondRandomNumber();
    }
    else if(operator === "minus")
    {
        //correctAns = randomNum1 - randomNum2;
        correctAns = generateFirstRandomNumber() - generateSecondRandomNumber();

        //CHECK IF 1ST NUMBER IS LARGER THAN 2ND NUMBER
        while(randomNum1 < randomNum2)
        {
          generateFirstRandomNum();
        }
    }
    else if(operator === "divide")
    {
        //correctAns = randomNum1 / randomNum2;
        correctAns = generateFirstRandomNumber() / generateSecondRandomNumber();
        while(randomNum1%2 != 0)
        {
            generateFirstRandomNum();
        }
    }

    //PREVENT OPT A AND OPT B FROM BEING THE SAME NUMBER
    const incorrectAns = (Math.floor(Math.random() * 3) + 1) + correctAns;

    if(incorrectAns == correctAns)
    {
        incorrectAns += 2 
    }
    //CREATE AN ARRAY TO HOLD THE REQUIRED VALUES
    let values = [randomNum1, randomNum2, correctAns, incorrectAns]
    return values;
}

function main()
{
    let gameLevel = 1, playerChances = 4, correctAnswers = 0;

    console.log(`*****Multiple Choice Math Game*****\n
    *****GAME RULES*****\n
    1. Choose the correct multiple choice answer for each math question.\n
    2. For each correct answer, you will advance to the next level in the round and gain ONE (1) points.\n
    3. For each incorrect answer, ONE (1) point will be deducted and you will loose one chance.\n
    4. You have 4 chances to complete the game by answering all the math questions correctly in each round.\n
    GOOD LUCK!"`);

    const playerName = prompt("Please enter your name: ");
    const playerAge = parseInt(prompt("Please enter your age: "));
    
    //DETERMINE IF PLAYER IS OLD ENOUGH TO CONTINUE
    if(playerAge >= 8 || playerAge <= 11)
    {
        console.log(`\nHi, ${playerName}, welcome to the game`)
    }
   
    
    do
    {
      console.log(`\nLevel: ${gameLevel}, Lives Left: ${playerChances}, Correct Answers: ${correctAnswers}\n`)

      //CHANGE THE OPERATOR DEPENDING ON THE QUESTION ROUND
      let number, displayOperator, questions;
      
      if(gameLevel <= 4)
      {
          number = getQuestionValues("add")
          displayOperator = "+"
      }
      else if(gameLevel > 4 && gameLevel <= 8)
      {
          number = getQuestionValues("minus")
          displayOperator = "-"
      }
      else
      {
          number = getQuestionValues("divide")
          displayOperator = "/"
      }

      /**
       * RANDOMLY GENERATE A NUMBER TO CHANGE THE MULTIPLE 
       * CHOICE OPTION FOR THE CORRECT ANSWER
       */
      const randomNum3 = Math.floor(Math.random() * 2) + 1;

      if(randomNum3 === 1)
      {
          questions = prompt(`Enter the letter that represents the correct answer for ${number[0]} ${displayOperator} ${number[1]}
          A: ${number[2]}
          B: ${number[3]}
          Your Answer: `)

          if(questions == "A" || questions == "a")
          {
            gameLevel ++;
            correctAnswers ++;
          }
          else
          {
            gameLevel ++;
            playerChances --;
          }
        }
        else
        {
          questions = prompt(`Enter the letter that represents the correct answer for ${number[0]} ${displayOperator} ${number[1]}
          A: ${number[3]}
          B: ${number[2]}
          Your Answer: `)
          
          //CHECK THE ANSWERS AND UPDATE PROGRESS STATS
            if(questions == "B" || questions == "b")
          {
            gameLevel ++;
            correctAnswers ++;
          }
          else
          {
            gameLevel ++;
            playerChances --;
          }
        }

        //BREAK OUT OF THE GAME IF EITHER OF THESE CONDITIONS ARE TRUE 
        if(playerChances <= 0)
        {
            console.log(`Sorry, ${playerName}, you're out of chances.
            PLEASE TRY AGAIN!`)
            break;
        }
        else if(correctAnswers >= 10)
        {
          console.log(`CONGRATULATIONS, ${playerName}. You conquered all the levels in this math game.`)
        }
    }while(playerChances > 0 || correctAnswers < 10)



}
main();