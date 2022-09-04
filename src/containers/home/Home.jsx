import Title from '../../components/title/Title';

import style from './home.module.css';

const Home = () => {
  return (
    <div className="home">
      <div className="container">
        <Title title={'home...'} />
      </div>
    </div>
  );
}

export default Home;