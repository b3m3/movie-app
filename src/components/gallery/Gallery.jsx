import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { CardsSlider } from '../cards/Cards';
import Title from '../../components/title/Title';
import Error from '../error';

import { getApiResource } from '../../service/getApiResource';
import { PAGE_ROOT } from '../../constans/api';
import { changeStrToUrl } from '../../utils/utils';
import { useQueryParams } from '../../hooks/useQueryParams';

import style from './gallery.module.css';

const Gallery = ({ title, url }) => {
  const [resultsArray, setResultsArray] = useState([]);
  const [errorApi, setErrorApi] = useState(false);
  const pathTv = useQueryParams().pathTv;

  useEffect(() => {
    (async () => {
      const res = await getApiResource(url);

      if (res) {
        setResultsArray(res.results);
      } else {
        setErrorApi(true);
      }
    })();
  }, [url]);


  return (
    <div className="category">
      <div className="container">
        <Link
          className={style.link}
          to={`/${pathTv}${changeStrToUrl(title)}${PAGE_ROOT}1`}
        >
          <Title 
            title={title}
          />
        </Link>
        {!errorApi 
          ? <CardsSlider resultsArray={resultsArray} />
          : <Error />}
      </div>
    </div>
  );
}

export default Gallery;