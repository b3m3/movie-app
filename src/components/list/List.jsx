import Button from '../button/Button';
import { POSTER_S } from '../../constans/api';
import NoImage from './img/no-image.jpg';

import style from './list.module.css';

const List = ({ listData }) => {
  return (
    <>
      <ul className={style.list}>
        {listData && listData.map(({ id, poster_path, title }) => (
          <li
            key={id}
            className={style.card}
          >
            <div className={style.poster}>
              <img src={POSTER_S ? POSTER_S+poster_path : NoImage} alt={title} />
            </div>

            <p>{title.length > 27 ? title.slice(0, 27) + '...' : title}</p> 
          </li>
        ))}
      </ul>

      <Button name="More" />
    </>
  );
}

export default List;