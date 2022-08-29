import { useEffect, useState } from 'react';

import List from '../list/List';
import { getApiResource } from '../../service/getApiResource';
import Error from '../error';

import style from './category.module.css';

const Category = ({ title, url }) => {
  const [listData, setListData] = useState([]);
  const [errorApi, setErrorApi] = useState(false);
  
  const getResults = async () => {
    const res = await getApiResource(url);

    if(res) {
      const movieList = res.results.map(({ id, poster_path, release_date, title, vote_average }) => {
        return { id, poster_path, release_date, title, vote_average }
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
  }, []);

  return (
    <div className="category">
      <div className="container">
        <div className={style.body}>
          <h2>{title}</h2>

          {!errorApi 
            ? <List listData={listData} /> 
            : <Error />}
        </div>
      </div>
    </div>
  );
}

export default Category;