import { useLocation } from 'react-router-dom';

export const useQueryParams = () => {
  const location = useLocation();
  const idPage = +location.pathname.split('=').pop();
  const pathTv = location.pathname.split('/')[1] + '/';
  

  return { idPage, pathTv }
}