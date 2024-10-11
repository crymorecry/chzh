/* eslint-disable  @typescript-eslint/no-explicit-any */
'use client'
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Platforms() {
    const [follower, setFollower]: any = useState()
    const [loading, setLoading] = useState(false)
    const fecth_data = async () => {
        setLoading(false)
        const responce = await fetch('/api/get_subscribe', {
            method: "GET",
            next: {
                revalidate: 3
            }
        })
        const data = await responce.json()
        setFollower(data)
        setLoading(true)
    }

    useEffect(() => {
        fecth_data()
    }, [])
    return (
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-7xl">
            <a href="https://t.me/+KzLfDZh9lMY0MWFi" className="flex flex-col gap-y-8 justify-between text-center items-center rounded-md px-6 py-4 w-full hover:bg-slate-100 transition">
                <Image src="/platforms/telegram.svg" width={120} height={120} className="w-full h-28 items-center" alt="/" />
                <div className="flex flex-col gap-y-1 items-center">
                    {loading ? (
                        <span className="text-zinc-800 font-bold text-3xl lg:text-5xl ">{follower.telegram}</span>
                    ) : (
                        <span className="text-zinc-800 font-bold text-3xl lg:text-5xl bg-zinc-300 w-40 rounded-md h-10 animate-pulse items-center"></span>
                    )}
                    <span className="text-zinc-600 text-base lg:text-xl">активных лояльных подписчиков</span>
                </div>
            </a>

            <a href="https://www.tiktok.com/@che_obzor?_t=8od7PnrlerQ&_r=1" className="flex flex-col gap-y-8 justify-between text-center items-center rounded-md px-6 py-4 w-full hover:bg-slate-100 transition">
                <Image src="/platforms/tiktok.svg" width={120} height={120} className="w-full h-full items-center" alt="/" />
                <div className="flex flex-col gap-y-1 items-center">
                {loading ? (
                        <span className="text-zinc-800 font-bold text-3xl lg:text-5xl ">{follower.tiktok}</span>
                    ) : (
                        <span className="text-zinc-800 font-bold text-3xl lg:text-5xl bg-zinc-300 w-40 rounded-md h-10 animate-pulse items-center"></span>
                    )}
                    <span className="text-zinc-600 text-base lg:text-xl">активных лояльных подписчиков</span>
                </div>
            </a>

            <a href="https://nuum.ru/channel/4zh" className="flex flex-col gap-y-8 justify-between text-center items-center rounded-md px-6 py-4 w-full hover:bg-slate-100 transition">
                <Image src="/platforms/nuum.svg" width={120} height={120} className="w-full h-full items-center" alt="/" />
                <div className="flex flex-col gap-y-1 items-center">
                {loading ? (
                        <span className="text-zinc-800 font-bold text-3xl lg:text-5xl ">{follower.nuum}</span>
                    ) : (
                        <span className="text-zinc-800 font-bold text-3xl lg:text-5xl bg-zinc-300 w-40 rounded-md h-10 animate-pulse items-center"></span>
                    )}
                    <span className="text-zinc-600 text-base lg:text-xl">активных лояльных подписчиков</span>
                </div>
            </a>
        </div>
    )
}