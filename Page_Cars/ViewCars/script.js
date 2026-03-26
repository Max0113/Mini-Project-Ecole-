import { carCards } from "./Data/data.js";
import { CarCard } from "./Components/CarCard.js";
import { NavbarPrincipal } from "/Components_Globale/Navbar/Navbar.js";
import { FooterShort } from "../../Components_Globale/Footer/Footer.js";

const NavbarElement = document.getElementById("header")
NavbarElement.innerHTML = NavbarPrincipal("Cars")

const carGrid = document.getElementById("CarGrid");
carGrid.innerHTML = carCards.map((card) => CarCard(card)).join("");

const FooterElement = document.getElementById("footer");
FooterElement.innerHTML = FooterShort(false);


document.addEventListener("DOMContentLoaded", (event) => {
    gsap.registerPlugin(ScrollTrigger,ScrollSmoother)
    ScrollSmoother.create({
        smooth: 1, 
        effects: true, 
        smoothTouch: 0.1 
    });
 });

document.querySelectorAll(".rent-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    const id = btn.dataset.id
    goToDetails(id)
  })
})

function goToDetails(id) {
    window.location.href = `/Page_Cars/DetalisCars/index.html?id=${id}`
}