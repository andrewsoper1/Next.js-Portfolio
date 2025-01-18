import projects from '../../utils/data';
import ProjectCard from '../components/projectcard';
export default function Portfolio() {
    return (
        <div>
            <h3> My Portfolio </h3>
            <div className="projects-grid">
                {projects.map((project) =>(
                    <ProjectCard 
                    key={project.id} 
                    title={project.title}
                    image={project.image}
                    githubLink={project.githubLink}
                    deployedLink={project.deployedLink}

                     />
                ))}

            </div>
        </div>
    )
}