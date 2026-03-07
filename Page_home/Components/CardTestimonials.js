export function CardTestimonials({ stars, quote, author }) {
    return (`
        <div class="bg-[#ffffff1a] shadow-[#4a7adb] h-58 w-120 rounded-2xl flex flex-col justify-center items-center text-center px-8 gap-4  cursor-pointer hover:-translate-y-1.5 hover:shadow-lg transition-all duration-400 ease-in-out">
            <h2 class="text-[#FFD700] text-[1.45rem] leading-none">${stars}</h2>
            <p class="text-[#E2E8F0] text-[1.15rem] font-extralight">"${quote}"</p>
            <h1 class="font-extrabold text-white text-[1.35rem]">- ${author}</h1>
        </div>
    `)
}
