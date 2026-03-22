import { ContactCard } from "./Components/ContactCard.js";
import { FormField } from "./Components/FormField.js";
import { ContactCardsData, FormFieldsData, SupportAssets } from "./Data/data.js";
import { NavbarPrincipal } from "/Components_Globale/Navbar.js";
import { Footer } from "/Components_Globale/Footer.js";

const NavbarElement = document.getElementById("header");
NavbarElement.innerHTML = NavbarPrincipal("Support");

const heroImage = document.getElementById("supportHero");
heroImage.src = SupportAssets.hero;

const contactCardsElement = document.getElementById("contactCards");
contactCardsElement.innerHTML = ContactCardsData.map((card) => ContactCard(card)).join("");

const formFieldsElement = document.getElementById("formFields");
formFieldsElement.innerHTML = FormFieldsData.map((field) => FormField(field)).join("");

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
