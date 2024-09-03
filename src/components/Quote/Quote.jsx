import React, {useContext} from 'react';
import { LanguageContext } from '../../contexts/LanguageContext';

const Quote = () => {
    const { translations } = useContext(LanguageContext);
    return (
        <section className="quote">
            <div className="quote-container">
                <p>{translations.quote}</p>
                <p>- Dale Carnegie</p>
            </div>
        </section>
    )
}

export default Quote