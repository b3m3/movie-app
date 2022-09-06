import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { CardsSlider } from '../cards/Cards';
import Title from '../../components/title/Title';
import Error from '../error';

import { PAGE_ROOT } from '../../constans/api';
import { getApiResource } from '../../service/getApiResource';
import { useQueryParams } from '../../hooks/useQueryParams';
import { changeStrToUrl } from '../../utils/utils';

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