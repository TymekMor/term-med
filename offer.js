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

const mainPage = document.getElementById("mainPage");
const offerPage = document.getElementById("offerPage");
const mainContainer = document.querySelector("main");

const renderOfferPage = () => {
  removeChildNodes(mainContainer);
  document.body.dataset.page = "offer";
  const cloneOfferPage = offerPage.content.cloneNode(true);
  const gobackButton = document.createElement("button");
  gobackButton.textContent = "GO BACK";
  gobackButton.addEventListener("click", renderMainPage);
  mainContainer.appendChild(cloneOfferPage);
  mainContainer.appendChild(gobackButton);
  window.scrollTo(0, 0);
};
const renderMainPage = () => {
  removeChildNodes(mainContainer);
  document.body.dataset.page = "main";
  const cloneMainPage = mainPage.content.cloneNode(true);
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
