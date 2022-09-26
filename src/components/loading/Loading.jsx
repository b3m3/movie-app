import style from './loading.module.css';

import Spinner from './img/spin.svg';
import PackMan from './img/pacman.svg';

const Loading = ({ spin }) => {
  return (
    <div className={style.loading}>
      <img
        src={spin ? Spinner : PackMan} 
        alt="Load"
      />
    </div>
  );
}

export default Loading;