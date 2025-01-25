import Link from 'next/link';

const Header = () => {
  return (
    <header className="top-0 bg-teal-500 p-2 z-50 border-b-1 shadow-md">
      <nav className="flex items-center justify-center">
        <ul className="flex space-x-4 text-white">
          <li>
            <Link href="/">
              <p className="border-b-2 border-transparent hover:border-grey p-2">About Me</p>
            </Link>
          </li>
          <li>
            <Link href="/resume">
              <p className="border-b-2 border-transparent hover:border-grey p-2">Resume</p>
            </Link>
          </li>
          <li>
            <Link href="/contact">
              <p className="border-b-2 border-transparent hover:border-grey p-2">Contact</p>
            </Link>
          </li> 
          <li>
            <Link href="/portfolio">
              <p className="border-b-2 border-transparent hover:border-grey p-2">Portfolio</p>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;