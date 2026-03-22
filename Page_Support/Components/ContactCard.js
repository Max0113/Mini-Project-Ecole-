export function ContactCard({ icon, title, lines, note }) {
    const linesMarkup = lines.map((line) => `<span>${line}</span>`).join("");

    return `
        <article class="contact-card">
            <div class="contact-icon">
                <i class="${icon}"></i>
            </div>
            <div>
                <div class="contact-title">${title}</div>
                <div class="contact-lines">
                    ${linesMarkup}
                </div>
                ${note ? `<div class="contact-note">${note}</div>` : ""}
            </div>
        </article>
    `;
}
