import style from './button.module.css';

const Button = ({ name }) => {
  return (
    <div className={style.wrapp_btn}>
      <button className={style.button}>{name}</button>
    </div>
  );
}

export default Button;