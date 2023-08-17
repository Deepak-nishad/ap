let target = document.getElementsByClassName(
  "clash-card__unit-stats clash-card__unit-stats--barbarian clearfix"
)[0];
target.style.backgroundColor = "#E07C24";

let target1 = document.getElementsByClassName("one-third")[0];
target1.style.color = "white";

let target2 = document.getElementsByClassName("one-third")[1];
target2.style.color = "white";

let target3 = document.getElementsByClassName("one-third")[2];
target3.style.color = "white";

// -------------------------------------------------------------------------------------------------
let parent_element = document.getElementsByClassName(
  "clash-card__unit-stats clash-card__unit-stats--archer clearfix"
)[0];
parent_element.style.backgroundColor = "#ff3399";

let firstChild = parent_element.querySelector(".one-third");
firstChild.style.color = "white";

let secondChild = parent_element.querySelector(".one-third:nth-child(2)");
secondChild.style.color = "white";

let thirdChild = parent_element.querySelector(".one-third:nth-child(3)");
thirdChild.style.color = "white";

// ---------------------------------------------------------------------------------------------------------
let giant = document.getElementsByClassName(
  "clash-card__unit-stats clash-card__unit-stats--giant clearfix"
)[0];
giant.style.backgroundColor = "#ff8533";

let giantfirstChild = giant.querySelector(".one-third");
giantfirstChild.style.color = "white";

let giantsecondChild = giant.querySelector(".one-third:nth-child(2)");
giantsecondChild.style.color = "white";

let giantthirdChild = giant.querySelector(".one-third:nth-child(3)");
giantthirdChild.style.color = "white";

// --------------------------------------------------------------------------------------------------------------------
let character = document.getElementsByClassName(
  "clash-card__unit-stats clash-card__unit-stats--goblin clearfix"
)[0];
character.style.backgroundColor = "#66cc00";
let character_first_child = character.querySelector(".one-third");
character_first_child.style.color = "white";

let character_Second_child = character.querySelector(".one-third:nth-child(2)");
character_Second_child.style.color = "white";

let character_Third_child = character.querySelector(".one-third:nth-child(3)");
character_Third_child.style.color = "white";

// --------------------------------------------------------------------------------------------------

let wizard = document.getElementsByClassName(
  "clash-card__unit-stats clash-card__unit-stats--wizard clearfix"
)[0];
console.log(wizard);
wizard.style.backgroundColor = "#00bfff";

let wizard_first_child = wizard.querySelector(".one-third");
wizard_first_child.style.color = "white";

let wizard_Second_child = wizard.querySelector(".one-third:nth-child(2)");
wizard_Second_child.style.color = "white";

let wizard_Third_child = wizard.querySelector(".one-third:nth-child(3)");
wizard_Third_child.style.color = "white";
