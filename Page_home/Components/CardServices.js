export function CardServices({Icon , Title,  Description }) {
    return (`
        <div class="bg-white h-65 w-80 rounded-2xl flex flex-col justify-center items-center text-center px-5 gap-3 cursor-pointer hover:-translate-y-1.5 transition-all duration-400 ease-in-out">
                <div class="bg-[#F1F5F9] w-15 h-15 flex justify-center items-center rounded-xl"><i class="${Icon} text-[2rem] text-[#1152D4]"></i></div>
                <h1 class="font-extrabold text-[1.2rem]">${Title}</h1>
                <p class="font-extralight text-[#64748B] text-[0.85rem]">${Description}</p>
        </div>
    `)
}