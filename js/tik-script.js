
const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {

item.addEventListener('click', () => {

faqItems.forEach(faq => {
faq.classList.remove('active');
});

item.classList.add('active');

});

});
