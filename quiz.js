// Function to check the user's answer
function checkAnswer() {
  // Define the correct answer
  const correctAnswer = "4";

  // Get the selected radio button (if any)
  const userAnswerElement = document.querySelector(
    'input[name="quiz"]:checked'
  );

  // Get the feedback element
  const feedback = document.getElementById("feedback");

  // Check if the user selected an answer
  if (userAnswerElement) {
    // Retrieve the user's answer value
    const userAnswer = userAnswerElement.value;

    // Compare the user's answer with the correct answer
    if (userAnswer === correctAnswer) {
      feedback.textContent = "Correct! Well done.";
      feedback.style.color = "green"; // Optional: Styling for correct answer
    } else {
      feedback.textContent = "That's incorrect. Try again!";
      feedback.style.color = "red"; // Optional: Styling for incorrect answer
    }
  } else {
    // No answer selected
    feedback.textContent = "Please select an answer before submitting.";
    feedback.style.color = "orange"; // Optional: Styling for no selection
  }
}

// Attach an event listener to the "Submit Answer" button
document.getElementById("submit-answer").addEventListener("click", checkAnswer);
