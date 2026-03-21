import { CarData } from "../../DataBase.js";

export const carCards = [...CarData.map((itme) => (
    {
        id : itme.id,
        image: itme.image,
        label: itme.label,
        labelClass: itme.labelClass,
        name: itme.name,
        price: itme.price,
        transmission: itme.transmission,
        transmissionIcon: itme.transmissionIcon,
        fuel: itme.fuel,
        fuelIcon: itme.fuelIcon,
        seats: itme.seats
    }
))]



