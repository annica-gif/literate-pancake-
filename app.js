function checkAnswers() {
  const answers = {
    q1: "1252",
    q2: "Stadshuset",
    q3: "Mälaren & Östersjön"
  };

  let score = 0;
  const form = document.forms["quizForm"];

  for (let q in answers) {
    if (form[q].value === answers[q]) {
      score++;
    }
  }

  const result = document.getElementById("result");
  result.textContent = `Du fick ${score} av 3 rätt!`;
  
  if (score === 3) {
    result.style.color = "green";
  } else {
    result.style.color = "red";
  }
}
