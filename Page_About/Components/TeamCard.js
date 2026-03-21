export function TeamCard({ image, name, role }) {
    return `
        <article class="team-card">
            <img src="${image}" alt="${name}" class="team-card__image">
            <h4 class="team-card__name">${name}</h4>
            <p class="team-card__role">${role}</p>
        </article>
    `;
}
