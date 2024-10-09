import Image from "next/image";

export default function Tiktok() {
    return (
        <div className="h-full bg-gradient-to-r from-purple-500/40 to-slate-50 py-8 lg:py-20 w-full">
            <div className="flex flex-col gap-y-12 w-11/12 lg:w-11/12 2xl:w-10/12 mx-auto ">
                <div className="flex lg:flex-row flex-col gap-x-4 items-center">
                    <span className="text-zinc-800 font-bold text-2xl lg:text-5xl max-w-7xl">ПРЕДЛАГАЮ ВЗГЛЯНУТЬ НА СТАТИСТИКУ ПРОСМОТРОВ НА ТОВАР РЕКЛАМОДАТЕЛЕЙ В</span>
                    <Image src="/platforms/tiktok.svg" width={2000} height={2000} className="w-80 " alt="/" />

                </div>
                <div className="grid grid-cols-1 lg:grid-cols-3 w-full gap-4">
                    <div className="flex w-full justify-center">
                        <Image src="/tiktok/1.svg" width={2000} height={2000} className="rounded-xl h-full w-full max-w-md" alt="/" />
                    </div>
                    <div className="flex w-full justify-center">
                        <Image src="/tiktok/2.svg" width={2000} height={2000} className="rounded-xl h-full w-full max-w-md" alt="/" />
                    </div>
                    <div className="flex w-full justify-center">
                        <Image src="/tiktok/3.svg" width={2000} height={2000} className="rounded-xl h-full w-full max-w-md" alt="/" />
                    </div>
                </div>
            </div>
        </div>
    )
}