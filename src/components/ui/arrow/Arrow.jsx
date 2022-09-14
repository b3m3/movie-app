import { forwardRef } from 'react';

import {BsFillArrowLeftCircleFill} from 'react-icons/bs'
import {BsFillArrowRightCircleFill} from 'react-icons/bs'

import style from './arrow.module.css';

const Arrow = forwardRef(({next}, ref) => {
  console.log(ref);
  return (
    <>
      <button
        ref={ref}
        className={`${style.arrow} ${next ? style.next : style.prev}`}
      >
        {next ? <BsFillArrowRightCircleFill /> : <BsFillArrowLeftCircleFill />}
      </button>
    </>
  );
});

export default Arrow;