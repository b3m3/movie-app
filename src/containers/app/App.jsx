import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from '../../components/header/Header';
import Home from '../home/Home';
import Movies from '../movies/Movies';
import Series from '../series/Series';
// import Info from '../info/Info';
import NotFound from '../notFound/NotFound';

import { PAGE } from '../../constans/api';

import './app.css';

const App = () => {

  return (
    <div className="app">
      <BrowserRouter>
        <Header />
        <main>
          <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/movies' element={<Movies />}></Route>
            <Route path='/series' element={<Series />}></Route>
            <Route path='*' element={<NotFound />}></Route>

            {/* <Route path="/movies/:id" element={<Info />}></Route> */}
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
