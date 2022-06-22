const question = document.getElementById("question");
const choices = Array.from(document.getElementsByClassName("choice-text"));

var currentQuestion = {};
var acceptingAnswers = true;
var score = 0;
var questionCounter = 0;
var availableQuestions = [];

var questions = [
    {
        question: "Javascript is put into what HTML element?",
        choice1: "<script>",
        choice2: "<javascript>",
        choice3: "<js>",
        choice4: "<scripting>",
         answer: 1
    },

    {
        question: "What is a special variable that holds multiple values?",
        choice1: "boolean",
        choice2: "string",
        choice3: "constants",
        choice4: "array",
         answer: 4
    },

    {
        question: "if/else statements are enclosed with?",
        choice1: "parenthesis",
        choice2: "curly brackets",
        choice3: "quotes",
        choice4: "square brackets",
         answer: 2
    },

    
]

const CORRECT_BONUS = 10;
const MAX_QUESTIONS = 3;

startGame = () => {
    questionCounter = 0;
    score = 0;
    availableQuestions = [...questions]
    getNewQuestion();
}

getNewQuestion = () => {
   questionCounter++
   const questionsIndex = Math.floor(Math.random() * availableQuestions.length)
   // keep track of what question we are on //
   currentQuestion = availableQuestions[questionsIndex]
   // know what question to ask //
   question.innerText = currentQuestion.question 

   choices.forEach(choice => {
    const number = choice.dataset["number"]
    choice.innerText = currentQuestion["choice" + number]

    })

    availableQuestions.splice(questionsIndex, 1)

    acceptingAnswers = true

   }

   choices.forEach(choice => {
    addEventListener("click", e => { 
        // if its not equal to accepting answers we return //
        if(!acceptingAnswers) return
        acceptingAnswers = false
        const selectedChoice = e.target
        const selectedAnswer = selectedChoice.dataset["number"]

        var classToApply = selectedAnswer == currentQuestion.answer ? 'correct' : 'incorrect';
        if(classToApply === 'correct') {
            incrementScore(CORRECT_BONUS)
        }

        selectedChoice.parentElement.classList.add(classToApply)

        setTimeout(() => {
            selectedChoice.parentElement.classList.remove(classToApply)
            getNewQuestion()

            }, 1000)
        })
    })

    incrementScore = num => {
        score +=num
        scoreText.innerText = score
    }
   

startGame();