import MoviesPage from "../containers/moviesPage/MoviesPage";
import TvPage from "../containers/tvPage/TvPage";

const routesConfig = [
  {
    path: "/MoviesPage",
    element: <MoviesPage />
  },
  {
    path: "/TvPage",
    element: <TvPage />
  }
];

export default routesConfig;