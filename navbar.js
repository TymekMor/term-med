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
console.log(navbarDropDownList);
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
    "We deliver our products to the biggest wholesales and pharmacies in Poland. Market dynamics challenges us every day. The underlying rule of Term-Med company is to deliver quality products at a favorable price. Thanks to such policy, we meet our challenges and compete with products from international manufacturers. ",
  ],
  sectionTwo: "View our offer",
  // OFFER PAGE ------
  header: [
    "Our Mission",
    "Our mission is to help Polish hospitals. We fullfill it by distributing essential medical products.",
    "Go back to main page",
  ],
  products: [
    "Disposable syringes 2, 5, 10, 20 ml",
    "Tongue depressors",
    "Infusion sets",
    "Catheters",
    "Daily urine collection bags for boys and girls",
    "Injection needles",
    "Uringe bags for girls",
    "Urine bags for boys",
    "Nasal aspirator for kids",
    "Thermally insulated bags for medical products",
  ],
  address: [
    "Dygasińskiego 5 street",
    "Poland",
  ],
};
const polishVersion = {
  id: "PL",
  navbarText: ["O nas", "Produkty", "Kontakt"],
  sectionOne: [
    "WITAMY W TERM-MED",
    "Jesteśmy Polską firmą z ponad 15 letnim doświadczeniem. Od 2005 roku zdobywamy doświadczenie i wiedzę, które pozwoliły nam osiągnąć stabilną pozycję na rynku.",
    "Specjalizujemy się w dostarczaniu wyrobów medycznych jednorazowego użytku i środków pomocniczych",
    "Dostarczamy produkty do największych hurtowni i aptek w Polsce Dynamika rynku produktów medycznych codziennie stawia przed nami nowe wyzwania. Term-Med oferuje swoje produkty tylko w dobrej jakości icenie, dlatego możemy sprostać stawianym przez rynek wyzwaniom ikonkurować z produktami międzynarodowych wytwórców, przy jednoczesnym zachowaniu korzystnego poziomu cen.",
  ],
  sectionTwo: "Poznaj naszą ofertę",
  // OFFER PAGE ------
  header: [
    "Nasza Misja",
    "Naszą misją jest pomoc Polskim szpitalom. Wypełniamy ją codziennie dystrybuując niezbędne wyroby medyczne",
    "Powrót do strony głównej",
  ],
  products: [
    "Strzykawki jednorazowe 2, 5, 10, 20 ml",
    "Szpatułki laryngologiczne",
    "Przyrządy do przetaczania płynów infuzyjnych",
    "Kaniule dożylne",
    "Woreczki do dobowej zbiórki moczu dla dziewczynek i chłopców",
    "Igły iniekcyjne",
    "Woreczek do zbiórki moczu dla dziewczynek",
    "Woreczek do zbiórki moczu dla chłopców",
    "Aspirator do nosa dla dzieci",
    "Torby temoizolacyjne na leki",

  ],
  address: [
    "ul.Dygasińskiego 5",
    "Polska",
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
const changeLanugageOffer = () => {
  if (document.body.dataset.lang === "PL") {
    setLangOffer(englishVersion);
    document.body.dataset.lang = englishVersion.id;
  } else {
    setLangOffer(polishVersion);
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
const setLangOffer = (version) => {
  setLanguageNavbar(version);
  const headerElements = document
    .querySelector("main")
    .querySelector("header")
    .querySelectorAll("h1, p, button");
  const productsElements = document
    .querySelector("main")
    .querySelector(".deafult__section__offer__products")
    .querySelectorAll("h1");
  for (let i = 0; i < version.header.length; i++) {
    headerElements[i].textContent = version.header[i];
  }
  for (let i = 0; i < version.products.length; i++) {
    productsElements[i].textContent = version.products[i];
  }
};
const setLanguageNavbar = (version) => {
  for (let i = 0; i < version.navbarText.length; i++) {
    navbarList[i].textContent = version.navbarText[i];
    navbarDropDownList[i].textContent = version.navbarText[i];
  }
  footer.querySelector("h1").textContent = version.navbarText[2];
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
  const mainSections = document
    .querySelector("main")
    .querySelectorAll(".default__section__one, .default__section__two");
  const sectionsToScroll = [...mainSections];
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
  const sectionsToScroll = [...mainSections];
  const tempFunction = () => {
    hamburgerMenu.classList.remove("open");
    document.body.classList.remove("disable__scrolling");
    navbarDropDown.classList.remove("visible");
  };
  for (let i = 0; i < sectionsToScroll.length; i++) {
    console.log(elements[i]);
    elements[i].addEventListener("click", () => {
      sectionsToScroll[i].scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    });
    elements[i].addEventListener("click", tempFunction);
    console.log("wtf");
  }
};

window.onload = () => {
  headerButtonHandler(navbarList);
  dropdownHeaderButtonHandler(navbarDropDownList);
  navbarList[2].addEventListener("click", () => {
    footer.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  });
  navbarDropDownList[2].addEventListener("click", () => {
    hamburgerMenu.classList.toggle("open");
    document.body.classList.toggle("disable__scrolling");
    navbarDropDown.classList.toggle("visible");
    footer.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  });
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
  navbarLogo.addEventListener("click", () => {
    navbarDropDown.classList.remove("visible");
    document.body.classList.remove("disable__scrolling");
    hamburgerMenu.classList.remove("open");
  });

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

footer.querySelector(".footer__logo").addEventListener("click", () => {
  window.scrollTo(0, 0);
});
