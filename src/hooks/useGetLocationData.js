import {useLocation} from 'react-router-dom';

const useGetLocationData = () => {
  const { pathname } = useLocation();
  const slice = pathname.split('/');

  return {
    depth1: slice[1],
    depth2: slice[2],
  }
};

export default useGetLocationData;
