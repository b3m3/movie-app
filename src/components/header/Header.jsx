import { NavLink } from 'react-router-dom';

import { PAGE } from '../../constans/api';

import style from './header.module.css';

const Header = () => {
  const links = [
    { path: `/`, name: 'Home' },
    { path: `/movies`, name: 'Movies' },
    { path: '/series', name: 'Series' },
  ];

  return (
    <header className={style.header}>
      <div className="container">
        <div className={style.main}>
          <ul className={style.list}>
            {links.map(({ path, name }) => (
              <li key={name}>
                <NavLink 
                  className={style.link} 
                  to={path}
                >
                  {name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
}

export default Header;