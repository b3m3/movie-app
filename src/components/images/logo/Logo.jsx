import { POSTER_S } from '../../../constans/api';

import style from './logo.module.css';

const Logo = ({ companies }) => {
  return (
    <div className={style.wrapp}>
      {companies && companies.map(({ id, logo_path, name }) => (
        <>
          {logo_path &&  
            <img
              key={id}
              className={style.logo}
              src={POSTER_S+logo_path}
              alt={name}
            />}
        </>
      ))}
    </div>
  );
}

export default Logo;