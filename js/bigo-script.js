const faqBoxes = document.querySelectorAll('.faq-box');

faqBoxes.forEach(box => {

box.addEventListener('click',()=>{

box.classList.toggle('active');

});

});
