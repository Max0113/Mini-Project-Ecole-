import { CardFeatured } from "./Components/CardFeatured.js"
import { CardServices } from "./Components/CardServices.js"
import { CardHowUse } from "./Components/CardHowUse.js"
import { CardTestimonials } from "./Components/CardTestimonials.js"
import { CardFeaturedData , CardServicesData ,  CardHowUseData, CardTestimonialsData } from "./Data/data.js"


const CardFeaturedElement = document.getElementById("CardFeatured")
CardFeaturedElement.innerHTML = CardFeaturedData.map(card => CardFeatured(card)).join("")


const CardServicesElement = document.getElementById("CardServices")
CardServicesElement.innerHTML = CardServicesData.map(card => CardServices(card)).join("")

const CardHowUseElement = document.getElementById("CardHowUse")
CardHowUseElement.innerHTML = CardHowUseData.map(card => CardHowUse(card)).join("")

const CardTestimonialsElement = document.getElementById("CardTestimonials")
CardTestimonialsElement.innerHTML = CardTestimonialsData.map(card => CardTestimonials(card)).join("")

document.addEventListener("DOMContentLoaded", (event) => {
    gsap.registerPlugin(ScrollTrigger,ScrollSmoother)
    ScrollSmoother.create({
        smooth: 1, 
        effects: true, 
        smoothTouch: 0.1 
    });
 });