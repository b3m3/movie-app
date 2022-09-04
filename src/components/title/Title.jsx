import style from './title.module.css';

const Title = ({ title }) => {
  return (
    <div className={style.wrapp}>
      <h2>{title}</h2>
    </div>
  );
}

export default Title;