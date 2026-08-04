// ================= CHATBOT =================

const chatbotToggle =
document.querySelector(".chatbot-toggle");

const chatbotBox =
document.querySelector(".chatbot-box");

chatbotToggle.onclick = () => {

    chatbotBox.classList.toggle("active");

};

const sendBtn =
document.getElementById("sendBtn");

const chatInput =
document.getElementById("chatInput");

const chatMessages =
document.getElementById("chatMessages");

sendBtn.onclick = sendMessage;

chatInput.addEventListener("keypress", (e) => {

    if(e.key === "Enter"){

        sendMessage();

    }

});

function sendMessage(){

    const message =
    chatInput.value.trim();

    if(message === "") return;

    chatMessages.innerHTML += `
    <div class="user-message">
        ${message}
    </div>
    `;

    let reply =
    "Our platform includes AI features, premium plans, admin dashboard and monetization tools.";

    if(message.toLowerCase().includes("price")){

        reply =
        "Pricing depends on customization and selected features.";

    }

    if(message.toLowerCase().includes("demo")){

        reply =
        "Click on Schedule Demo button to book your meeting.";

    }

    if(message.toLowerCase().includes("whatsapp")){

        reply =
        "Use the WhatsApp button on top right to connect instantly.";

    }

    if(message.toLowerCase().includes("android")){

        reply =
        "Yes, our platform supports Android, iOS and Web.";

    }

    setTimeout(() => {

        chatMessages.innerHTML += `
        <div class="bot-message">
            ${reply}
        </div>
        `;

        chatMessages.scrollTop =
        chatMessages.scrollHeight;

    },700);

    chatInput.value = "";

}

// ================= REVEAL =================

const reveals =
document.querySelectorAll(".reveal");

window.addEventListener("scroll", revealElements);

function revealElements(){

    reveals.forEach(reveal => {

        const windowHeight =
        window.innerHeight;

        const revealTop =
        reveal.getBoundingClientRect().top;

        if(revealTop < windowHeight - 100){

            reveal.classList.add("active");

        }

    });

}

revealElements();
