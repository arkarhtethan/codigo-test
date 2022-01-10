import ProjectItem from "../components/ProjectItem";
import projects from "../data/projects.json";
const ProjectsSection = () => {
    return (
        <div className="grid lg:grid-cols-4 grid-cols-1">
            {projects.map(project => <ProjectItem {...project} />)}
        </div>
    )
}

export default ProjectsSection
