import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from '../../components/header/Header';

import routesConfig from '../../routes/routesConfig';

import './app.css';

const App = () => {
  return (
    <div className="app">
      <BrowserRouter>
        <Header />
        <main>
          <Routes>
            {routesConfig.map(({ path, element }) => (
                <Route path={path} element={element}/>))}
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
