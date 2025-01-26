// Function to perform addition
function add(number1, number2) {
  return number1 + number2;
}

// Function to perform subtraction
function subtract(number1, number2) {
  return number1 - number2;
}

// Function to perform multiplication
function multiply(number1, number2) {
  return number1 * number2;
}

// Function to perform division
function divide(number1, number2) {
  // Prevent division by zero
  if (number2 === 0) {
    return "Error: Division by zero";
  }
  return number1 / number2;
}

// Function to handle button clicks and perform calculation
function handleCalculation(operation) {
  // Get input values
  const number1 = parseFloat(document.getElementById("number1").value) || 0;
  const number2 = parseFloat(document.getElementById("number2").value) || 0;

  let result;

  // Perform the selected operation
  switch (operation) {
    case "add":
      result = add(number1, number2);
      break;
    case "subtract":
      result = subtract(number1, number2);
      break;
    case "multiply":
      result = multiply(number1, number2);
      break;
    case "divide":
      result = divide(number1, number2);
      break;
    default:
      result = "Invalid Operation";
  }

  // Display the result
  document.getElementById("calculation-result").textContent = result;
}

// Add event listeners to each button
document
  .getElementById("add")
  .addEventListener("click", () => handleCalculation("add"));
document
  .getElementById("subtract")
  .addEventListener("click", () => handleCalculation("subtract"));
document
  .getElementById("multiply")
  .addEventListener("click", () => handleCalculation("multiply"));
document
  .getElementById("divide")
  .addEventListener("click", () => handleCalculation("divide"));
