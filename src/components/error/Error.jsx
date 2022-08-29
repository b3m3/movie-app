import error from './img/error.png';

import style from './error.module.css';

const Error = () => {
  return (
    <div className={style.error}>
      <img 
      className={style.image}
        src={error} 
        alt="Error" 
      />
    </div>
  );
}

export default Error;