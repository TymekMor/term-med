const navbar = document.getElementById("navbar");
console.log(navbar);
const switchElement = document
  .getElementById("navbarSwitch")
  .querySelector("div");

const hamburgerMenu = document.getElementById("hamburger__menu");
const navbarDropDown = document.getElementById("navbar__dropdown");

switchElement.addEventListener("click", (event) => {
  const currentLanguage = event.target.closest("li").querySelector("p");
  const anotherLanguage = event.target.closest("div");
  const temp = currentLanguage.innerText;
  currentLanguage.innerText = anotherLanguage.innerText;
  anotherLanguage.innerText = temp;
});

hamburgerMenu.addEventListener("click", () => {
  window.scrollTo(0, 0);
  document.body.classList.toggle("disable__scrolling");
  navbarDropDown.classList.toggle("visible");
});
