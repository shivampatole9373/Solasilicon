
/* MOBILE MENU */

const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("navMenu");

hamburger.addEventListener("click", () => {
navMenu.classList.toggle("active");
});

/* CURSOR */

const cursor = document.querySelector(".cursor");
const blur = document.querySelector(".cursor-blur");

document.addEventListener("mousemove",(e)=>{

cursor.style.left = e.clientX + "px";
cursor.style.top = e.clientY + "px";

blur.style.left = (e.clientX - 140) + "px";
blur.style.top = (e.clientY - 140) + "px";

});

/* PARTICLES */

const particles = document.getElementById("particles");

for(let i=0;i<70;i++){

const particle = document.createElement("span");

particle.classList.add("particle");

particle.style.left = Math.random()*100 + "vw";

particle.style.width =
particle.style.height =
Math.random()*5 + "px";

particle.style.animationDuration =
5 + Math.random()*10 + "s";

particle.style.opacity = Math.random();

particles.appendChild(particle);

}

/* REVEAL */

const reveals = document.querySelectorAll(".reveal");

window.addEventListener("scroll",()=>{

reveals.forEach((el)=>{

const top = el.getBoundingClientRect().top;

if(top < window.innerHeight - 100){
el.classList.add("active");
}

});

});

/* FAQ */

const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach((item)=>{

const question = item.querySelector(".faq-question");

question.addEventListener("click",()=>{

item.classList.toggle("active");

const icon = item.querySelector("span");

icon.innerText =
item.classList.contains("active")
? "−"
: "+";

});

});

/* COUNTER */

const counters = document.querySelectorAll(".counter");

counters.forEach((counter)=>{

const update = ()=>{

const target = +counter.getAttribute("data-target");
const current = +counter.innerText;

const increment = target / 100;

if(current < target){

counter.innerText =
`${Math.ceil(current + increment)}`;

setTimeout(update,20);

}else{

counter.innerText = target + "+";

}

};

update();

});

/* MODAL */

const modal = document.getElementById("modal");
const demoBtn = document.getElementById("demoBtn");
const closeModal = document.getElementById("closeModal");

demoBtn.addEventListener("click",()=>{
modal.classList.add("active");
});

closeModal.addEventListener("click",()=>{
modal.classList.remove("active");
});

/* BACK TO TOP */

const backTop = document.getElementById("backTop");

backTop.addEventListener("click",()=>{

window.scrollTo({
top:0,
behavior:"smooth"
});

});

/* FORM */

const form = document.getElementById("form");

form.addEventListener("submit",(e)=>{

e.preventDefault();

alert("Message Sent Successfully!");

});

/* TYPING EFFECT */

const texts = [
"Enterprise AI Systems",
"LLM Infrastructure",
"AI SaaS Platforms",
"Generative AI Products"
];

let count = 0;
let index = 0;
let currentText = "";
let letter = "";

(function type(){

if(count === texts.length){
count = 0;
}

currentText = texts[count];

letter = currentText.slice(0, ++index);

document.getElementById("typing").textContent = letter;

if(letter.length === currentText.length){

setTimeout(()=>{
index = 0;
count++;
type();
},1500);

}else{

setTimeout(type,90);

}

})();

/* MAGNETIC BUTTON */

const magneticButtons =
document.querySelectorAll(".magnetic-btn");

magneticButtons.forEach((btn)=>{

btn.addEventListener("mousemove",(e)=>{

const position = btn.getBoundingClientRect();

const x =
e.clientX - position.left - position.width/2;

const y =
e.clientY - position.top - position.height/2;

btn.style.transform =
`translate(${x*0.15}px,${y*0.15}px)`;

});

btn.addEventListener("mouseleave",()=>{
btn.style.transform = "translate(0px,0px)";
});

});