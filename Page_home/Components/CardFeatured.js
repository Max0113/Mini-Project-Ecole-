export function CardFeatured ({Url , Title, Price, Description, Icon, titleIcon, Number }) {
    return (`
        <div class="w-110 h-90 bg-white border border-gray-200 rounded-2xl overflow-hidden cursor-pointer hover:shadow-lg hover:-translate-y-1.5 transition-all duration-400 ease-in-out tracking-wide">
                <img src="../Source/${Url}" class="w-full h-60 object-cover" alt="Car" />
                <div class="p-4 mx-4 flex flex-col justify-between ">
                    <div>
                        <div class="flex justify-between items-center">
                            <h1 class="font-bold">${Title}</h1>
                            <div class="font-bold text-[0.7rem] text-[#1152D4] bg-[#1152d423] px-2 py-1 rounded-2xl">$${Price}/day</div>
                        </div>
                        <p class="text-[0.85rem] text-[#64748B]">${Description}</p>
                    </div>
                    <div class="flex gap-3 my-3">
                        <p class="text-[#64748B] flex items-center gap-1">
                            <i class="${Icon} text-[0.7rem]"></i>
                            <span class="text-[0.8rem]">${titleIcon}</span>
                        </p>
                        <p class="text-[#64748B] flex items-center gap-1">
                            <i class="fa-solid fa-user-group text-[0.7rem]"></i>
                            <span class="text-[0.8rem]">${Number} Seats</span>
                        </p>
                    </div>
                </div>
        </div>
    `)
}