import Image from "next/image";

export default function Audit() {
    return (
        <div className="h-full bg-gradient-to-b from-purple-500 to-indigo-600 py-8 lg:py-20 w-full">
            <div className="flex flex-col gap-y-8 w-11/12 lg:w-11/12 2xl:w-10/12 mx-auto">
                <span className="text-slate-100 font-bold text-2xl lg:text-5xl max-w-7xl">ПАРУ СЛОВ ОБ АУДИТОРИИ</span>
                <div className="flex lg:flex-row flex-col justify-between w-full gap-4">
                    <Image src="/audit/1.jpg" width={2000} height={2000} className="rounded-xl lg:h-[900px] w-full max-w-lg" alt="/" />
                    <Image src="/audit/2.jpg" width={2000} height={2000} className="rounded-xl lg:h-[900px] w-full max-w-lg" alt="/" />
                    <Image src="/audit/3.jpg" width={2000} height={2000} className="rounded-xl lg:h-[900px] w-full max-w-lg" alt="/" />
                </div>
            </div>
        </div>
    )
}