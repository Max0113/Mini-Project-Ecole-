import { ContactCard } from "./Components/ContactCard.js";
import { ContactCardsData, SupportAssets } from "./Data/data.js";
import { NavbarPrincipal } from "/Components_Globale/Navbar/Navbar.js";
import { Footer } from "/Components_Globale/Footer/Footer.js";

const NavbarElement = document.getElementById("header");
NavbarElement.innerHTML = NavbarPrincipal("Support");

const heroImage = document.getElementById("supportHero");
heroImage.src = SupportAssets.hero;

const contactCardsElement = document.getElementById("contactCards");
contactCardsElement.innerHTML = ContactCardsData.map((card) => ContactCard(card)).join("");

const FooterElement = document.getElementById("footer");
FooterElement.innerHTML = Footer(true);

const formElement = document.querySelector(".support-form");
formElement.addEventListener("submit", (event) => {
    event.preventDefault();
});

document.addEventListener("DOMContentLoaded", () => {
    gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
    ScrollSmoother.create({
        smooth: 1,
        effects: true,
        smoothTouch: 0.1
    });
});

// Email req

const form_name    = document.getElementById("form_name");
const form_email   = document.getElementById("form_email");
const inquiry_type = document.getElementById("form_inquiry");
const message      = document.getElementById("form_message");


document.querySelector("#Send").addEventListener("click", function () {

    var Data = {
        title        : "Support",
        to_name      : "CEO",
        form_name    : form_name.value,
        form_email   : form_email.value,
        inquiry_type : inquiry_type.value,
        message      : message.value
    };

    emailjs.send('service_b8wgqus', 'template_5te6zo4', Data).then(
        (response) => {
            form_name.value    = "";
            form_email.value   = "";
            inquiry_type.value = "";
            message.value      = "";
            alert('SUCCESS! ✅')
            console.log('SUCCESS!', response.status, response.text);
        },
        (error) => {
            alert('FAILED! ❎')
            console.log('FAILED...', error);
        },
    );
})
