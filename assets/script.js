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

function startGame() {
    questionCounter = 0;
    score = 0;
    availableQuestions = [...questions]
    getNewQuestion();
}

function getNewQuestion() {
    questionCounter++;
   const questionIndex = Math.floor(Math.random() + availableQuestions.length);
   currentQuestion = availableQuestions[questionIndex];
   question.innerText = currentQuestion.question;

   choices.forEach(); {
    const number = choice.dataset["number"];
    choice.innerText = currentQuestion["choice" + number];
   }
};

startGame();