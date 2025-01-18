import Link from 'next/link';

const Header = () => {
  return (
    <header>
      <nav>
        <ul>
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