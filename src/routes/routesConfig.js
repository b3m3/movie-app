import Home from '../containers/home/Home';
import Movies from '../containers/movies/Movies';
import Series from '../containers/series/Series';
import Category from '../containers/category/Category';
import Search from '../containers/search/Search';
import More from '../containers/more/More';
import NotFound from '../containers/notFound/NotFound';
import Favorite from '../containers/favorite/Favorite';

import { PAGE_ROOT, SEARCH } from '../constans/api';

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
    path: "/favorite",
    element: <Favorite />
  },
  {
    path: "/:tv/:id",
    element: <More />
  },
  {
    path: "/:tv/"+SEARCH+":name"+PAGE_ROOT+":id",
    element: <Search />
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