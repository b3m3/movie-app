import { POSTER_S } from '../../constans/api';

import NoImage from './img/no-image.jpg';

import style from './cards-list.module.css';

const CardsList = ({ listData }) => {
  return (
    <>
      <ul className={style.list}>
        {listData && listData.map(({ id, poster_path, title, name }) => (
          <li
            key={id}
            className={style.card}
          >
            <div className={style.poster}>
              <img src={POSTER_S ? POSTER_S+poster_path : NoImage} alt={title} />
            </div>

            <p>
              {title && title.length > 27 
                  ? title.slice(0, 27) + '...' 
                  : title}
              {name && name.length > 27 
                  ? name.slice(0, 27) + '...' 
                  : name}
            </p> 
          </li>
        ))}
      </ul>
    </>
  );
}

export default CardsList;