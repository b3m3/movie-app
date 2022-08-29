import { useEffect, useState } from 'react';

import Button from '../button/Button';
import { getApiResource } from '../../service/getApiResource';
import { POSTER_S } from '../../constans/api';

import NoImage from './img/no-image.jpg';

import style from './category.module.css';

const Category = ({ title, url }) => {
  const [listData, setListData] = useState([]);
  
  const getResults = async () => {
    const res = await getApiResource(url);
    const movieList = res.results.map(({ id, poster_path, release_date, title, vote_average }) => {
      return { id, poster_path, release_date, title, vote_average }
    });
    setListData(movieList);
  };

  useEffect(() => {
    getResults();
  }, []);

  return (
    <div className="category">
      <div className="container">
        <div className={style.body}>
          <h2>{title}</h2>

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

          <div className={style.more}>
            <Button name="More" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Category;