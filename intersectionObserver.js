const elementList = document.querySelectorAll(".medicals__token");
console.log(elementList);
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("medicals__token--visible");
    } else {
      entry.target.classList.remove("medicals__token--visible");
    }
  });
});
elementList.forEach((element) => observer.observe(element));
