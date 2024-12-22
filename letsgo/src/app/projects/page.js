//page for projects
import Image from "next/image";
import bg from "../../../public/background/projects-background.png";
import ProjectList from "../components/projects";
import { projectsData } from "../data";
import RenderModel from "../components/RenderModel";
import Staff from "../components/models/Staff";


 
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between relative">
      <Image
        src={bg}
        alt="background-image"
        fill
        className="w-full h-full object-cover object-center opacity-25"
      />

      <div className="flex-1 ml-[30%] px-8">
      <ProjectList projects={projectsData} /> 
      </div>

      <div className="fless items-center justify-center w-[20%] fixed top-20 left-0 h-full">
      <RenderModel>
        <Staff/>
      </RenderModel>
      </div>
    </main>
  );
}
