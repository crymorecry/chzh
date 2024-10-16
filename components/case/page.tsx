import Image from "next/image";

export default function Case() {
    return (
        <div className="h-full bg-gradient-to-b from-purple-500 to-indigo-600 py-8 lg:py-20 w-full">
            <div className="flex flex-col gap-y-8 w-11/12 lg:w-11/12 2xl:w-10/12 mx-auto">
                <span className="text-slate-100 font-bold text-2xl lg:text-5xl max-w-7xl z-20">НЕМНОГО О КЕЙСАХ МОИХ ЛЮБИМЫХ КЛИЕНТОВ И ТО КАК ОНИ ПОВЛИЯЛИ НА ПРОДАЖИ</span>
                <div className="grid grid-cols-2 lg:grid-cols-2 w-full gap-4">
                    <Image src="/case/1.jpg" width={2000} height={2000} className="rounded-xl h-full w-full object-cover" alt="/" />
                    <Image src="/case/2.jpg" width={2000} height={2000} className="rounded-xl h-full w-full object-fill" alt="/" />
                    <Image src="/case/3.jpg" width={2000} height={2000} className="rounded-xl h-full w-full object-cover" alt="/" />
                    <Image src="/case/4.jpg" width={2000} height={2000} className="rounded-xl h-full w-full object-cover" alt="/" />
                </div>
            </div>
        </div>
    )
}