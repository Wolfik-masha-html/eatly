let menuBtn = document.querySelector(".menu__btn");
let link = document.querySelector(".header__link");
let list = document.querySelector(".header__list");

console.log(menuBtn);

menuBtn.addEventListener("click", () => {
  menuBtn.classList.toggle("active");
  list.classList.toggle("active");
});

const opotins = {
  root:null,
  rootMargin:"0px",
  treshold:0.5,
}
function callback(entries,observer){
  entries.forEach(entry => {
    if (entry.isInterSection) {
      console.log("element видимий")
    } else {
      console.log("element невидимий")
    }
  });
}
const observer = new  IntersectionObserver(callback,options)
const Targetelement = document.querySelector(".customers");
observer.observe(Targetelement);
