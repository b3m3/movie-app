import style from './title.module.css';

const Title = ({ title }) => {
  return (
    <div className={style.wrapp}>
      <h2 className={style.title}>
        {title}
      </h2>
    </div>
  );
}

export default Title;