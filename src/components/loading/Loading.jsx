import style from './loading.module.css';

import Load from './img/load.svg'

const Loading = () => {
  return (
    <div className={style.loading}>
      <img src={Load} alt="Load" />
    </div>
  );
}

export default Loading;