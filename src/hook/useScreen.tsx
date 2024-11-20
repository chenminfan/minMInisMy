import { useState, useEffect } from 'react';

export const useScreen = () => {
  const [scrollTop, setScrollTop] = useState(0);
  useEffect(() => {
    const onScroll = () => {
      setScrollTop(document.documentElement.scrollTop);
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return [scrollTop];
};
