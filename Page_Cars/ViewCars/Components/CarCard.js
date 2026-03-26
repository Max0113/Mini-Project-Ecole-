export function CarCard({
    id,
    image,
    label,
    labelClass,
    name,
    price,
    transmission,
    transmissionIcon,
    fuel,
    fuelIcon,
    seats
}) {
    return (`
        <div class="car-card">
            <div class="car-card__media">
                <img src="${image}" alt="${name}" class="car-card__image" />
                <button class="car-card__fav">
                    <i class="fa-regular fa-heart"></i>
                </button>
                <span class="car-card__label ${labelClass}">${label}</span>
            </div>
            <div class="car-card__body">
                <div class="car-card__header">
                    <h3 class="car-card__name">${name}</h3>
                    <div class="car-card__price">
                        <span class="car-card__price-value">$${price}</span>
                        <span class="car-card__price-unit">/day</span>
                    </div>
                </div>
                <div class="car-card__meta">
                    <span class="car-card__meta-item">
                        <i class="${transmissionIcon}"></i>
                        ${transmission}
                    </span>
                    <span class="car-card__meta-item">
                        <i class="${fuelIcon}"></i>
                        ${fuel}
                    </span>
                    <span class="car-card__meta-item">
                        <i class="fa-solid fa-user-group"></i>
                        ${seats} Seats
                    </span>
                </div>
                <button data-id="${id}" class="car-card__cta rent-btn">
                    Rent Now
                    <i class="fa-solid fa-arrow-right car-card__cta-icon"></i>
                </button>
            </div>
        </div>
    `);
}
