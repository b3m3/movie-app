import { BrowserRouter, HashRouter, Routes, Route } from 'react-router-dom';

import Header from '../../components/header/Header';
import routesConfig from '../../routes/routesConfig';

import './app.css';

const App = () => {
  return (
    <div className="app">
      <HashRouter>
        <Header />
        <main>
          <Routes>
            {routesConfig.map(({ path, element }, i) => (
              <Route key={i} path={path} element={element}/>))}
          </Routes>
        </main>
      </HashRouter>
    </div>
  );
}

export default App;
