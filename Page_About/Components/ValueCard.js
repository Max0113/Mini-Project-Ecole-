export function ValueCard({ icon, title, description }) {
    return `
        <article class="value-card">
            <div class="value-card__icon"><i class="${icon}"></i></div>
            <h4 class="value-card__title">${title}</h4>
            <p class="value-card__text">${description}</p>
        </article>
    `;
}
