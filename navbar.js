const switchElement = document
  .getElementById("navbarSwitch")
  .querySelector("div");
const dropdownSwitchElement = document.getElementById("navbarDropdownSwitch");
const navbarLogo = document.querySelector(".navbar__logo");
const hamburgerMenu = document.getElementById("hamburger__menu");
const navbarDropDown = document.getElementById("navbar__dropdown");
const navbarList = document
  .getElementById("navbarList")
  .querySelectorAll(".navbar__element");

const navbarDropDownList = document
  .getElementById("navbar__dropdown")
  .querySelectorAll(".navbar__dropdown__element");

const mainSections = document
  .querySelector("main")
  .querySelectorAll(".default__section__one, .default__section__two");

const sectionOneElements = mainSections[0].querySelectorAll("h1, p");
const sectionTwoElements = mainSections[1].querySelector(".our__offer");

const footer = document.querySelector("footer");
const sectionsToScroll = [...mainSections, footer];

// function that is responsible for changing the language on the site ------------------------------
switchElement.addEventListener("click", (event) => {
  const currentLanguage = event.target.closest("li").querySelector("p");
  const anotherLanguage = event.target.closest("div");
  const temp = currentLanguage.innerText;
  currentLanguage.innerText = anotherLanguage.innerText;
  anotherLanguage.innerText = temp;
  if (document.body.dataset.page === "main") {
    changeLanugageMain();
  } else {
    changeLanugageOffer();
  }
});
dropdownSwitchElement.addEventListener("click", (event) => {
  if (
    event.target.closest("button").textContent !== document.body.dataset.lang
  ) {
    if (document.body.dataset.page === "main") {
      changeLanugageMain();
    } else {
      changeLanugageOffer();
    }

    const currentLanguage = document
      .getElementById("navbarSwitch")
      .querySelector("p");
    const anotherLanguage = document
      .getElementById("navbarSwitch")
      .querySelector("div");
    const temp = currentLanguage.innerText;
    currentLanguage.innerText = anotherLanguage.innerText;
    anotherLanguage.innerText = temp;
  }
});
//-----------------------------------------------------------------------------------
const englishVersion = {
  id: "EN",
  navbarText: ["About Us", "Products", "Contact"],
  sectionOne: [
    "Welcome to Term-Med",
    "We are the polish company with more than 15 years of experience in the industry. Since 2005, Term-med company is being conscientiously developed which made it achieve a very strong position on the market.",
    "We specialize in delivering disposable medical products and auxiliary measures ",
  ],
  sectionTwo: "Our Offer",
  // OFFER PAGE ------
  header: ["Our Mission", "Our mission is to..."],
};
const polishVersion = {
  id: "PL",
  navbarText: ["O nas", "Produkty", "Kontakt"],
  sectionOne: [
    "WITAMY W TERM-MED",
    "Jesteśmy Polską firmą z ponad 15 letnim doświadczeniem. Od 2005 roku zdobywamy doświadczenie i wiedzę, które pozwoliły nam osiągnąć stabilną pozycję na rynku.",
    "Specjalizujemy się w dostarczaniu wyrobów medycznych jednorazowego użytku i środków pomocniczych",
  ],
  sectionTwo: "Poznaj naszą ofertę",
  // OFFER PAGE ------
  header: [
    "Nasza Misja",
    "Naszą misją jest pomoc Polskim szpitalom. Wypełniamy ją codziennie dystrybuując niezbędne wyroby medyczne",
  ],
};
const changeLanugageMain = () => {
  if (document.body.dataset.lang === "PL") {
    setLangMain(englishVersion);
    document.body.dataset.lang = englishVersion.id;
  } else {
    setLangMain(polishVersion);
    document.body.dataset.lang = polishVersion.id;
  }
};
const setLangMain = (version) => {
  const mainSections = document
    .querySelector("main")
    .querySelectorAll(".default__section__one, .default__section__two");
  const sectionOneElements = mainSections[0].querySelectorAll("h1, p");
  const sectionTwoElements = mainSections[1].querySelector(".our__offer");
  setLanguageNavbar(version);
  for (let i = 0; i < version.sectionOne.length; i++) {
    sectionOneElements[i].textContent = version.sectionOne[i];
  }
  sectionTwoElements.textContent = version.sectionTwo;
};
const changeLanugageOffer = () => {
  if (document.body.dataset.lang === "PL") {
    setLangOffer(englishVersion);
    document.body.dataset.lang = englishVersion.id;
  } else {
    setLangOffer(polishVersion);
    document.body.dataset.lang = polishVersion.id;
  }
};
const setLangOffer = (version) => {
  setLanguageNavbar(version);
};

const setLanguageNavbar = (version) => {
  for (let i = 0; i < version.navbarText.length; i++) {
    navbarList[i].textContent = version.navbarText[i];
    navbarDropDownList[i].textContent = version.navbarText[i];
  }
};

const setLanguage = () => {};

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
  const mainSections = document
    .querySelector("main")
    .querySelectorAll(".default__section__one, .default__section__two");
  const sectionsToScroll = [...mainSections, footer];
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
  const mainSections = document
    .querySelector("main")
    .querySelectorAll(".default__section__one, .default__section__two");
  const sectionsToScroll = [...mainSections, footer];
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

const ourOffer = document.getElementById("our__offer");
const Sections = document.querySelectorAll(
  ".default__section__one, .default__section__two"
);
// intersection observer
const medical_list = document.querySelectorAll(".medicals__token");
const offer_token = document.querySelectorAll(".our__offer");
const observerOne = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("medicals__token--visible");
    }
  });
});
const observerTwo = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("our__offer--visible");
    }
  });
});
medical_list.forEach((element) => observerOne.observe(element));
offer_token.forEach((element) => observerTwo.observe(element));
//-----------------------------------------------------------------------

const mainPageTemplate = document.getElementById("mainPage");
const offerPageTemplate = document.getElementById("offerPage");
const mainContainer = document.querySelector("main");

const renderOfferPage = () => {
  removeChildNodes(mainContainer);
  document.body.dataset.page = "offer";
  const cloneOfferPage = offerPageTemplate.content.cloneNode(true);
  mainContainer.appendChild(cloneOfferPage);
  if (document.body.dataset.lang === "PL") {
    setLangOffer(polishVersion);
  } else {
    setLangOffer(englishVersion);
  }
  for (let i = 0; i < 2; i++) {
    navbarList[i].classList.add("not-visible");
    navbarDropDownList[i].classList.add("not-visible");
  }
  mainContainer
    .querySelector(".deafult__section__offer__header")
    .querySelector("button")
    .addEventListener("click", renderMainPage);
  navbarLogo.addEventListener("click", renderMainPage);

  window.scrollTo(0, 0);
};

const renderMainPage = () => {
  removeChildNodes(mainContainer);
  document.body.dataset.page = "main";
  const cloneMainPage = mainPageTemplate.content.cloneNode(true);
  mainContainer.appendChild(cloneMainPage);
  mainContainer
    .querySelectorAll(".medicals__token")
    .forEach((element) => observerOne.observe(element));
  mainContainer
    .querySelectorAll(".our__offer")
    .forEach((element) => observerTwo.observe(element));
  mainContainer
    .querySelector(".our__offer")
    .addEventListener("click", renderOfferPage);
  if (document.body.dataset.lang === "PL") {
    setLangMain(polishVersion);
  } else {
    setLangMain(englishVersion);
  }
  for (let i = 0; i < 2; i++) {
    navbarList[i].classList.remove("not-visible");
    navbarDropDownList[i].classList.remove("not-visible");
  }
  headerButtonHandler(navbarList);
  dropdownHeaderButtonHandler(navbarDropDownList);
  navbarLogo.removeEventListener("click", renderMainPage);
  window.scrollTo(0, 0);
};
const removeChildNodes = (parent) => {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
};

ourOffer.addEventListener("click", () => {
  renderOfferPage();
});
