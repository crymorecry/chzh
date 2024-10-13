'use client'

import { useEffect, useState } from "react"

export default function Interested() {
    const [price, setPrice] = useState(0)
    const [loading, setLoading] = useState(true)
    const fetch_data = async () => {
        setLoading(true)
        const responce = await fetch('/api/get_price', {
            method: "GET",
            next: {
                revalidate: 3
            }
        })
        const data = await responce.json()
        setPrice(data.price)
        setLoading(false)
    }
    useEffect(() => {
        fetch_data()
    }, [])
    return (
        <div className="h-full bg-gradient-to-r from-purple-500/40 to-slate-50 py-8 lg:py-20 w-full">
            <div className="flex flex-col gap-y-8 w-11/12 lg:w-11/12 2xl:w-10/12 mx-auto">
                <div className="rounded-xl bg-slate-100 border border-slate-300 relative flex w-full select-none flex-col items-center justify-center gap-y-8 p-6 lg:py-8 ">
                    <div className="pointer-events-none absolute left-0 top-0 flex h-full w-full rounded-xl bg-contain bg-repeat opacity-5 bg-purple-100/10 mix-blend-multiply bg-[url('/wave.svg')]"></div>
                    <div className="flex flex-col gap-y-8 items-center">
                        <div className="flex flex-col gap-y-4 w-full max-w-2xl text-center">
                            <span className="text-3xl lg:text-5xl text-zinc-800 font-extrabold">Заинтересовало?</span>
                            <span className="text-zinc-600 text-sm lg:text-base font-medium">Я предлагаю вам сотрудничество по созданию рекламной компании на ваш товар. За более подробной информацией обращайтесь ко мне в телеграмм.</span>
                        </div>
                        <div className="flex flex-col gap-y-1">
                            <span className="text-zinc-500 text-xs italic">Всего за</span>
                            <div className="flex flex-row gap-2 lg:gap-8 lg:items-center">
                                {loading ? (
                                    <span className="text-zinc-900 font-extrabold text-4xl lg:text-5xl w-40 h-12 bg-zinc-300 animate-pulse rounded-md"></span>

                                ) : (
                                    <span className="text-zinc-900 font-extrabold text-4xl lg:text-5xl">{price}</span>
                                )}
                                <a className="rounded-full bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-1">
                                    <div className="hover:bg-gray-700 transition bg-gray-800 rounded-full px-8 py-2 text-xs lg:text-base text-slate-50 font-medium"><a href="https://t.me/Mike_4ZH">Связаться со мной</a></div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
