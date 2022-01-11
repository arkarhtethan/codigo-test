import ProjectItem from "./ProjectItem";
import projects from "../data/projects.json";
const ProjectsSection = () => {
    return (
        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1">
            {projects.map((project, index) => <ProjectItem key={index} {...project} />)}
        </div>
    )
}

export default ProjectsSection
