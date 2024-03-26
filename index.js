// Define your questions and answers
var questions = [
    {
        question: "What is the capital of France?",
        options: ["London", "Paris", "Berlin", "Madrid"],
        correctAnswer: "b"
    },
    {
        question: "¿Qué es la Constitución Política de la República?",
        options: [
            "Es un documento histórico",
            "Es un tratado internacional",
            "Es el conjunto de normas fundamentales que organizan el Estado panameño y del cual se derivan y rigen todas las otras normas legales de la nación. También se le conoce como Carta Magna.",
            "Es un libro de literatura"
        ],
        correctAnswer: "c"
    },
    // Add more questions here...
    // Make sure to have a total of 75 questions
];

// Function to dynamically generate questions
function generateQuestions() {
    var questionsContainer = document.getElementById('questionsContainer');
    for (var i = 0; i < questions.length; i++) {
        var questionDiv = document.createElement('div');
        questionDiv.classList.add('question');
        questionDiv.innerHTML = "<h2>Question " + (i + 1) + ": " + questions[i].question + "</h2>";
        for (var j = 0; j < questions[i].options.length; j++) {
            var optionInput = document.createElement('input');
            optionInput.setAttribute('type', 'radio');
            optionInput.setAttribute('name', 'q' + (i + 1));
            optionInput.setAttribute('value', String.fromCharCode(97 + j));
            questionDiv.appendChild(optionInput);
            questionDiv.innerHTML += "<label>" + String.fromCharCode(97 + j) + ") " + questions[i].options[j] + "</label><br>";
        }
        questionsContainer.appendChild(questionDiv);
    }
}

// Function to submit quiz
function submitQuiz() {
    var form = document.getElementById('quizForm');
    var score = 0;
    for (var i = 0; i < questions.length; i++) {
        var selectedOption = form.elements['q' + (i + 1)].value;
        if (selectedOption === questions[i].correctAnswer) {
            score++;
        }
    }
    var resultDiv = document.getElementById('result');
    resultDiv.innerHTML = 'Your score: ' + score + ' out of ' + questions.length;
}

// Generate questions on page load
window.onload = generateQuestions;
