const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {

    item.addEventListener('mouseenter', () => {

        item.querySelector('span').innerHTML = '-';

    });

    item.addEventListener('mouseleave', () => {

        item.querySelector('span').innerHTML = '+';

    });

});
