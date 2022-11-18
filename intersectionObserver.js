const medical_list = document.querySelectorAll(".medicals__token");
const offer_token = document.querySelectorAll(".our__offer");
console.log(offer_token);
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
