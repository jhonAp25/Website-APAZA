import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'instant', // también puedes poner 'smooth' si quieres un scroll suave
    });
  }, [pathname]);

  return null;
};

export default ScrollToTop;
