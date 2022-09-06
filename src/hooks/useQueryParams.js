import { useLocation } from 'react-router-dom';

export const useQueryParams = () => {
  const location = useLocation();
  const idPage = parseInt(location.pathname.match(/\d+/));
  const pathTv = location.pathname.split('/')[1] + '/';

  return { idPage, pathTv }
}