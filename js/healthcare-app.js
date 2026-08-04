window.addEventListener("scroll", function () {

    const navbar = document.querySelector(".navbar");

    if (window.scrollY > 50) {

        navbar.style.background = "#000";

    } else {

        navbar.style.background = "rgba(0,0,0,.95)";

    }

});
/* ========================================
   CHAT WIDGET
======================================== */

const chatToggle = document.getElementById("chatToggle");
const chatBox = document.getElementById("chatBox");

chatToggle.addEventListener("click", () => {

    if(chatBox.style.display === "block"){

        chatBox.style.display = "none";

    }else{

        chatBox.style.display = "block";

    }

});

document.addEventListener("click", (e) => {

    if(
        !chatBox.contains(e.target) &&
        !chatToggle.contains(e.target)
    ){

        chatBox.style.display = "none";

    }

});
/* =========================================
   CARD ANIMATION ON SCROLL
========================================= */

const cards = document.querySelectorAll(".feature-card");

window.addEventListener("scroll", () => {

    cards.forEach(card => {

        const cardTop = card.getBoundingClientRect().top;

        if(cardTop < window.innerHeight - 100){

            card.style.opacity = "1";
            card.style.transform = "translateY(0)";

        }

    });

});

/* Initial State */

cards.forEach(card => {

    card.style.opacity = "0";

    card.style.transform = "translateY(50px)";

    card.style.transition = "all .6s ease";

});
/* =========================================
   SCROLL REVEAL ANIMATION
========================================= */

const boxes = document.querySelectorAll(".feature-box");

const observer = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");
        }

    });

},{threshold:0.2});

boxes.forEach(box=>{

    box.classList.add("hidden");

    observer.observe(box);

});
/* =========================================
   LEGACY BOX ANIMATION
========================================= */

const legacyBoxes = document.querySelectorAll(".legacy-box");

legacyBoxes.forEach(box => {

    box.classList.add("hidden");

    observer.observe(box);

});
/* =========================================
   EXPERTISE CARD ANIMATION
========================================= */

const expertiseCards =
document.querySelectorAll(".expertise-card");

expertiseCards.forEach(card => {

    card.classList.add("hidden");

    observer.observe(card);

});

/* =========================================
   INNOVATOR CARD ANIMATION
========================================= */

const innovatorCards =
document.querySelectorAll(".innovator-card");

innovatorCards.forEach(card => {

    card.classList.add("hidden");

    observer.observe(card);

});
/* =========================================
   COUNTER ANIMATION
========================================= */

const counters =
document.querySelectorAll(".counter");

const counterObserver =
new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            const counter = entry.target;

            const target =
            +counter.getAttribute("data-target");

            let count = 0;

            const speed = target / 100;

            const updateCounter = () => {

                count += speed;

                if(count < target){

                    counter.innerText =
                    Math.floor(count);

                    requestAnimationFrame(
                        updateCounter
                    );

                }else{

                    counter.innerText =
                    target.toLocaleString();

                }

            };

            updateCounter();

            counterObserver.unobserve(counter);

        }

    });

},{threshold:0.5});

counters.forEach(counter=>{

    counterObserver.observe(counter);

});
/* =========================================
   TIMELINE SCROLL ANIMATION
========================================= */

const processRows =
document.querySelectorAll(".timeline-row");

const processObserver =
new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show-process");
        }

    });

},{
    threshold:0.2
});

processRows.forEach(row=>{

    row.classList.add("hide-process");

    processObserver.observe(row);

});
/* =========================================
   EMAILJS CONTACT FORM
========================================= */

emailjs.init("k4hYmZNiWMrPbEqRl");

const contactForm =
document.getElementById("contactForm");

const popup =
document.getElementById("successPopup");

const popupText =
document.getElementById("popupText");

contactForm.addEventListener("submit", function(e){

    e.preventDefault();

    const userName =
    document.getElementById("name").value;

    const userEmail =
    document.getElementById("email").value;

    const userMessage =
    document.getElementById("message").value;

    emailjs.send(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        {
            name:userName,
            email:userEmail,
            message:userMessage
        }
    )
    .then(function(){

        popupText.innerHTML =

        `Hi, ${userName}. We got your e-mail.
        We'll reply you very soon.
        Thanks for being with us...`;

        popup.style.display = "block";

        setTimeout(()=>{

            popup.style.display="none";

        },5000);

        contactForm.reset();

    })
    .catch(function(error){

        alert("Message failed to send.");

        console.log(error);

    });

});
/* =====================================
   FAQ ACCORDION
===================================== */

document.addEventListener("DOMContentLoaded", () => {

    const faqItems =
    document.querySelectorAll(".faq-item");

    faqItems.forEach(item => {

        const question =
        item.querySelector(".faq-question");

        question.addEventListener("click", () => {

            faqItems.forEach(faq => {

                if(faq !== item){

                    faq.classList.remove("active");
                }

            });

            item.classList.toggle("active");

        });

    });

});

/* =========================================
   SCHEDULE MEETING CLICK
========================================= */

const meetingBox =
document.querySelector(".meeting-box");

if(meetingBox){

    meetingBox.addEventListener("click", () => {

        window.open(
            "https://calendly.com/",
            "_blank"
        );

    });

}

/* ===== PREMIUM EFFECTS ===== */
window.addEventListener('scroll',()=>{
 const navbar=document.querySelector('.navbar');
 if(navbar){
  if(window.scrollY>50){navbar.classList.add('scrolled')}
  else{navbar.classList.remove('scrolled')}
 }
});

const revealElements=document.querySelectorAll('.section-heading,.features-heading,.smart-left,.legacy-left,.expertise-heading,.innovators-heading,.stats-heading,.process-heading,.contact-wrapper,.launch-heading,.live-app-card,.feature-card,.feature-box,.legacy-box,.expertise-card,.innovator-card,.stat-card');

const premiumObserver=new IntersectionObserver((entries)=>{
 entries.forEach(entry=>{
   if(entry.isIntersecting){entry.target.classList.add('show-reveal');}
 });
},{threshold:0.15});

revealElements.forEach(el=>premiumObserver.observe(el));
