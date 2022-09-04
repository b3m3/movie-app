import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';

import { Cards } from '../../components/cards/Cards';
import Title from '../../components/title/Title';

import { MOVIES_POPULAR, MOVIES_TOP_RATED, PAGE_ROOT } from '../../constans/api';
import { getApiResource } from '../../service/getApiResource';

import style from './category.module.css';

const Category = ({ title }) => {
  const [resultsArray, setResultsArray] = useState(null);

  const location = useLocation();
  const locationPage = parseInt(location.pathname.match(/\d+/));

  const getResults = async (url) => {
    const res = await getApiResource(url);
    setResultsArray(res.results);
  };

  useEffect(() => {
    getResults(MOVIES_POPULAR+PAGE_ROOT+locationPage);
  }, [locationPage]);

  return (
    <div className="category">
      <div className="container">
        <Title 
          title={title = 'category...'}
        />
        <Cards 
          resultsArray={resultsArray}
        />

        <div>
          <Link to={`/movies/category${PAGE_ROOT}${''}`}>
            <button className={style.btn} onClick={() => null}>-</button>
          </Link>
          <Link to={`/movies/category${PAGE_ROOT}${''}`}>
            <button className={style.btn} onClick={() => null}>+</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Category;