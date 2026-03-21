export function CardTestimonials({ stars, quote, author }) {
    return (`
        <div class="testimonial-card">
            <h2 class="testimonial-stars">${stars}</h2>
            <p class="testimonial-quote">"${quote}"</p>
            <h1 class="testimonial-author">- ${author}</h1>
        </div>
    `)
}
