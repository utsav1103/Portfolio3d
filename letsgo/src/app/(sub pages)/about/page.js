//page for projects
import Image from "next/image";
import bg from "../../../../public/background/about-background.png";
import RenderModel from "@/app/components/RenderModel";
import HatModel from "@/app/components/models/HatModel";


 
export default function Home() {
  return (
    <>
      <Image
        src={bg}
        alt="background-image"
      
        className="-z-50 fixed top-0 left-0 w-full h-full object-cover object-center opacity-25"
      />

      

      <div className="fless items-center justify-center w-[20%] fixed top-20 left-0 h-full">
      <RenderModel>
        <HatModel/>
      </RenderModel>
      </div>
    </>
  );
}
