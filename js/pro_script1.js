// ================= MOBILE MENU =================

const menuToggle = document.getElementById("menuToggle");
const navRight = document.querySelector(".nav-right");

menuToggle.addEventListener("click", () => {

  navRight.classList.toggle("active");
});

// ================= FAQ =================

const faqCards = document.querySelectorAll(".faq-card");

faqCards.forEach(card => {

    card.addEventListener("mouseenter", () => {

        card.classList.add("active");

    });

    card.addEventListener("mouseleave", () => {

        card.classList.remove("active");

    });

});

// ================= NAVBAR SCROLL =================

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if(window.scrollY > 50){

        navbar.classList.add("scrolled");

    }

    else{

        navbar.classList.remove("scrolled");

    }

});
// ================= SCROLL REVEAL =================

const reveals = document.querySelectorAll(`
.hero-left,
.hero-right,
.about-grid,
.feature-card,
.mobile-left,
.mobile-right,
.testimonial-card,
.pricing-box,
.faq-left,
.faq-item,
.footer-grid
`);

function revealOnScroll(){

  reveals.forEach((element, index) => {

    const windowHeight = window.innerHeight;

    const revealTop =
    element.getBoundingClientRect().top;

    const revealPoint = 120;

    if(revealTop < windowHeight - revealPoint){

      setTimeout(() => {

        element.classList.add("active-reveal");

      }, index * 80);

    }

  });

}

window.addEventListener("scroll", revealOnScroll);

revealOnScroll();

// ================= HERO TYPING EFFECT =================

const heroTitle = document.querySelector(".hero-left h1");

const text = heroTitle.innerText;

heroTitle.innerHTML = "";

let i = 0;

function typingEffect(){

  if(i < text.length){

    heroTitle.innerHTML += text.charAt(i);

    i++;

    setTimeout(typingEffect, 70);

  }

}

typingEffect();

// ================= FEATURE CARD GLOW =================

const featureCards =
document.querySelectorAll(".feature-card");

featureCards.forEach(card => {

  card.addEventListener("mousemove", (e) => {

    const rect = card.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    card.style.setProperty("--x", `${x}px`);
    card.style.setProperty("--y", `${y}px`);

  });

});

// ================= IMAGE ZOOM =================

const allImages = document.querySelectorAll("img");

allImages.forEach(img => {

  img.addEventListener("mouseenter", () => {

    img.style.transform = "scale(1.05)";

  });

  img.addEventListener("mouseleave", () => {

    img.style.transform = "scale(1)";

  });

});

// ================= BUTTON RIPPLE =================

const buttons = document.querySelectorAll(".btn, button");

buttons.forEach(btn => {

  btn.addEventListener("click", function(e){

    const x = e.clientX - e.target.offsetLeft;
    const y = e.clientY - e.target.offsetTop;

    const ripple = document.createElement("span");

    ripple.classList.add("ripple");

    ripple.style.left = `${x}px`;
    ripple.style.top = `${y}px`;

    this.appendChild(ripple);

    setTimeout(() => {

      ripple.remove();

    }, 600);

  });

});

// ================= CUSTOM CURSOR =================

const cursor = document.createElement("div");

cursor.classList.add("custom-cursor");

document.body.appendChild(cursor);

document.addEventListener("mousemove", (e) => {

  cursor.style.left = e.clientX + "px";
  cursor.style.top = e.clientY + "px";

});

document.querySelectorAll("a, button").forEach(el => {

  el.addEventListener("mouseenter", () => {

    cursor.classList.add("cursor-grow");

  });

  el.addEventListener("mouseleave", () => {

    cursor.classList.remove("cursor-grow");

  });

});

// ================= WHATSAPP CONNECT =================

const whatsappButtons = document.querySelectorAll(`
.nav-btn,
.btn.secondary,
.faq-btn
`);

whatsappButtons.forEach(button => {

    button.addEventListener("click", () => {

        window.open(
            "https://wa.me/917020698117?text=Hello%20Solasilicon,%20I%20want%20to%20connect%20with%20you",
            "_blank"
        );

    });

});

// ================= CALENDLY POPUP =================

const demoButtons =
document.querySelectorAll(".demo-btn");

demoButtons.forEach(button => {

    button.addEventListener("click", () => {

        Calendly.initPopupWidget({

            url:
            "https://calendly.com/solasilicon/30min"

        });

        return false;

    });

});

// ================= AI CHATBOT =================

const chatbotToggle =
document.getElementById("chatbotToggle");

const chatbotBox =
document.getElementById("chatbotBox");

const chatbotClose =
document.getElementById("chatbotClose");

const sendBtn =
document.getElementById("sendBtn");

const chatInput =
document.getElementById("chatInput");

const chatMessages =
document.getElementById("chatMessages");

// OPEN CHAT

chatbotToggle.addEventListener("click", () => {

    chatbotBox.classList.toggle("active");

});

// CLOSE CHAT

chatbotClose.addEventListener("click", () => {

    chatbotBox.classList.remove("active");

});

// SEND MESSAGE

function sendMessage(){

    const message =
    chatInput.value.trim();

    if(message === "") return;

    // USER MESSAGE

    const userDiv =
    document.createElement("div");

    userDiv.classList.add("user-message");

    userDiv.innerText = message;

    chatMessages.appendChild(userDiv);

    // AUTO SCROLL

    chatMessages.scrollTop =
    chatMessages.scrollHeight;

    // BOT REPLY

    setTimeout(() => {

        const botDiv =
        document.createElement("div");

        botDiv.classList.add("bot-message");

        botDiv.innerText =
        getBotReply(message);

        chatMessages.appendChild(botDiv);

        chatMessages.scrollTop =
        chatMessages.scrollHeight;

    }, 700);

    chatInput.value = "";

}

// BUTTON CLICK

sendBtn.addEventListener("click", sendMessage);

// ENTER KEY

chatInput.addEventListener("keypress", (e) => {

    if(e.key === "Enter"){

        sendMessage();

    }

});

// BOT ANSWERS

function getBotReply(message){

    const msg = message.toLowerCase();

    if(msg.includes("price")){

        return "Our pricing depends on your project requirements. Please click on Get Pricing Details or contact us on WhatsApp.";

    }

    else if(msg.includes("demo")){

        return "You can book a live demo by clicking the Book a Demo button on the homepage.";

    }

    else if(msg.includes("services")){

        return "We provide AI solutions, OLX Clone scripts, mobile app development, SaaS products, and enterprise solutions.";

    }

    else if(msg.includes("contact")){

        return "You can connect with us through WhatsApp or the contact form available on the website.";

    }

    else if(msg.includes("hello")){

        return "Hello 👋 Welcome to Solasilicon. How may I help you?";

    }

    else{

        return "Thanks for your message. Our support team will contact you shortly.";

    }

}