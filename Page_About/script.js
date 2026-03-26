import { ValueCard } from "./Components/ValueCard.js";
import { TeamCard } from "./Components/TeamCard.js";
import { AboutAssets, ValuesData, TeamData, NetworkStatsData } from "./Data/data.js";
import { NavbarPrincipal } from "/Components_Globale/Navbar/Navbar.js";
import { Footer } from "/Components_Globale/Footer/Footer.js";

const NavbarElement = document.getElementById("header")
NavbarElement.innerHTML = NavbarPrincipal("About")

const heroImage = document.getElementById("heroImage");
const missionImageOne = document.getElementById("missionImageOne");
const missionImageTwo = document.getElementById("missionImageTwo");
const mapImage = document.getElementById("mapImage");

heroImage.src = AboutAssets.hero;
missionImageOne.src = AboutAssets.missionOne;
missionImageTwo.src = AboutAssets.missionTwo;

const valuesCardsElement = document.getElementById("valuesCards");
valuesCardsElement.innerHTML = ValuesData.map((card) => ValueCard(card)).join("");

const teamCardsElement = document.getElementById("teamCards");
teamCardsElement.innerHTML = TeamData.map((card) => TeamCard(card)).join("");

const networkStatsElement = document.getElementById("networkStats");
networkStatsElement.innerHTML = NetworkStatsData.map((item) => `
    <div>
        <i class="fa-regular fa-circle-check"></i>
        <span>${item}</span>
    </div>
`).join("");

const FooterElement = document.getElementById("footer");
FooterElement.innerHTML = Footer(true);

document.addEventListener("DOMContentLoaded", () => {
    gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

    ScrollSmoother.create({
        smooth: 1,
        effects: true,
        smoothTouch: 0.1
    });
});


