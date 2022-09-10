import { forwardRef } from 'react';

import {BsFillArrowLeftCircleFill} from 'react-icons/bs'
import {BsFillArrowRightCircleFill} from 'react-icons/bs'

import style from './arrow.module.css';

const Arrow = forwardRef(({next}, ref) => {
  return (
    <button
      ref={ref}
      className={`${style.arrow} ${next ? style.arrow_right : style.arrow_left}`}
    >
      {next ? <BsFillArrowRightCircleFill /> : <BsFillArrowLeftCircleFill />}
    </button>
  );
});

export default Arrow;