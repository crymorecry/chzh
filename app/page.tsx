import Audit from "@/components/audit/page";
import Case from "@/components/case/page";
import Connection from "@/components/connection/page";
import Interested from "@/components/interested/page";
import Platforms from "@/components/platforms/page";
import Reviews from "@/components/reviews/page";
import Tiktok from "@/components/tiktok/page";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col gap-y-12 w-full justify-between items-center">
      <div className="flex flex-col gap-y-12 lg:min-h-screen lg:h-screen h-full py-8 lg:py-20 w-11/12 lg:w-11/12 2xl:w-10/12 mx-auto">
        <div className="lg:hidden flex relative justify-center">
          <Image src="/ЧЗХ.svg" width={2000} height={2000} className="max-w-7xl w-full items-center" alt="/" />
          <Image src="/ЧЗХ.svg" width={2000} height={2000} className="blur-2xl w-full animate-pulse max-w-4xl items-center absolute" alt="/" />
        </div>
        <div className="flex lg:flex-row flex-col justify-between w-full h-full">
          <div className="flex flex-col justify-between w-full">
            <div className="flex flex-col max-w-2xl text-zinc-600 text-lg lg:text-2xl leading-0 w-full gap-y-4">
              <div className="flex flex-col font-bold text-zinc-800 text-5xl lg:text-[108px] leading-none w-full">
                <span className="text-left">ПРИВЕТ, </span>
                <span className="text-right">Я МИША</span>
              </div>
              <span>Расскажу немного о себе: я являюсь блогером и снимаю обзоры на товары со всех маркетплейсов.</span>
            </div>
            <Platforms />
          </div>
          <div className="lg:flex hidden w-full justify-center relative items-start">
            <div className="flex relative justify-center max-w-2xl w-full">
              <Image src="/ЧЗХ.svg" width={2000} height={2000} className="max-w-7xl w-full items-center" alt="/" />
              <Image src="/ЧЗХ.svg" width={2000} height={2000} className="blur-2xl w-full animate-pulse max-w-7xl items-center absolute" alt="/" />
            </div>
            <div className="absolute flex justify-center items-center w-full z-0">
              <Image src="/man.svg" width={2000} height={2000} className="w-full h-full max-w-2xl items-center z-0" alt="/" />
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <Case />
        <Tiktok />
        <Audit />
        <Reviews />
        <Interested />
        <Connection />
      </div>
    </main >
  );
}
