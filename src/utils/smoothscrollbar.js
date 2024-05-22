import React, { useEffect, useRef } from 'react';
import Scrollbar from 'smooth-scrollbar';

const SmoothScrollbar = ({ children }) => {
  const scrollbarRef = useRef(null);

  useEffect(() => {
    if (scrollbarRef.current) {
      const options = {
        damping: 0.4,
      };

      const scrollbar = Scrollbar.init(scrollbarRef.current, options);

      return () => {
        if (scrollbar) scrollbar.destroy();
      };
    }
  }, []);

  return (
    <div ref={scrollbarRef} style={{ height: '100vh', overflow: 'hidden' }}>
      {children}
    </div>
  );
};

export default SmoothScrollbar;