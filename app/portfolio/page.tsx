import projects from '../../utils/data';
import ProjectCard from '../components/projectcard';
export default function Portfolio() {
    return (
        <div className="flex items-center justify-center min-h-screen bg-grey">
            <div className="w-full max-w-5xl p-8 bg-white shadow-md rounded">
                <h3 className="text-3xl font-bold text-center mb-8"> My Portfolio </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
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
        </div>    
    )
}