const questions = [
    { question: "Which NFL team won Super Bowl LVI in 2022?", answer: "Los Angeles Rams" },
    { question: "Who won the NBA Championship in the 2020-2021 season?", answer: "Milwaukee Bucks" },
    { question: "Who is the current MLB home run leader?", answer: "Barry Bonds" },
    { question: "What player won the NFL MVP and super bowl MVP in the same season?", answer: "Patrick Mahomes" },
    { question: "Which NBA player holds the record for the most career points?", answer: "Lebron James" },
    { question: "Who was the NFL MVP for the 2020 season?", answer: "Aaron Rodgers" },
    { question: "Which MLB team won the 2021 World Series?", answer: "Atlanta Braves" },
    { question: "Who won the NBA MVP award for the 2020-2021 season?", answer: "Nikola Jokic" },
    { question: "Which NFL team has the most Super Bowl wins?", answer: "New England Patriots" },
    { question: "Who won the MLB Rookie of the Year award in 2022?", answer: "Julio Rodriguez" },
    { question: "Who has the most receiving yards in NFL history?", answer: "Jerry Rice" },
    { question: "Who won the NBA Rookie of the Year award in 2020?", answer: "Ja Morant" },
    { question: "Which MLB pitcher has the most career strikeouts?", answer: "Nolan Ryan" },
    { question: "Who was the first pick in the 2024 NFL Draft?", answer: "Caleb Williams" },
    { question: "Which NBA team has the most championships?", answer: "Los Angeles Lakers" }
];

let currentQuestionIndex = 0;
let score = 0;

function displayQuestion() {
    document.getElementById('question').textContent = questions[currentQuestionIndex].question;
}

function checkAnswer() {
    const userAnswer = document.getElementById('answer').value.trim();
    const correctAnswer = questions[currentQuestionIndex].answer;

    if (userAnswer === correctAnswer) {
        score++;
        document.getElementById('scoreValue').textContent = score;
    }

    if (currentQuestionIndex < questions.length - 1) {
        currentQuestionIndex++;
        document.getElementById('answer').value = '';
        displayQuestion();
    } else {
        endGame();
    }
}

function endGame() {
    document.getElementById('question').textContent = 'Game Over! Your final score is ' + score + '/15';
    document.getElementById('answer').style.display = 'none';
    document.querySelector('button').style.display = 'none';
}

// Start the game
displayQuestion();