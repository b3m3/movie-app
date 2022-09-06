import Home from '../containers/home/Home';
import Movies from '../containers/movies/Movies';
import Series from '../containers/series/Series';
import Category from '../containers/category/Category';
import Info from '../containers/info/Info';
import NotFound from '../containers/notFound/NotFound';

import { PAGE_ROOT } from '../constans/api';

const routesConfig = [
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/movie",
    element: <Movies />
  },
  {
    path: "/tv",
    element: <Series />
  },
  {
    path: "/:tv/:id",
    element: <Info />
  },
  {
    path: "/:tv/:category"+PAGE_ROOT+":id",
    element: <Category />
  },
  {
    path: "*",
    element: <NotFound />
  },
];

export default routesConfig;