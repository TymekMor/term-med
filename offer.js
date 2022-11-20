const ourOffer = document.getElementById("our__offer");
const Sections = document.querySelectorAll(
  ".default__section__one, .default__section__two"
);
const offerSection = document.getElementById("sectionOffer");
const ourOfferHandler = () => {
  Sections.forEach((section) => {
    section.classList.toggle("not__visible");
  });
  offerSection.classList.toggle("not__visible");
};
ourOffer.addEventListener("click", ourOfferHandler);
