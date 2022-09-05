import { TbArrowNarrowLeft } from 'react-icons/tb';
import { TbArrowNarrowRight } from 'react-icons/tb';

import style from './button.module.css';

const Button = ({ name, onClick, side }) => {
  return (
    <>
      <button 
        className={style.btn}
        onClick={onClick}
      >
        {side 
          ? <> <span className={style.arrow_left}><TbArrowNarrowLeft /></span> 
            <span className={style.name}>{name}</span> </>
          : <> <span className={style.name}>{name}</span> 
            <span className={style.arrow_right}><TbArrowNarrowRight /></span> </>}
      </button>
    </>
  );
}

export default Button;