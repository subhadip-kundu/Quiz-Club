const quizContainer = document.getElementById('quiz');
const submitButton = document.getElementById('submit');
const resultContainer = document.getElementById('results');

const myQuestions = [
  {
    question: "What is the capital of France?",
    answers: {
      A: "Paris",
      B: "London",
      C: "New York",
      D: "Delhi"
    },
    correctAnswer: "A"
  },
  {
    question: "What is the largest country in the world?",
    answers: {
      A: "India",
      B: "China",
      C: "United States",
      D: "Russia"
    },
    correctAnswer: "D"
  },
  {
    question: "What is the currency of Japan?",
    answers: {
      A: "Yuan",
      B: "Euro",
      C: "Yen",
      D: "Rupee"
    },
    correctAnswer: "C"
  }
];

function buildQuiz() {
  const output = [];
  myQuestions.forEach((currentQuestion, questionNumber) => {
    const answers = [];
    for (letter in currentQuestion.answers) {
      answers.push(
        `<label>
          <input type="radio" name="question${questionNumber}" value="${letter}"/>
          ${letter}:
          ${currentQuestion.answers[letter]}
        </label>`
      );
    }
    output.push(
      `<div class="question">${currentQuestion.question}</div>
      <div class="answers">${answers.join('')}</div>`
    );
  });
  quizContainer.innerHTML = output.join('');
}

function showResults() {
  const answerContainers = quizContainer.querySelectorAll('.answers');
  let numCorrect = 0;
  myQuestions.forEach((currentQuestion, questionNumber) => {
    const answerContainer = answerContainers[questionNumber];
    const selector = `input[name=question${questionNumber}]:checked`;
    const userAnswer = (answerContainer.querySelector(selector) || {}).value;
    if (userAnswer === currentQuestion.correctAnswer) {
      numCorrect++;
      answerContainers[questionNumber].style.color = 'green';
    } else {
      answerContainers[questionNumber].style.color = 'red';
    }
  });
  resultContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
}

buildQuiz();

submitButton.addEventListener('click', showResults);
