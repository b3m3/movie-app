import { NavLink } from 'react-router-dom';

import Input from '../ui/input/Input';

import style from './header.module.css';

const Header = () => {
  const links = [
    { path: `/`, name: 'Home' },
    { path: `/movie`, name: 'Movies' },
    { path: '/tv', name: 'Series' },
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
          <Input />
        </div>
      </div>
    </header>
  );
}

export default Header;