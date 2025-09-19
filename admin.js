// LocalStorage key for quiz questions
const STORAGE_KEY = 'quizQuestions';

// Default quiz questions (English)
const defaultQuestions = [
    {
        question: "What is the capital of France?",
        options: ["Berlin", "Madrid", "Paris", "Rome"],
        correct: 2
    },
    {
        question: "Which planet is known as the Red Planet?",
        options: ["Earth", "Mars", "Jupiter", "Venus"],
        correct: 1
    },
    {
        question: "Who wrote 'Hamlet'?",
        options: ["Charles Dickens", "William Shakespeare", "Mark Twain", "Jane Austen"],
        correct: 1
    }
];

function getQuestions() {
  const data = localStorage.getItem(STORAGE_KEY);
  return data ? JSON.parse(data) : [];
}

function saveQuestions(questions) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(questions));
}

function renderQuestions() {
  const list = document.getElementById('questionList');
  const questions = getQuestions();
  list.innerHTML = '';
  if (questions.length === 0) {
    list.innerHTML = '<div style="text-align:center;color:#888;">No questions added yet.</div>';
    return;
  }
  questions.forEach((q, idx) => {
    const div = document.createElement('div');
    div.className = 'question-item';
    div.innerHTML = `<b>Q${idx+1}:</b> ${q.question}<br>
      <b>Options:</b> ${q.options.map((opt,i) => `<span${i===q.answer?' style=\'color:#43a047;font-weight:600;\'' : ''}>${opt}</span>`).join(', ')}<br>
      <b>Correct:</b> ${q.options[q.answer]}`;
    const actions = document.createElement('div');
    actions.className = 'question-actions';
    const delBtn = document.createElement('button');
    delBtn.textContent = 'Delete';
    delBtn.className = 'admin-btn delete';
    delBtn.onclick = () => { deleteQuestion(idx); };
    actions.appendChild(delBtn);
    div.appendChild(actions);
    list.appendChild(div);
  });
}

function deleteQuestion(idx) {
  const questions = getQuestions();
  questions.splice(idx, 1);
  saveQuestions(questions);
  renderQuestions();
}

function setupAddForm() {
  const form = document.getElementById('addForm');
  const optionsInputs = document.getElementById('optionsInputs');
  // Render 4 option inputs with radio for correct
  function renderOptionInputs() {
    optionsInputs.innerHTML = '';
    for (let i = 0; i < 4; i++) {
      const row = document.createElement('div');
      row.className = 'option-row';
      const input = document.createElement('input');
      input.type = 'text';
      input.placeholder = `Option ${i+1}`;
      input.required = true;
      input.id = `option${i}`;
      row.appendChild(input);
      const radio = document.createElement('input');
      radio.type = 'radio';
      radio.name = 'correctOption';
      radio.className = 'correct-radio';
      radio.value = i;
      if (i === 0) radio.checked = true;
      row.appendChild(radio);
      row.appendChild(document.createTextNode(' Correct'));
      optionsInputs.appendChild(row);
    }
  }
  renderOptionInputs();

  form.onsubmit = function(e) {
    e.preventDefault();
    const question = document.getElementById('questionInput').value.trim();
    const options = [];
    for (let i = 0; i < 4; i++) {
      const val = document.getElementById(`option${i}`).value.trim();
      if (!val) return alert('All options required.');
      options.push(val);
    }
    const radios = document.getElementsByName('correctOption');
    let answer = 0;
    for (let i = 0; i < radios.length; i++) {
      if (radios[i].checked) answer = i;
    }
    const questions = getQuestions();
    questions.push({ question, options, answer });
    saveQuestions(questions);
    form.reset();
    renderOptionInputs();
    renderQuestions();
  };
}

// Load questions from localStorage or set defaults
function loadQuestions() {
    let questions = JSON.parse(localStorage.getItem('quizQuestions'));
    if (!questions || !Array.isArray(questions) || questions.length === 0) {
        questions = defaultQuestions;
        localStorage.setItem('quizQuestions', JSON.stringify(questions));
    }
    return questions;
}

// On page load, render questions
document.addEventListener('DOMContentLoaded', () => {
    const questions = loadQuestions();
    renderQuestions(questions);
    setupAddForm();
});
