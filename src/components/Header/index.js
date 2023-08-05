import { NavLink, Link } from 'react-router-dom';

import './index.css';

export default function () {
  return (
    <header>
      <div className='logo'>
        <Link to={'/'}>Regan</Link>
      </div>
      <ul>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? 'active' : '')}
            to={'/about-me'}
          >
            About Me
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? 'active' : '')}
            to={'/portfolio'}
          >
            Portfolio
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? 'active' : '')}
            to={'/contact'}
          >
            Contact
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? 'active' : '')}
            to={'/resume'}
          >
            Resume
          </NavLink>
        </li>
      </ul>
    </header>
  );
}
