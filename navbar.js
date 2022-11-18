const navbar = document.getElementById("navbar");
const switchElement = document
  .getElementById("navbarSwitch")
  .querySelector("div");
const dropdownSwitchElement = document.getElementById("navbarDropdownSwitch");

const hamburgerMenu = document.getElementById("hamburger__menu");
const navbarDropDown = document.getElementById("navbar__dropdown");
const navbarList = document
  .getElementById("navbarList")
  .querySelectorAll(".navbar__element");
const navbarDropDownList = document
  .getElementById("navbar__dropdown")
  .querySelectorAll(".navbar__dropdown__element");
console.log(navbarDropDownList);
const sectionOneList = document
  .getElementById("sectionOne")
  .querySelectorAll("h1, p");
// function that is responsible for changing the language on the site
switchElement.addEventListener("click", (event) => {
  const currentLanguage = event.target.closest("li").querySelector("p");
  const anotherLanguage = event.target.closest("div");
  const temp = currentLanguage.innerText;
  currentLanguage.innerText = anotherLanguage.innerText;
  anotherLanguage.innerText = temp;
  changeLanugage();
});
dropdownSwitchElement.addEventListener("click", (event) => {
  if (
    event.target.closest("button").textContent !== document.body.dataset.lang
  ) {
    changeLanugage();
  }
});
const changeLanugage = () => {
  const englishVersion = {
    navbarText: ["About Us", "Products", "Contact"],
    sectionOne: [
      "Welcome to Term-Med",
      "We are the polish company with more than 15 years of experience in the industry. Since 2005, Term-medd company is being conscientiously developed which made it achieve a very strong position on the market.",
      "We specialize in delivering disposable medical products and auxiliary measures ",
    ],
  };
  const polishVersion = {
    navbarText: ["O nas", "Produkty", "Kontakt"],
    sectionOne: [
      "WITAMY W TERM-MED",
      "Jesteśmy Polską firmą z ponad 15 letnim doświadczeniem. Od 2005 roku zdobywamy doświadczenie i wiedzę, które pozwoliły nam osiągnąć stabilną pozycję na rynku.",
      "Specjalizujemy się w dostarczaniu wyrobów medycznych jednorazowego użytku i środków pomocniczych",
    ],
  };
  if (document.body.dataset.lang === "PL") {
    document.body.dataset.lang = "EN";
    for (let i = 0; i < englishVersion.navbarText.length; i++) {
      navbarList[i].textContent = englishVersion.navbarText[i];
      navbarDropDownList[i].textContent = englishVersion.navbarText[i];
    }
    for (let i = 0; i < englishVersion.sectionOne.length; i++) {
      sectionOneList[i].textContent = englishVersion.sectionOne[i];
    }
  } else {
    document.body.dataset.lang = "PL";
    for (let i = 0; i < englishVersion.navbarText.length; i++) {
      navbarList[i].textContent = polishVersion.navbarText[i];
      navbarDropDownList[i].textContent = polishVersion.navbarText[i];
    }
    for (let i = 0; i < englishVersion.sectionOne.length; i++) {
      sectionOneList[i].textContent = polishVersion.sectionOne[i];
    }
  }
};
// hamburger menu handler
hamburgerMenu.addEventListener("click", () => {
  window.scrollTo(0, 0);
  hamburgerMenu.classList.toggle("open");
  document.body.classList.toggle("disable__scrolling");
  navbarDropDown.classList.toggle("visible");
});

// function that disappears the dropdown menu when window is more than 750 px
window.addEventListener("resize", () => {
  console.log("h1");
  if (window.innerWidth > 750) {
    navbarDropDown.classList.remove("visible");
    document.body.classList.remove("disable__scrolling");
    hamburgerMenu.classList.remove("open");
  }
});

console.log(window.innerWidth);
