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
                <div className="flex relative h-28">
                    <div className="absolute items-end flex justify-end h-full w-full mt-10">
                        <svg xmlns="http://www.w3.org/2000/svg" width="3em" height="3em" fill="none" viewBox="0 0 24 24" id="Layer_1" data-name="Layer 1">
                            <path className="stroke-zinc-900" d="M17.07,20.61H9.79a2,2,0,0,1-2-2,2,2,0,0,1,2-2h1.87L5,9.86a2,2,0,0,1-.19-2.65,1.88,1.88,0,0,1,1.47-.68,1.84,1.84,0,0,1,1.35.55l4.06,4.06,4.08-3.06a1.91,1.91,0,0,1,2.5.18h0A17.18,17.18,0,0,1,22.42,15l.06.19" />
                            <path className="stroke-zinc-900" d="M10.63,10.12A4.73,4.73,0,0,0,11,8.17,4.78,4.78,0,1,0,6.26,13a4.67,4.67,0,0,0,1.55-.26" />
                        </svg>
                    </div>
                    <Image src="/platforms/telegram.svg" width={120} height={120} className="w-full h-28 items-center" alt="/" />
                </div>
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
                <div className="flex relative h-28">
                    <div className="absolute items-end flex justify-end h-full w-full mt-10">
                        <svg xmlns="http://www.w3.org/2000/svg" width="3em" height="3em" fill="none" viewBox="0 0 24 24" id="Layer_1" data-name="Layer 1">
                            <path className="stroke-zinc-900" d="M17.07,20.61H9.79a2,2,0,0,1-2-2,2,2,0,0,1,2-2h1.87L5,9.86a2,2,0,0,1-.19-2.65,1.88,1.88,0,0,1,1.47-.68,1.84,1.84,0,0,1,1.35.55l4.06,4.06,4.08-3.06a1.91,1.91,0,0,1,2.5.18h0A17.18,17.18,0,0,1,22.42,15l.06.19" />
                            <path className="stroke-zinc-900" d="M10.63,10.12A4.73,4.73,0,0,0,11,8.17,4.78,4.78,0,1,0,6.26,13a4.67,4.67,0,0,0,1.55-.26" />
                        </svg>
                    </div>
                    <Image src="/platforms/tiktok.svg" width={120} height={120} className="w-full h-full items-center" alt="/" />
                </div>
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
                <div className="flex relative h-28">
                    <div className="absolute items-end flex justify-end h-full w-full mt-10">
                        <svg xmlns="http://www.w3.org/2000/svg" width="3em" height="3em" fill="none" viewBox="0 0 24 24" id="Layer_1" data-name="Layer 1">
                            <path className="stroke-zinc-900" d="M17.07,20.61H9.79a2,2,0,0,1-2-2,2,2,0,0,1,2-2h1.87L5,9.86a2,2,0,0,1-.19-2.65,1.88,1.88,0,0,1,1.47-.68,1.84,1.84,0,0,1,1.35.55l4.06,4.06,4.08-3.06a1.91,1.91,0,0,1,2.5.18h0A17.18,17.18,0,0,1,22.42,15l.06.19" />
                            <path className="stroke-zinc-900" d="M10.63,10.12A4.73,4.73,0,0,0,11,8.17,4.78,4.78,0,1,0,6.26,13a4.67,4.67,0,0,0,1.55-.26" />
                        </svg>
                    </div>
                    <Image src="/platforms/nuum.svg" width={120} height={120} className="w-full h-full items-center" alt="/" />
                </div>
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