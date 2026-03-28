export function CardFeatured ({Url , Title, Price, Description, Icon, titleIcon, Number }) {
    return (`
        <div onclick="window.location.href='/Page_Cars/ViewCars/index.html'" class="featured-cars">
                <img src="../Source/Assets_Home/${Url}" class="featured-cars-imge" alt="Car" />
                <div class="featured-cars-body">
                    <div class="featured-cars-part1">
                        <div class="featured-cars-flex1">
                            <h1 class="featured-cars-title">${Title}</h1>
                            <div class="featured-cars-price">$${Price}/day</div>
                        </div>
                        <p class="featured-cars-description">${Description}</p>
                    </div>
                    <div class="featured-cars-part2">
                        <p class="featured-cars-title-flex2_1">
                            <i class="${Icon} featured-cars-icon"></i>   
                            <span class="featured-cars-icon-title">${titleIcon}</span>
                        </p>
                        <p class="featured-cars-flex2_2">
                            <i class="fa-solid fa-user-group featured-cars-icon"></i>
                            <span class="featured-cars-icon-title">${Number} Seats</span>
                        </p>
                    </div>
                </div>
        </div>
    `)
}