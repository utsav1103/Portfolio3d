import ProjectLayout from "./ProjectLayout"; 
const ProjectList = ({projects}) => {
  return (
    <div className="w-full max-w-4xl px-12 space-y-6 flex flex-col items-start">
      {projects.map((project, index) => {
        return<ProjectLayout key={index} {...project} />
      })}
    </div>
  )
}

export default ProjectList
