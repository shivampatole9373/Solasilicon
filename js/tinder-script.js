// NAVBAR

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if(window.scrollY > 50){

        navbar.classList.add("scrolled");

    }

    else{

        navbar.classList.remove("scrolled");

    }

});

// FAQ

const faqCards =
document.querySelectorAll(".faq-card");

faqCards.forEach(card => {

    card.addEventListener("click", () => {

        card.classList.toggle("active");

    });

});

// CHATBOT

const chatbotToggle =
document.querySelector(".chatbot-toggle");

const chatbotBox =
document.querySelector(".chatbot-box");

const sendBtn =
document.getElementById("sendBtn");

const chatInput =
document.getElementById("chatInput");

const chatMessages =
document.getElementById("chatMessages");

chatbotToggle.addEventListener("click", () => {

    chatbotBox.classList.toggle("active");

});


function sendMessage(){

    const message =
    chatInput.value.trim();

    if(message === "") return;

    const userDiv =
    document.createElement("div");

    userDiv.classList.add("user-message");

    userDiv.innerText = message;

    chatMessages.appendChild(userDiv);

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

sendBtn.addEventListener("click", sendMessage);

chatInput.addEventListener("keypress", (e) => {

    if(e.key === "Enter"){

        sendMessage();

    }

});

function getBotReply(message){

    const msg = message.toLowerCase();

    if(msg.includes("price")){

        return "Pricing depends on customization requirements.";

    }

    else if(msg.includes("demo")){

        return "Click on Schedule a Demo button to book a meeting.";

    }

    else if(msg.includes("hello")){

        return "Hello 👋 Welcome to SoulMatch.";

    }

    else{

        return "Our support team will contact you soon.";

    }

}

// ================= ADVANCED CARD PARALLAX =================

const advancedCards =
document.querySelectorAll(".advanced-card");

advancedCards.forEach(card => {

    card.addEventListener("mousemove", (e) => {

        const rect =
        card.getBoundingClientRect();

        const x =
        e.clientX - rect.left;

        const y =
        e.clientY - rect.top;

        const rotateY =
        ((x / rect.width) - 0.5) * 10;

        const rotateX =
        ((y / rect.height) - 0.5) * -10;

        card.style.transform =
        `
        perspective(1000px)
        rotateX(${rotateX}deg)
        rotateY(${rotateY}deg)
        translateY(-10px)
        `;

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform =
        "perspective(1000px) rotateX(0) rotateY(0)";

    });

});

// ================= FORM BUTTON EFFECT =================

const pricingBtn =
document.querySelector(".pricing-form button");

pricingBtn.addEventListener("mouseenter", () => {

    pricingBtn.innerHTML =
    "Send Me Pricing Details 🚀";

});

pricingBtn.addEventListener("mouseleave", () => {

    pricingBtn.innerHTML =
    "Generate Pricing Link";

});

// ================= REVEAL ANIMATION =================

const reveals =
document.querySelectorAll(".reveal");

window.addEventListener("scroll", () => {

    reveals.forEach(reveal => {

        const windowHeight =
        window.innerHeight;

        const revealTop =
        reveal.getBoundingClientRect().top;

        if(revealTop < windowHeight - 100){

            reveal.classList.add("active-reveal");

        }

    });

});