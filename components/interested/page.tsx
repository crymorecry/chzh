export default function Interested() {
    return (
        <div className="h-full py-8 lg:py-20 w-full">
            <div className="flex flex-col gap-y-8 w-11/12 lg:w-11/12 2xl:w-10/12 mx-auto">
                <div className="rounded-xl bg-slate-100 border border-slate-300 relative flex w-full select-none flex-col items-center justify-center gap-y-8 p-6 lg:py-8 ">
                    <div className="pointer-events-none absolute left-0 top-0 flex h-full w-full rounded-xl bg-contain bg-repeat opacity-50 mix-blend-multiply bg-[url('/wave.svg')]"></div>
                    <div className="flex flex-col gap-y-8 items-center">
                        <div className="flex flex-col gap-y-4 w-full max-w-2xl text-center">
                            <span className="text-3xl lg:text-5xl text-zinc-800 font-extrabold">Заинтересовало?</span>
                            <span className="text-zinc-600 text-sm lg:text-base font-medium">Хотите вывести свои товары в топовые позиции Ozon, Wildberries, Мегамарĸет, AliExpress, Яндеĸс Марĸет и другие? Предлагаю вам свои услуги.</span>
                        </div>

                        <a href="/#contact" className="rounded-full bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-1">
                            <div className="hover:bg-gray-700 transition bg-gray-800 rounded-full px-8 py-2 text-xs lg:text-base text-slate-50 font-medium">Связаться со мной</div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}
