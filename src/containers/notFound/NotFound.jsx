import { useLocation } from 'react-router-dom';

import NotFoundImage from './img/error.png';

import style from './not-found.module.css';

const NotFound = () => {
  const location = useLocation();

  return (
    <div className="not-found-page">
      <div className="container">
        <div className={style.main}>
          <img 
            className={style.image}
            src={NotFoundImage} 
            alt="Not found"
          />

          <p>No match for "{location.pathname}"</p>
        </div>
      </div>
    </div>
  );
}

export default NotFound;