import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import Card from '../card/Card';
import Title from '../../components/title';
import Error from '../error';

import { getApiResource } from '../../service/getApiResource';
import { PAGE_ROOT } from '../../constans/api';
import { changeStrToUrl, tabTitle } from '../../utils/utils';
import { useQueryParams } from '../../hooks/useQueryParams';
import withSlider from '../../hoc/withSlider';

import style from './gallery.module.css';

const Gallery = ({ title, url, icon, color }) => {
  const [resultsArray, setResultsArray] = useState([]);
  const [errorApi, setErrorApi] = useState(false);
  const pathTv = useQueryParams().pathTv;

  const CardsSlider = withSlider(Card, resultsArray, '236px', false, true);

  useEffect(() => {
    (async () => {
      const res = await getApiResource(url);
      tabTitle(`Movies | ${pathTv[0].toUpperCase()}${pathTv.slice(1, -1)}`);
      
      if (res) {
        setResultsArray(res.results);
      } else {
        setErrorApi(true);
      }
    })();
  }, [url, pathTv]);

  return (
    <div className="gallery">
      <div className="container">
        <Link
          className={style.link}
          to={`/${pathTv}${changeStrToUrl(title)}${PAGE_ROOT}1`}
        >
          <Title 
            title={title}
            icon={icon}
            color={color}
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