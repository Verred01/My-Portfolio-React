import { Link, useLocation } from 'react-router-dom';

function Navigate() {
  const currentPage = useLocation().pathname;

  return (
    <ul className="nav navigate">

      <li className="nav-item">
        <Link
          to="/"
          // Check to see if the currentPage is `About`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={currentPage === '/' ? 'nav-link active' : 'nav-link'}
        >
          About
        </Link>
      </li>

      <li className="nav-item">
        <Link
          to="/Projects"
          // Check to see if the currentPage is `Contact`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={currentPage === '/Projects' ? 'nav-link active' : 'nav-link'}
        >
          Projects
        </Link>
      </li>

      <li className="nav-item">
        <Link
          to="/Contact"
          // Check to see if the currentPage is `Contact`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={currentPage === '/Contact' ? 'nav-link active' : 'nav-link'}
        >
          Contact
        </Link>
      </li>
    </ul>
  );
}

export default Navigate;