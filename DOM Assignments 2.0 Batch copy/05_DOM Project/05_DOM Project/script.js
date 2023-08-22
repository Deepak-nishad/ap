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
// Create a new <a> element
const newLink = document.createElement("a");
newLink.href = "#";
newLink.textContent = "Chinese (7)";
newLink.style.marginBottom = "10px";
newLink.style.fontSize = "24px";
newLink.style.color = "brown";
newLink.style.textTransform = "capitalize";
const hreftag = document.getElementsByClassName("tags-container")[0];
hreftag.appendChild(newLink);

// ---------------------------------------------------------------------------------------------------------------------

const cards = document.querySelectorAll(".recipe-gallery .card");
cards.forEach((card) => {
  // Target the <h5> element within the current card
  const nameElement = card.querySelector(".recipe-name");
  const nameElements = card.querySelector(".recipe-disp");

  nameElement.style.color = "#002266";

  nameElements.style.color = "#002266";
});

// ---------------------------------------------------------------------------------------------------------------------

const adddiv = document.createElement("div");
adddiv.classList.add("card");

const anchorElement = document.createElement("a");

anchorElement.setAttribute("href", "#");

anchorElement.classList.add("recipe-text");
// Create the image element
const imgElement = document.createElement("img");
imgElement.setAttribute("src", "./img/6-pasta.png");
imgElement.classList.add("recipe-img");

const h5Element = document.createElement("h5");
h5Element.classList.add("recipe-name");
h5Element.textContent = "Hakka Noodles";

var pElement = document.createElement("p");
pElement.classList.add("recipe-disp");
pElement.textContent = "Prep : 15min | Cook : 30min";

adddiv.appendChild(anchorElement);
adddiv.appendChild(imgElement);
adddiv.appendChild(h5Element);
adddiv.appendChild(pElement);

const newcard = document.getElementsByClassName("recipe-gallery")[0];
newcard.appendChild(adddiv);

console.log(adddiv);
