const div = document.createElement("div");
const button = document.createElement("button");
button.textContent = "Pro Subscribe";
button.style.backgroundColor = "blueviolet";
button.style.color = "white";
button.style.padding = "10px 15px";
button.style.borderRadius = "3px";
button.style.margin = "10px";
button.style.fontSize = "25px";
div.appendChild(button);
let parent_element = document.getElementsByClassName("nav-center")[0];
parent_element.appendChild(div);

// ------------------------------------------------------------------------------------------------------------

var parentElement = document.querySelectorAll("recipe-gallery")[1];

console.log(parentElement);

// var firstChild = parentElement.querySelector(".card .recipe-name");
// console.log(firstChild);
// firstChild.style.color = "white";

// var secondChild = parentElement.querySelector(".one-third:nth-child(2)");
// secondChild.style.color = "white";

// var thirdChild = parentElement.querySelector(".one-third:nth-child(3)");
// thirdChild.style.color = "white";
