import Image from "next/image";

export default function Reviews() {
    return (
        <div className="h-full bg-gradient-to-r from-purple-500/40 to-slate-50 py-8 lg:py-20 w-full">
            <div className="flex flex-col gap-y-12 w-11/12 lg:w-11/12 2xl:w-10/12 mx-auto ">
                <div className="flex lg:flex-row flex-col gap-x-4 items-center">
                    <span className="text-blue-800 font-bold text-2xl lg:text-5xl max-w-7xl">ОТЗЫВЫ КЛИЕНТОВ</span>
                </div>
                <div className="grid grid-cols-2 lg:grid-cols-4 w-full gap-8">
                    <div className="flex flex-col gap-y-4 w-full justify-center items-center rounded-md">
                        <Image src="/reviews/1.jpg" width={2000} height={2000} className="rounded-xl w-full max-w-sm" alt="/" />
                        <span className="text-zinc-700 font-semibold text-xl text-center">на 300% увеличился рост продаж в период даты публиĸации + 5 дня после. карточĸа поднялась в поисĸе по основным ĸлючивеĸам</span>
                    </div>
                    <div className="flex flex-col gap-y-4 w-full justify-center items-center rounded-md">
                        <Image src="/reviews/2.jpg" width={2000} height={2000} className="rounded-xl w-full max-w-sm" alt="/" />
                        <span className="text-zinc-700 font-semibold text-xl text-center">получил колоссальный рост и благодаря полученной статистики, отзывы и аналитику расширил ассортиментную матрицу товара на 60%</span>
                    </div>
                    <div className="flex flex-col gap-y-4 w-full justify-center items-center rounded-md">
                        <Image src="/reviews/3.jpg" width={2000} height={2000} className="rounded-xl h-full w-full max-w-sm" alt="/" />
                        <span className="text-zinc-700 font-semibold text-xl text-center">х2 продаж к уровню продаж прошлого месяца товар вышел в топ 50 своей категории ,  благодаря трафику  после запуска рекламной компании  </span>
                    </div>
                    <div className="flex flex-col gap-y-4 w-full justify-center items-center rounded-md">
                        <Image src="/reviews/4.jpg" width={2000} height={2000} className="rounded-xl h-full w-full max-w-sm" alt="/" />
                        <span className="text-zinc-700 font-semibold text-xl text-center">х3 продаж к уровню продаж прошлого месяца товар вышел в топ 50 своей категории, благодарятрафику после запуска рекламной компании</span>
                    </div>
                </div>
            </div>
        </div>
    )
}