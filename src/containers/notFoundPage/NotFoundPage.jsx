import { useLocation } from 'react-router-dom';

import NotFound from './img/error.png';

import style from './not-found-page.module.css';

const NotFoundPage = () => {
  const location = useLocation();

  return (
    <div className="not-found-page">
      <div className="container">
        <div className={style.main}>
          <img 
            className={style.image}
            src={NotFound} 
            alt="Not found"
          />

          <p>No match for "{location.pathname}"</p>
        </div>
      </div>
    </div>
  );
}

export default NotFoundPage;