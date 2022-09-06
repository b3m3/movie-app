import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { CardsSlider } from '../cards/Cards';
import Title from '../../components/title/Title';
import Error from '../error';

import { PAGE_ROOT } from '../../constans/api';
import { getApiResource } from '../../service/getApiResource';
import { useQueryParams } from '../../hooks/useQueryParams';

const Gallery = ({ title, url }) => {
  const [resultsArray, setResultsArray] = useState([]);
  const [errorApi, setErrorApi] = useState(false);
  const pathTv = useQueryParams().pathTv;

  const getResults = async () => {
    const res = await getApiResource(url);

    if (res) {
      setResultsArray(res.results);
    } else {
      setErrorApi(true);
    }
  };

  useEffect(() => {
    getResults();
  }, []);

  return (
    <div className="category">
      <div className="container">
        <Link 
          to={`/${pathTv}${
            title === 'Popular' ? 'popular' 
            : title === 'Now playing' ? 'now_playing'
            : title === 'Top rated' ? 'top_rated' 
            : title === 'On the air' ? 'on_the_air' : ''
          }${PAGE_ROOT}1`}
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