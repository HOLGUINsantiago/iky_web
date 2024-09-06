// ScrollToTop.js
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); // Mueve el scroll al inicio
  }, [pathname]);

  return null; // Este componente no renderiza nada visualmente
};

export default ScrollToTop;
