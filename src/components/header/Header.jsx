import { NavLink } from 'react-router-dom';

import style from './header.module.css';

const Header = () => {
  const links = [
    { path: '/', name: 'Movies' },
    { path: '/TvPage', name: 'Tv-episodes' },
  ]

  return (
    <header>
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