import style from './button.module.css';

const Button = ({ name }) => {
  return (
    <button className={style.button}>{name}</button>
  );
}

export default Button;