/* =========================================================
FAQ
========================================================= */

const faqBoxes=document.querySelectorAll('.faq-box');

faqBoxes.forEach(box=>{

box.addEventListener('click',()=>{

box.classList.toggle('open');

});

});

/* =========================================================
SCROLL REVEAL
========================================================= */

const reveals=document.querySelectorAll('.reveal');

window.addEventListener('scroll',()=>{

reveals.forEach(reveal=>{

const windowHeight=window.innerHeight;
const revealTop=reveal.getBoundingClientRect().top;
const revealPoint=120;

if(revealTop < windowHeight - revealPoint){

reveal.classList.add('active');

}

});

});

/* =========================================================
NAVBAR EFFECT
========================================================= */

window.addEventListener('scroll',()=>{

const nav=document.querySelector('.navbar');

if(window.scrollY > 50){

nav.style.background='rgba(0,0,0,0.75)';
nav.style.padding='14px 8%';

}else{

nav.style.background='rgba(255,255,255,0.08)';
nav.style.padding='18px 8%';

}

});

/* =========================================================
PARALLAX EFFECT
========================================================= */

window.addEventListener('scroll',()=>{

const scroll=window.pageYOffset;

document.querySelector('.hero-images').style.transform=
'translateY(' + scroll * 0.12 + 'px)';

});
