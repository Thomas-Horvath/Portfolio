import React, { useContext } from 'react';
import { LanguageContext } from '../../contexts/LanguageContext';
import flagHu from '../../assets/img/hungarian-flag.png';
import flagEn from '../../assets/img/great-britain-flag.png';

const LanguageSelector = () => {
  const { language, switchLanguage } = useContext(LanguageContext);

  return (
    <div className="language-selector">
      {language === 'hu' ? (
        <img
          src={flagEn}
          alt="Angol zászló"
          onClick={() => switchLanguage('en')}
          style={{ cursor: 'pointer', opacity: 1 }}
        />
      ) : (
        <img
          src={flagHu}
          alt="Magyar zászló"
          onClick={() => switchLanguage('hu')}
          style={{ cursor: 'pointer', opacity: 1 }}
        />
      )}
    </div>
  );
};

export default LanguageSelector;
