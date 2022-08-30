import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from '../../components/header/Header';
import MoviesPage from '../moviesPage/MoviesPage';
import TvPage from '../tvPage/TvPage';
import NotFoundPage from '../notFoundPage/NotFoundPage';

import './app.css';

const App = () => {

  return (
    <div className="app">
      <BrowserRouter>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<MoviesPage />}></Route>
            <Route path="/TvPage" element={<TvPage />}></Route>
            <Route path="*" element={<NotFoundPage />}></Route>
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
