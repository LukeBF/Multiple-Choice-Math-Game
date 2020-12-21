function getQuestionValues(operator)
{
    let correctAnswer;

    const randomNum1 = Math.floor(Math.random() * 25) + 1;
    const randomNum2 = Math.floor(Math.random() * 9) + 1;

    if(operator === "add")
    {
        correctAns = randomNum1 + randomNum2;
    }
    else if(operator === "minus")
    {
        correctAns = randomNum1 - randomNum2;

        //CHECK IF 1ST NUMBER IS LARGER THAN 2ND NUMBER
        // if()
        // {

        // }
    }
    else if(operator === "divide")
    {
        correctAns = randomNum1 / randomNum2;
    }

    //PREVENT OPT A AND OPT B FROM BEING THE SAME NUMBER
    let incorrectAns = (Math.floor(Math.random() * 3) + 1) + correctAns;

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
    if(playerAge >= 8 && playerAge <= 11)
    {
      console.log(`\nHi, ${playerName}, welcome to the game`)
    }
    else
    {
      console.log("\nSorry, you do not meet the age requirments.");
    }

    do
    {
        console.log(`\nLevel: ${gameLevel}, Lives Left: ${playerChances}, Correct Answers: ${correctAnswers}\n`)

        //CHANGE THE OPERATOR DEPENDING ON THE QUESTION ROUND
        let number, displayOperator;
        
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
        let randomNum3 = Math.floor(Math.random() * 2) + 1;

        let questions;

        if(randomNum3 === 1)
        {
            questions = prompt(`Enter the letter that represents the correct answer for ${number[0]} ${displayOperator} ${number[1]}
            A: ${number[2]}
            B: ${number[3]}
            Your Answer: `)
        }
        else
        {
            questions = prompt(`Enter the letter that represents the correct answer for ${number[0]} ${displayOperator} ${number[1]}
            A: ${number[3]}
            B: ${number[2]}
            Your Answer: `)
        }

        //CHECK THE ANSWERS AND UPDATE PROGRESS STATS
        if(questions === "A" && randomNum3 == 1 || questions === "B" && randomNum3 == 2)
        {
            gameLevel ++
            correctAnswers ++
        }
        else
        {
            gameLevel ++;
            playerChances --;
        }

        //BREAK OUT OF THE GAME IF EITHER OF THESE CONDITIONS ARE TRUE 
        if(playerChances <= 0 || correctAnswers >= 10 )
        {
            break;
        }

    


    }while(playerChances > 0 || correctAnswers < 10)

}
main();