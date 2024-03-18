const questions = document.querySelectorAll(".top_section");
const answers = document.querySelectorAll(".answer");
let selectedIndex = -1;

function toggleAnswer(index){
  answers[index].classList.toggle("hide");
  if (!answers[index].classList.contains("hide")) {
    answers[index].setAttribute("tabindex", "0"); // Ensures answer is focusable
    answers[index].focus(); // Focuses on the answer for accessibility
  } else {
    answers[index].removeAttribute("tabindex"); // Removes tabindex when answer is hidden
  }
}

questions.forEach((question, index) => {
  question.addEventListener("click", () => {
    toggleAnswer(index);
  })
})

function focusAndToggleAnswer(index) {
  if (index >= 0 && index < questions.length) {
    if (selectedIndex !== -1) {
      toggleAnswer(selectedIndex); // Hide the previously selected answer
    }
    selectedIndex = index;
    questions[selectedIndex].focus(); // Focus on the selected question
    toggleAnswer(selectedIndex); // Toggle the answer visibility
  }
}

questions.forEach((question, index) => {
  question.addEventListener("click", () => {
    focusAndToggleAnswer(index);
  });
});

document.addEventListener("keydown", (e) => {
  if (e.key === "ArrowDown") {
    focusAndToggleAnswer((selectedIndex + 1) % questions.length);
  } else if (e.key === "ArrowUp") {
    focusAndToggleAnswer((selectedIndex - 1 + questions.length) % questions.length);
  }
});


