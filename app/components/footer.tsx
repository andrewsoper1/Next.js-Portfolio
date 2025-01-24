import { AiOutlineGithub } from  'react-icons/ai';
import { AiOutlineLinkedin } from  'react-icons/ai';
import { FaStackOverflow } from "react-icons/fa6";


const Footer = () => {
    return (
        <footer className="bottom-0 p-6 z-50 flex items-center justify-center space-x-4 ">
        <a href = "https://github.com/andrewsoper1" target ="_blank" rel="noopener noreferrer">
            <AiOutlineGithub size={30} />
            </a>
            <a href ="https://www.linkedin.com/in/andrew-soper-223254117/"  >
            <AiOutlineLinkedin size={30} />
            </a>
            <a href ="https://stackoverflow.com/users/28267824/milkymilk"  >
            <FaStackOverflow size={30} />
            </a>
        </footer>
    );
    };

export default Footer;