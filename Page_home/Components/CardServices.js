export function CardServices({Icon , Title,  Description }) {
    return (`
        <div class="card-services">
                <div class="card-services-bg">
                    <div><i class="${Icon} card-services-icon"></i></div>
                </div>
                <h1 class="card-services-title">${Title}</h1>
                <p class="card-services-description">${Description}</p>
        </div>
    `)
}