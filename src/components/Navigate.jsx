import { Link, useLocation } from 'react-router-dom';

function Navigate() {
  const currentPage = useLocation().pathname;
// this is the navigation bar that will be displayed on the top of the page
  return (
    <ul className="nav navigate">

      <li className="nav-item">
        {/* this links to the about page */}
        <Link
          to="/"
          className={currentPage === '/' ? 'nav-link active' : 'nav-link'}
        >
          About
        </Link>
      </li>

      <li className="nav-item">
        {/* this links to the projects page */}
        <Link
          to="/Projects"
          className={currentPage === '/Projects' ? 'nav-link active' : 'nav-link'}
        >
          Projects
        </Link>
      </li>

      <li className="nav-item">
        {/* this links to the contact page */}
        <Link
          to="/Contact"
          className={currentPage === '/Contact' ? 'nav-link active' : 'nav-link'}
        >
          Contact
        </Link>
      </li>
    </ul>
  );
}

export default Navigate;