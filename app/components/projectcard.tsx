import PropTypes from  'prop-types';

import { AiFillGithub } from  'react-icons/ai';


interface ProjectCardProps {
    title: string;
    image: string;
    githubLink: string;
    deployedLink?: string;
}

function ProjectCard({title, image, githubLink, deployedLink}: ProjectCardProps) {
   return (
        <div className="relative bg-white shadow-md rounded overflow-hidden">
                <img src={image} alt={title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 flex flex-col items-center justify-center  text-white">
                  <div className="flex items-center space-x-2 bg-teal-500 bg-opacity-75 p-2 rounded">
                    {deployedLink ? (
                      <a href={deployedLink} target="_blank" rel="noopener noreferrer" className="project-title-link">
                        <h3>{title}</h3>
                      </a>
                     ) : (
                      <h3>{title}</h3>
                      )}
                      <a href={githubLink} target="_blank" rel="noopener noreferrer" className="github-icon">
                        <AiFillGithub  size="30" className="p-1 rounded" />
                      </a>
                  </div>
                </div>    
          </div>
        )
      }

ProjectCard.propTypes  = {
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    githubLink: PropTypes.string.isRequired,
    deployedLink: PropTypes.string,
}


export default ProjectCard