import { CarData } from "../DataBase.js";
import { NavbarSecondary } from "/Components_Globale/Navbar.js";
import { Footer } from "/Components_Globale/Footer.js";

const NavbarElement = document.getElementById("header")
NavbarElement.innerHTML = NavbarSecondary()

const params = new URLSearchParams(window.location.search);
const id = params.get("id");

const data = CarData.find(item => item.id == id);

document.title = `${data.name} - Atlas Drive`;

const PriceElement = document.getElementById("price");
PriceElement.innerHTML = `$${data.price}`;

const RatingElement = document.getElementById("rating");
RatingElement.innerHTML = data.rating;

const ReviewsElement = document.getElementById("reviews");
ReviewsElement.innerHTML = `(${data.Reviews} Reviews)`;

const PriceX4Element = document.getElementById("priceX4");
PriceX4Element.innerHTML = `$${data.price * 4}`;

const priceTotalElement = document.getElementById("priceTotal");
priceTotalElement.innerHTML = `$${Number(data.price)*4 + 35 + 15}`;

const titleElement = document.getElementById("title");
titleElement.innerHTML = `${data.year} ${data.name}`;

const descriptionElement = document.getElementById("description");
descriptionElement.innerHTML = data.description;

const engineElement = document.getElementById("engine");
engineElement.innerHTML = data.engine;

const transmissionDetailElement = document.getElementById("transmission");
transmissionDetailElement.innerHTML = data.transmissionDetail;

const fuelElement = document.getElementById("fuel");
fuelElement.innerHTML = data.fuelEfficiency;

const seatingElement = document.getElementById("seating");
seatingElement.innerHTML = data.seating;

const imageElement = document.getElementById("image");
imageElement.src = data.image;

const FooterElement = document.getElementById("footer");
FooterElement.innerHTML = Footer(false);


document.addEventListener("DOMContentLoaded", (event) => {
    gsap.registerPlugin(ScrollTrigger,ScrollSmoother)
    ScrollSmoother.create({
        smooth: 1, 
        effects: true, 
        smoothTouch: 0.1 
    });
 });