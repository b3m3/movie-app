import { useState, useEffect } from 'react';
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
  const [errorApi, setErrorApi] = useState(false);

  const { category } = useParams();
  const idPage = useQueryParams().idPage;
  const pathTv = useQueryParams().pathTv;

  useEffect(() => {
    setCurrentPage(+idPage);
    window.scrollTo(0, 0);
    
    (async () => {
      const res = await getApiResource(
        MOVIEDB_ROOT+pathTv+category+MOVIEDB_API+LANG+RU+PAGE_ROOT+idPage
      );

      if (res) {
        setResultsArray(res.results);
        setTotalPages(res.total_pages);
      } else {
        setErrorApi(true)
      }
    })();
  }, [idPage]);

  return (
    <div className="category">
      <div className="container">
        {errorApi 
          ? <Error />
          : <>
              <Title 
                title={category && changeUrlToStr(category)}
              />
              <Cards 
                resultsArray={resultsArray}
              />
              <Navigation
                currentPage={currentPage}
                idPage={idPage}
                totalPages={totalPages}
              />
            </>}
      </div>
    </div>
  );
}

export default Category;