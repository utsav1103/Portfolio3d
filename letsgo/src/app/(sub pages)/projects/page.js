//page for projects
import Image from "next/image";
import bg from "../../../../public/background/projects-background.png";
import { projectsData } from "../../data";
import ProjectList from "@/app/components/projects";
import RenderModel from "@/app/components/RenderModel";
import Staff from "@/app/components/models/Staff";


 
export default function Home() {
  return (
    <>
      <Image
        src={bg}
        alt="background-image"
      
        className="-z-50 fixed top-0 left-0 w-full h-full object-cover object-center opacity-25"
      />

      <div className="flex-1 ml-[30%] px-8">
      <ProjectList projects={projectsData} /> 
      </div>

      <div className="flex items-center justify-center w-[20%] fixed top-20 left-0 h-full">
      <RenderModel>
        <Staff/>
      </RenderModel>
      </div>
    </>
  );
}
