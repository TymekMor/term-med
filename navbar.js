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

const sectionOneList = document
  .querySelector("main")
  .querySelector(".default__section__one")
  .querySelectorAll("h1, p");

const mainSections = document
  .querySelector("main")
  .querySelectorAll(".default__section__one, .default__section__two");

const footer = document.querySelector("footer");
const sectionsToScroll = [...mainSections, footer];
console.log(sectionsToScroll);
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
    // there is problem with event on EN button !!!!!!!!!!
    event.target.closest("button").textContent !== document.body.dataset.lang
  ) {
    changeLanugage();
  }
});
const changeLanugage = () => {
  const englishVersion = {
    id: "EN",
    navbarText: ["About Us", "Products", "Contact"],
    sectionOne: [
      "Welcome to Term-Med",
      "We are the polish company with more than 15 years of experience in the industry. Since 2005, Term-medd company is being conscientiously developed which made it achieve a very strong position on the market.",
      "We specialize in delivering disposable medical products and auxiliary measures ",
    ],
  };
  const polishVersion = {
    id: "PL",
    navbarText: ["O nas", "Produkty", "Kontakt"],
    sectionOne: [
      "WITAMY W TERM-MED",
      "Jesteśmy Polską firmą z ponad 15 letnim doświadczeniem. Od 2005 roku zdobywamy doświadczenie i wiedzę, które pozwoliły nam osiągnąć stabilną pozycję na rynku.",
      "Specjalizujemy się w dostarczaniu wyrobów medycznych jednorazowego użytku i środków pomocniczych",
    ],
  };
  if (document.body.dataset.lang === "PL") {
    whichVersion(englishVersion);
  } else {
    whichVersion(polishVersion);
  }
};
// helper function
const whichVersion = (version) => {
  document.body.dataset.lang = version.id;
  for (let i = 0; i < version.navbarText.length; i++) {
    navbarList[i].textContent = version.navbarText[i];
    navbarDropDownList[i].textContent = version.navbarText[i];
  }
  for (let i = 0; i < version.sectionOne.length; i++) {
    sectionOneList[i].textContent = version.sectionOne[i];
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
  if (window.innerWidth > 750) {
    navbarDropDown.classList.remove("visible");
    document.body.classList.remove("disable__scrolling");
    hamburgerMenu.classList.remove("open");
  }
});
// navbar buttons handlers ( slide into section )

const headerButtonHandler = (elements) => {
  for (let i = 0; i < sectionsToScroll.length; i++) {
    elements[i].addEventListener("click", () => {
      sectionsToScroll[i].scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    });
  }
};
const dropdownHeaderButtonHandler = (elements) => {
  for (let i = 0; i < sectionsToScroll.length; i++) {
    elements[i].addEventListener("click", () => {
      hamburgerMenu.classList.toggle("open");
      document.body.classList.toggle("disable__scrolling");
      navbarDropDown.classList.toggle("visible");
      sectionsToScroll[i].scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    });
  }
};
window.onload = () => {
  headerButtonHandler(navbarList);
  dropdownHeaderButtonHandler(navbarDropDownList);
};
