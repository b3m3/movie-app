import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from '../../components/header/Header';
import MoviesPage from '../moviesPage/MoviesPage';
import TvPage from '../tvPage/TvPage';
import InfoPage from '../infoPage/InfoPage';
import NotFoundPage from '../notFoundPage/NotFoundPage';

import { PAGE } from '../../constans/api';

import './app.css';

const App = () => {

  return (
    <div className="app">
      <BrowserRouter>
        <Header />
        <main>
          <Routes>
            <Route path={`/${PAGE}1`} element={<MoviesPage />}></Route>
            <Route path={`/movies${PAGE}1`} element={<MoviesPage />}></Route>
            <Route path="/tv-episodes" element={<TvPage />}></Route>
            {/* <Route path="/movies/:id" element={<InfoPage />}></Route> */}
            <Route path="*" element={<NotFoundPage />}></Route>
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
