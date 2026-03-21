import { carCards } from "./Data/data.js";
import { CarCard } from "./Components/CarCard.js";

const carGrid = document.getElementById("CarGrid");
carGrid.innerHTML = carCards.map((card) => CarCard(card)).join("");

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
    window.location.href = `http://127.0.0.1:5500/Page_Cars/DetalisCars/index.html?id=${id}`
}