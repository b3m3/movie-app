import { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';

import { Cards } from '../../components/cards/Cards';
import Title from '../../components/title/Title';
import Navigation from '../../components/navigation/Navigation';
import Error from '../../components/error/Error';

import { MOVIEDB_ROOT, MOVIEDB_API, PAGE_ROOT, LANG, RU} from '../../constans/api';
import { getApiResource } from '../../service/getApiResource';
import { useQueryParams } from '../../hooks/useQueryParams';
import { changeUrlToStr } from '../../utils/utils';

const Category = () => {
  const [resultsArray, setResultsArray] = useState(null);
  const [totalPages, setTotalPages] = useState(null)
  const [currentPage, setCurrentPage] = useState(null);
  const [apiError, setApiError] = useState(false);

  const { category } = useParams();
  const idPage = useQueryParams().idPage;
  const pathTv = useQueryParams().pathTv;

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
    getResults(MOVIEDB_ROOT+pathTv+category+MOVIEDB_API+LANG+RU+PAGE_ROOT+idPage);
    window.scrollTo(0, 0);
  }, [idPage]);

  return (
    <div className="category">
      <div className="container">
        {!apiError 
          ? <>
              <Title 
                title={changeUrlToStr(category)}
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