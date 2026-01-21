// Step 1: Simulate User Behavior
//Simulate Click
function simulateClick(elementId, content) {
    addElementToDOM(elementId, content);
}
// - Add event listeners for button clicks and form submissions.
// - Use JavaScript to dynamically update the DOM based on user actions.

// Step 2: DOM Manipulation Functions
// - Implement functions to add, update, and remove DOM elements.
// - Ensure all elements are dynamically created with appropriate attributes and content.
function addElementToDOM(elementId, content) {
  const newElement = document.getElementById(elementId);

  newElement.textContent = content;
}

function removeElementFromDOM(elementId) {
    //Select element by its ID
    const targetElement = document.getElementById(elementId);
    //Remove element
    targetElement.remove();
}
// Step 3: Error Handling
// - Display error messages in the DOM for invalid inputs or missing elements.
// - Create reusable functions to handle common error cases.
  function showError(message) {
    const errorDiv = document.getElementById("error-message")
    errorDiv.textContent = message
    errorDiv.classList.remove("hidden")
  }
  
  function clearError() {
    const errorDiv = document.getElementById("error-message")
    errorDiv.textContent = ""
    errorDiv.classList.add("hidden")
  }
// Step 4: Reusable Utilities
// - Create modular utility functions, such as createElement(tag, attributes).
// - Ensure all functions follow DRY principles for maintainability.
function createElement(tag, attributes = {}, textContent = "") {
    const element = document.createElement(tag)
  
    Object.keys(attributes).forEach((key) => {
      element.setAttribute(key, attributes[key])
    })
  
    if (textContent) {
      element.textContent = textContent
    }
  
    return element
  }
  
  function formErrors(input) {
    const errorMessage = document.getElementById('error-message');
    
    if (input.value === '' || input.value === null) {
        errorMessage.classList.remove("hidden");
        errorMessage.textContent = 'Input cannot be empty';
        return null
    } else {
        errorMessage.classList.add("hidden");
        return input.value
    };
}

function handleFormSubmit(formId, elementId) {
    const form = document.getElementById(formId);
    const input = form.querySelector('input[type="text"]');
    const value = formErrors(input);
    
    if (value === null) return;

    addElementToDOM(elementId, value);
}

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("user-form");

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    handleFormSubmit("user-form", "dynamic-content");
  });
});

  //Export to jest
module.exports = {
    addElementToDOM,
    removeElementFromDOM,
    simulateClick,
    handleFormSubmit,
}