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
        <div className="relative">
            <div className="relative">
                <img src={image} alt={title} className="project-image w-full h-full object-cover" />
                <div className="absolute inset-0 flex flex-col items-center justify-center  text-black">
                {deployedLink ? (
            <a href={deployedLink} target="_blank" rel="noopener noreferrer" className="project-title-link">
              <h3>{title}</h3>
            </a>
          ) : (
            <h3 className="text-xl mb-2">{title}</h3>
          )}
          <a href={githubLink} target="_blank" rel="noopener noreferrer" className="github-icon">
            <AiFillGithub  size="30" />
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