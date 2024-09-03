import React from 'react';
import { HashLink } from 'react-router-hash-link';

const PageUpBtn = () => {
  return (
<HashLink className="scrollUp" to="/#home" title="Ugrás a lap tetejére"><i className="fa-solid fa-arrow-up"></i></HashLink>
  )
}

export default PageUpBtn