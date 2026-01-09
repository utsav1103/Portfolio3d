//page for projects
import Image from "next/image";
import bg from "../../../../public/background/about-background.png";
import RenderModel from "@/app/components/RenderModel";
// import HatModel from "@/app/components/models/HatModel";
import AboutDetails from "@/app/components/about";
import dynamic from "next/dynamic";


const HatModel = dynamic(() => import("@/app/components/models/HatModel"), {
  ssr: false,
});
 
export default function Home() {
  return (
    <>
      <Image
        src={bg}
        priority sizes="100vw"
        alt="background-image"
      
        className="-z-50 fixed top-0 left-0 w-full h-full object-cover object-center opacity-25"
      />

      

      <div className="w-full h-3/5 xs:h-3/4 sm:h-screen absolute top-1/2 left-0 -translate-y-1/2">
      <RenderModel>
        <HatModel/>
      </RenderModel>
      </div>

      <div className="relative w-full h-screen flex flex-col items-center justify-center">
      <div className="absolute flex flex-col items-center text-center 
  top-[70%] sm:top-[55%] left-1/2 -translate-x-1/2">
        <h1
  className="
    font-extrabold tracking-[0.15em]
    text-3xl xs:text-5xl sm:text-7xl lg:text-8xl
    text-accent
    drop-shadow-[0_0_25px_rgba(254,254,91,0.25)]
  "
>
  UTSAV VAGHELA
</h1>

<p
  className="
    mt-4
    text-foreground/80
    font-light
    tracking-widest
    text-sm sm:text-base
    uppercase
  "
>
  Meet the wizard behind the mysterious portfolio
</p>

      </div>
      </div>

      <AboutDetails />

    </>
  );
}
