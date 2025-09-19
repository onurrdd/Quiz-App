// Quiz data
const STORAGE_KEY = 'quizQuestions';
const defaultQuestions = [
  {
    question: "What is the capital of Turkey?",
    options: ["Istanbul", "Ankara", "Izmir", "Antalya"],
    answer: 1
  },
  {
    question: "Which is the largest planet?",
    options: ["Mars", "Venus", "Jupiter", "Earth"],
    answer: 2
  },
  {
    question: "What does HTML stand for?",
    options: ["Hyper Trainer Marking Language", "Hyper Text Markup Language", "High Text Markup Language", "Hyper Text Markdown Language"],
    answer: 1
  },
  {
    question: "Which color has the RGB code #FF0000?",
    options: ["Blue", "Green", "Red", "Yellow"],
    answer: 2
  },
  {
    question: "Which keyword is NOT used to declare a variable in JavaScript?",
    options: ["var", "let", "const", "int"],
    answer: 3
  }
];

function getQuestions() {
  const data = localStorage.getItem(STORAGE_KEY);
  return data ? JSON.parse(data) : defaultQuestions;
}

let quizQuestions = getQuestions();

let currentQuestion = 0;
let correctAnswers = 0;

function showQuestion() {
  const q = quizQuestions[currentQuestion];
  document.getElementById('question').textContent = q.question;
  const optionsDiv = document.getElementById('options');
  optionsDiv.innerHTML = '';
  q.options.forEach((opt, idx) => {
    const btn = document.createElement('button');
    btn.textContent = opt;
    btn.className = 'option-btn';
    btn.onclick = () => checkAnswer(idx, btn);
    optionsDiv.appendChild(btn);
  });
  document.getElementById('next-btn').style.display = 'none';
}

function checkAnswer(selectedIdx, btn) {
  const q = quizQuestions[currentQuestion];
  const optionButtons = document.querySelectorAll('.option-btn');
  optionButtons.forEach((b, idx) => {
    b.disabled = true;
    if (idx === q.answer) {
      b.classList.add('correct');
    }
    if (idx === selectedIdx && idx !== q.answer) {
      b.classList.add('incorrect');
    }
  });
  if (selectedIdx === q.answer) {
    correctAnswers++;
  }
  document.getElementById('next-btn').style.display = 'block';
}

function nextQuestion() {
  currentQuestion++;
  if (currentQuestion < quizQuestions.length) {
    showQuestion();
  } else {
    showResult();
  }
}

function showResult() {
  document.getElementById('quiz-container').innerHTML = `<div class='result'>Quiz finished!<br>Correct answers: ${correctAnswers} / ${quizQuestions.length}</div>`;
}

document.getElementById('next-btn').onclick = nextQuestion;
showQuestion();
