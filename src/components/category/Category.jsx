import List from '../list/List';

import style from './category.module.css';

const Category = ({ title, url }) => {
  return (
    <div className="category">
      <div className="container">
        <div className={style.body}>
          <h2>{title}</h2>

          <List url={url} />
        </div>
      </div>
    </div>
  );
}

export default Category;