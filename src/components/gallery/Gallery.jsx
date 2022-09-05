import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { PAGE_ROOT } from '../../constans/api';
import { getApiResource } from '../../service/getApiResource';
import { CardsSlider } from '../cards/Cards';
import Title from '../../components/title/Title';
import Error from '../error';

const Gallery = ({ title, url }) => {
  const [resultsArray, setResultsArray] = useState([]);
  const [errorApi, setErrorApi] = useState(false);

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
          to={`/movies/${
            title === 'Popular' ? 'popular' 
            : title === 'Now playing' ? 'now_playing'
            : title === 'Top rated' ? 'top_rated' : ''
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