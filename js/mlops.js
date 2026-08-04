
/* MOBILE MENU */

const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

/* FAQ */

const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach((item) => {
  item.querySelector(".faq-question").addEventListener("click", () => {
    item.classList.toggle("active");
  });
});

/* COUNTER */

const counters = document.querySelectorAll(".counter");

const runCounter = () => {
  counters.forEach(counter => {

    const target = +counter.dataset.target;
    const count = +counter.innerText;

    const increment = target / 100;

    if(count < target){
      counter.innerText = Math.ceil(count + increment);
      setTimeout(runCounter, 30);
    }else{
      counter.innerText = target + "+";
    }

  });
};

runCounter();

/* TYPING EFFECT */

const typingElement = document.getElementById("typing");

const words = [
  "AI Automation Systems",
  "Enterprise MLOps Pipelines",
  "Generative AI Solutions",
  "Scalable AI SaaS Platforms"
];

let wordIndex = 0;
let charIndex = 0;
let currentWord = "";
let isDeleting = false;

function typeEffect(){

  currentWord = words[wordIndex];

  if(isDeleting){
    typingElement.textContent =
    currentWord.substring(0, charIndex--);
  }else{
    typingElement.textContent =
    currentWord.substring(0, charIndex++);
  }

  if(!isDeleting && charIndex === currentWord.length){
    isDeleting = true;
    setTimeout(typeEffect, 1200);
    return;
  }

  if(isDeleting && charIndex === 0){
    isDeleting = false;
    wordIndex = (wordIndex + 1) % words.length;
  }

  setTimeout(typeEffect, isDeleting ? 50 : 100);
}

typeEffect();

/* CURSOR GLOW */

const cursor = document.querySelector(".cursor-glow");

document.addEventListener("mousemove", (e)=>{
  cursor.style.left = e.clientX + "px";
  cursor.style.top = e.clientY + "px";
});

/* SCROLL PROGRESS */

const progress = document.querySelector(".scroll-progress");

window.addEventListener("scroll", ()=>{

  const totalHeight =
  document.body.scrollHeight - window.innerHeight;

  const progressHeight =
  (window.pageYOffset / totalHeight) * 100;

  progress.style.width = progressHeight + "%";

});
