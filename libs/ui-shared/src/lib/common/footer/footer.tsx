import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <footer className="bottom-0 w-full p-4 bg-white md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800 dark:border-gray-600">
      <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
        © 2023{' '}
        <Link to="/" className="hover:underline">
          TechGlimpse
        </Link>
        . All Rights Reserved.
      </span>
      <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
        <li>
          <Link to="/about" className="mr-4 hover:underline md:mr-6 ">
            About
          </Link>
        </li>
        <li>
          <Link to="/privacy-policy" className="mr-4 hover:underline md:mr-6">
            Privacy Policy
          </Link>
        </li>
        <li>
          <Link to="/licensing" className="mr-4 hover:underline md:mr-6">
            Licensing
          </Link>
        </li>
        <li>
          <Link to="/contact-page" className="hover:underline">
            Contact
          </Link>
        </li>
      </ul>
    </footer>
  );
}

export default Footer;
