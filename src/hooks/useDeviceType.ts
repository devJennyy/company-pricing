import { useState, useEffect } from 'react';

const useDeviceType = () => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const isMobile = width <= 640;
  const isTablet = width > 640 && width <= 1024;

  return { isMobile, isTablet };
};

export default useDeviceType;
