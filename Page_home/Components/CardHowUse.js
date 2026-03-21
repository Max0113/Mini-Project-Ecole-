export function CardHowUse({number , title,  description }) {
    return (`
       <div class="cardhowuse">
                <div class="cardhowuse-part1">
                    <div class="cardhowuse-bg">
                        <h1 class="cardhowuse-number">${number}</h1>
                    </div>
                </div>
                <div class="cardhowuse-part2">
                    <h1 class="cardhowuse-title">${title}</h1>
                    <p class="cardhowuse-description">${description}</p>
                </div>
        </div>
    `)
}