var target = document.getElementsByClassName("accordian-wrapper")[0];
const div = document.createElement("div");
div.className = "accordian";
const h3 = document.createElement("h3");
h3.innerText = "Skills";
const p = document.createElement("p");
p.innerText =
  "I posses a very good command over the full stack devellopment technology like the mern which can be seen in my work over the github";

div.appendChild(h3);
div.appendChild(p);
target.appendChild(div);

let accordian = document.querySelectorAll(".accordian h3");
accordian.forEach((element) => {
  element.addEventListener("click", () => {
    let para = element.nextElementSibling;
    if (para.style.display === "block") {
      para.style.display = "none";
    } else {
      para.style.display = "block";
    }
  });
});
