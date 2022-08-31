import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import CardsList from '../cardsList/CardsList';
import { getApiResource } from '../../service/getApiResource';
import Error from '../error';

import style from './category.module.css';

const Category = ({ title, url }) => {
  const [listData, setListData] = useState([]);
  const [errorApi, setErrorApi] = useState(false);

  const location = useLocation();
  const locationPage = parseInt(location.pathname.replace(/[^\d]/g, ''));
  
  const getResults = async () => {
    const res = await getApiResource(`${url}${location}`);

    console.log(res);

    if(res) {
      const movieList = res.results.map(({ id, poster_path, release_date, title, name, vote_average }) => {
        return { id, poster_path, release_date, title, name, vote_average }
      });

      setListData(movieList);
      return true;
    } else {
      setErrorApi(true);
      return false;
    }
  };

  useEffect(() => {
    getResults();
  }, [locationPage]);

  return (
    <div className="category">
      <div className="container">
        <div className={style.body}>

          <div className={style.top}>
            <h2>{title}</h2>

            <nav>

            </nav>
          </div>

          {!errorApi 
            ? <CardsList 
              listData={listData}
            /> 
            : <Error />}
        </div>
      </div>
    </div>
  );
}

export default Category;