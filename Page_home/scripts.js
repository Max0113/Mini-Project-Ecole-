import { CardFeatured } from "./Components/CardFeatured.js";
import { CardServices } from "./Components/CardServices.js";
import { CardHowUse } from "./Components/CardHowUse.js";
import { CardTestimonials } from "./Components/CardTestimonials.js";
import { CardFeaturedData, CardServicesData, CardHowUseData, CardTestimonialsData } from "./Data/data.js";
import { NavbarPrincipal } from "/Components_Globale/Navbar/Navbar.js";
import { Footer } from "/Components_Globale/Footer/Footer.js";

const NavbarElement = document.getElementById("header");
NavbarElement.innerHTML = NavbarPrincipal("Home");

const CardFeaturedElement = document.getElementById("CardFeatured");
CardFeaturedElement.innerHTML = CardFeaturedData.map((card) => CardFeatured(card)).join("");

const CardServicesElement = document.getElementById("CardServices");
CardServicesElement.innerHTML = CardServicesData.map((card) => CardServices(card)).join("");

const CardHowUseElement = document.getElementById("CardHowUse");
CardHowUseElement.innerHTML = CardHowUseData.map((card) => CardHowUse(card)).join("");

const CardTestimonialsElement = document.getElementById("CardTestimonials");
CardTestimonialsElement.innerHTML = CardTestimonialsData.map((card) => CardTestimonials(card)).join("");

const FooterElement = document.getElementById("footer");
FooterElement.innerHTML = Footer(false);

document.addEventListener("DOMContentLoaded", (event) => {
    gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
    ScrollSmoother.create({
        smooth: 1,
        effects: true,
        smoothTouch: 0.1
    });
});


console.log(window.innerWidth)