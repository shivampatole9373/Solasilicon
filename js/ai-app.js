/* =====================================================
PARTICLES
===================================================== */

const particles=document.getElementById('particles');

for(let i=0;i<80;i++){

const span=document.createElement('span');

span.style.left=Math.random()*100+'%';
span.style.top=Math.random()*100+'%';

span.style.animationDuration=
Math.random()*10+10+'s';

span.style.animationDelay=
Math.random()*5+'s';

particles.appendChild(span);

}

/* =====================================================
NAVBAR SCROLL
===================================================== */

window.addEventListener('scroll',()=>{

const header=document.getElementById('header');

header.classList.toggle('scrolled',window.scrollY>50);

});

/* =====================================================
MOBILE MENU
===================================================== */

const hamburger=document.getElementById('hamburger');
const navLinks=document.getElementById('navLinks');

hamburger.addEventListener('click',()=>{

navLinks.classList.toggle('active');

});

/* =====================================================
REVEAL
===================================================== */

function reveal(){

const reveals=document.querySelectorAll('.reveal');

reveals.forEach(r=>{

const windowHeight=window.innerHeight;

const revealTop=r.getBoundingClientRect().top;

if(revealTop<windowHeight-100){

r.classList.add('active');

}

});

}

window.addEventListener('scroll',reveal);

reveal();

/* =====================================================
FAQ
===================================================== */

const faqItems=document.querySelectorAll('.faq-item');

faqItems.forEach(item=>{

const q=item.querySelector('.faq-question');

q.addEventListener('click',()=>{

item.classList.toggle('active');

});

});

/* =====================================================
COUNTER
===================================================== */

const counters=document.querySelectorAll('.counter');

counters.forEach(counter=>{

const update=()=>{

const target=+counter.getAttribute('data-target');

const c=+counter.innerText;

const increment=target/100;

if(c<target){

counter.innerText=Math.ceil(c+increment);

setTimeout(update,20);

}else{

counter.innerText=target+'+';

}

};

update();

});

/* =====================================================
TOP BUTTON
===================================================== */

document.getElementById('topBtn').onclick=()=>{

window.scrollTo({
top:0,
behavior:'smooth'
});

};

/* =====================================================
MODAL
===================================================== */

const modal=document.getElementById('modal');

document.getElementById('demoBtn').onclick=()=>{

modal.style.display='flex';

};

document.getElementById('closeModal').onclick=()=>{

modal.style.display='none';

};

window.onclick=(e)=>{

if(e.target===modal){

modal.style.display='none';

}

};

/* =====================================================
FORM
===================================================== */

document.getElementById('contactForm')
.addEventListener('submit',(e)=>{

e.preventDefault();

alert('Message Sent Successfully!');

});

/* =====================================================
PARALLAX
===================================================== */

document.addEventListener('mousemove',(e)=>{

const x=e.clientX/window.innerWidth;
const y=e.clientY/window.innerHeight;

document.querySelectorAll('.blob').forEach(blob=>{

blob.style.transform=
`translate(${x*30}px,${y*30}px)`;

});

});
