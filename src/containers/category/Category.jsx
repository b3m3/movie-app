import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import { Cards } from '../../components/cards/Cards';
import Title from '../../components/title/Title';
import Navigation from '../../components/navigation/Navigation';

import { MOVIES_POPULAR, MOVIES_TOP_RATED, PAGE_ROOT } from '../../constans/api';
import { getApiResource } from '../../service/getApiResource';

const Category = ({ title }) => {
  const [resultsArray, setResultsArray] = useState(null);
  const [totalPages, setTotalPages] = useState(null)
  const [currentPage, setCurrentPage] = useState(null);

  const location = useLocation();
  const idPage = parseInt(location.pathname.match(/\d+/));

  const getResults = async (url) => {
    const res = await getApiResource(url);
    setResultsArray(res.results);
    setTotalPages(res.total_pages);
  };

  useEffect(() => {
    setCurrentPage(+idPage)
    getResults(MOVIES_POPULAR+PAGE_ROOT+idPage);
  }, [idPage]);

  console.log(totalPages);

  return (
    <div className="category">
      <div className="container">
        <Title 
          title={title = 'category...'}
        />
        <Cards 
          resultsArray={resultsArray}
        />
        <Navigation
          currentPage={currentPage}
          idPage={idPage}
        />
      </div>
    </div>
  );
}

export default Category;