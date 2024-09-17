import React from 'react';

const PageUpBtn = () => {
  // Function to scroll to the top of the page
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
     
    });
  };

  return (
    <button className="scrollUp" onClick={scrollToTop} title="Ugrás a lap tetejére">
      <i className="fa-solid fa-arrow-up"></i>
    </button>
  );
};

export default PageUpBtn;
