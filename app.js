const questions = [
  {
    question: "Vilket år grundades Stockholm?",
    options: ["1100", "1252", "1500", "1628"],
    answer: 1
  },
  {
    question: "Vilken byggnad är Stockholms stadshus känd för?",
    options: ["Nobelbanketten", "Kungliga bröllop", "Parlamentet", "Operan"],
    answer: 0
  },
  {
    question: "Vilken ö är Gamla stan belägen på?",
    options: ["Södermalm", "Stadsholmen", "Kungsholmen", "Djurgården"],
    answer: 1
  }
];

let currentQuestion = 0;
let score = 0;

const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const nextBtn = document.getElementById("nextBtn");
const resultEl = document.getElementById("result");
const progressEl = document.querySelector("#progress div");

function showQuestion() {
  const q = questions[currentQuestion];
  questionEl.textContent = q.question;
  optionsEl.innerHTML = "";
  q.options.forEach((option, i) => {
    const btn = document.createElement("button");
    btn.textContent = option;
    btn.onclick = () => selectAnswer(i);
    optionsEl.appendChild(btn);
  });
  progressEl.style.width = `${((currentQuestion) / questions.length) * 100}%`;
}

function selectAnswer(i) {
  if (i === questions[currentQuestion].answer) {
    score++;
  }
  nextBtn.style.display = "block";
}

nextBtn.addEventListener("click", () => {
  currentQuestion++;
  if (currentQuestion < questions.length) {
    showQuestion();
    nextBtn.style.display = "none";
  } else {
    showResult();
  }
});

function showResult() {
  document.getElementById("quiz").style.display = "none";
  resultEl.style.display = "block";
  resultEl.innerHTML = `<h2>Du fick ${score} av ${questions.length} rätt!</h2>`;
}

showQuestion();
nextBtn.style.display = "none";
