import { useState, useEffect } from 'react';
import { useLocation, useParams } from 'react-router-dom';

import { Cards } from '../../components/cards/Cards';
import Title from '../../components/title/Title';
import Navigation from '../../components/navigation/Navigation';
import Error from '../../components/error/Error';
import { MOVIEDB_ROOT, MOVIEDB_API, PAGE_ROOT, MOVIES, LANG, RU} from '../../constans/api';
import { getApiResource } from '../../service/getApiResource';

const Category = () => {
  const [resultsArray, setResultsArray] = useState(null);
  const [totalPages, setTotalPages] = useState(null)
  const [currentPage, setCurrentPage] = useState(null);
  const [apiError, setApiError] = useState(false);

  const { category } = useParams();
  const location = useLocation();
  const idPage = parseInt(location.pathname.match(/\d+/));

  const getResults = async (url) => {
    const res = await getApiResource(url);

    if (res) {
      setResultsArray(res.results);
      setTotalPages(res.total_pages);
    } else {
      setApiError(true)
    }
  };

  useEffect(() => {
    setCurrentPage(+idPage);
    getResults(MOVIEDB_ROOT+MOVIES+category+MOVIEDB_API+LANG+RU+PAGE_ROOT+idPage);
  }, [idPage]);

  return (
    <div className="category">
      <div className="container">
        {!apiError 
          ? <>
              <Title 
                title={
                  category.split('_').join(' ')[0].toUpperCase() + 
                  category.split('_').join(' ').slice(1)
                }
              />
              <Cards 
                resultsArray={resultsArray}
              />
              <Navigation
                currentPage={currentPage}
                idPage={idPage}
                totalPages={totalPages}
                category={category}
              />
            </>
          : <Error />}
      </div>
    </div>
  );
}

export default Category;