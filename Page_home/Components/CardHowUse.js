export function CardHowUse({number , title,  description }) {
    return (`
       <div class="flex flex-col justify-center gap-3">
                <div class="flex justify-center items-center">
                    <div class="bg-[#1152D4] py-3 px-5 w-10 h-10 rounded-full flex justify-center items-center">
                        <h1 class="font-extrabold text-white">${number}</h1>
                    </div>
                </div>
                <div class="*:my-2">
                    <h1 class="font-extrabold text-[1.2rem]">${title}</h1>
                    <p class="font-extralight text-[0.95rem] text-[#64748B]">${description}</p>
                </div>
        </div>
    `)
}