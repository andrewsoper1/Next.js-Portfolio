import Link from 'next/link';

const Header = () => {
  return (
    <header className="top-0 bg-teal-500 p-6 z-50">
      <nav className="flex items-center justify-between">
        <ul className="flex space-x-4 text-white">
          <li>
            <Link href="/">
              <p>About Me</p>
            </Link>
          </li>
          <li>
            <Link href="/resume">
              <p>Resume</p>
            </Link>
          </li>
          <li>
            <Link href="/contact">
              <p>Contact</p>
            </Link>
          </li> 
          <li>
            <Link href="/portfolio">
              <p>Portfolio</p>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;