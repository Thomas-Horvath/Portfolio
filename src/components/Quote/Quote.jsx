import React, {useContext} from 'react';
import { LanguageContext } from '../../contexts/LanguageContext';
import { img } from '../../assets//assets';

const Quote = () => {
    const { translations } = useContext(LanguageContext);
    return (
        <section className="quote">
            <div className="quote-container">
                <p>{translations.quote}</p>
                <p>- Dale Carnegie</p>
            </div>

            <img className="grey-wave" src={img.wave_grey_reverse} alt="" />
        </section>
    )
}

export default Quote