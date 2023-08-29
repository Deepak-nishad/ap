// Get all the <a> elements within the specified <div>
const links = document.querySelectorAll(".main__languages a");

console.log(links.length);

// Loop through the links and remove the alternate ones
for (let i = 1; i < links.length; i += 2) {
  const linkText = links[i].textContent;
  if (linkText.includes("2.0")) {
    links[i].remove();
  }
}

// Enable the input field and submit button
const input = document.querySelector(".main__form-input");
const submitButton = document.querySelector(".main__form-btn");

input.removeAttribute("disabled");
submitButton.removeAttribute("disabled");

// Fill in the input with a value
input.value = "Hello, this is a submission";

// Submit the form
// submitButton.click();
