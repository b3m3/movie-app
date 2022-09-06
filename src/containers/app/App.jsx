import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from '../../components/header/Header';
import Home from '../home/Home';
import Movies from '../movies/Movies';
import Series from '../series/Series';
import Category from '../category/Category';
import Info from '../info/Info';
import NotFound from '../notFound/NotFound';

import { PAGE_ROOT } from '../../constans/api';

import './app.css';

const App = () => {

  return (
    <div className="app">
      <BrowserRouter>
        <Header />
        <main>
          <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/movie' element={<Movies />}></Route>
            <Route path='/tv' element={<Series />}></Route>

            <Route path='/:tv/:id' element={<Info />}></Route>
            <Route path={`/:tv/:category${PAGE_ROOT}:id`} element={<Category />}></Route>
            <Route path='*' element={<NotFound />}></Route>
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
