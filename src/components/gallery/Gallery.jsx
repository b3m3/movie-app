import { useEffect, useState } from 'react';

import { getApiResource } from '../../service/getApiResource';
import { CardsSlider } from '../cards/Cards';
import Title from '../../components/title/Title';
import Error from '../error';

const Gallery = ({ title, url }) => {
  const [resultsArray, setResultsArray] = useState([]);
  const [errorApi, setErrorApi] = useState(false);

  const getResults = async () => {
    const res = await getApiResource(url);

    if(res) {
      setResultsArray(res.results);
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
        <Title 
          title={title} 
        />
        {!errorApi 
          ? <CardsSlider resultsArray={resultsArray} /> 
          : <Error />}
      </div>
    </div>
  );
}

export default Gallery;