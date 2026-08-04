// ================= SCROLL REVEAL =================

function revealSections(){

const reveals = document.querySelectorAll(".reveal");

reveals.forEach((section)=>{

const windowHeight = window.innerHeight;
const revealTop = section.getBoundingClientRect().top;
const revealPoint = 120;

if(revealTop < windowHeight - revealPoint){

section.classList.add("active");

}

});

}

window.addEventListener("scroll",revealSections);

revealSections();

// ================= COUNTER =================

const counters = document.querySelectorAll('.counter');

const speed = 200;

counters.forEach(counter => {

const updateCount = () => {

const target = +counter.getAttribute('data-target');

const count = +counter.innerText;

const inc = target / speed;

if(count < target){

counter.innerText = Math.ceil(count + inc);

setTimeout(updateCount, 15);

}else{

counter.innerText = target;

}

};

updateCount();

});
