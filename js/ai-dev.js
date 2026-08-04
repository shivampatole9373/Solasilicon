
const modal = document.getElementById('calendlyModal');

document.querySelectorAll('.open-calendly').forEach(btn=>{

btn.addEventListener('click',()=>{

modal.classList.add('active');

});

});

document.querySelector('.close-modal').addEventListener('click',()=>{

modal.classList.remove('active');

});

window.addEventListener('click',(e)=>{

if(e.target===modal){

modal.classList.remove('active');

}

});

window.addEventListener('scroll',()=>{

const nav=document.querySelector('.navbar');

if(window.scrollY>50){

nav.style.background='rgba(5,8,22,.95)';

}else{

nav.style.background='rgba(10,15,35,.65)';

}

});


const modal = document.getElementById('calendlyModal');

document.querySelectorAll('.open-calendly').forEach(btn=>{

btn.addEventListener('click',()=>{

modal.classList.add('active');

});

});

document.querySelector('.close-modal').addEventListener('click',()=>{

modal.classList.remove('active');

});

window.addEventListener('click',(e)=>{

if(e.target===modal){

modal.classList.remove('active');

}

});

window.addEventListener('scroll',()=>{

const nav=document.querySelector('.navbar');

if(window.scrollY>50){

nav.style.background='rgba(5,8,22,.95)';

}else{

nav.style.background='rgba(5,8,22,.88)';

}

});
