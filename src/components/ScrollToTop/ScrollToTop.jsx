import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
    const location = useLocation();

    useEffect(() => {
        // Késleltetett ugrás az oldal tetejére
        const timer = setTimeout(() => {
            // Ellenőrizzük, hogy van-e hash a URL-ben
            const hasHash = location.hash;

            // Ha nincs hash, akkor ugrunk az oldal tetejére
            if (!hasHash) {
                window.scrollTo(0, 0);
            }
        }, 0); // Azonnal, de késleltetve futtatjuk

        // Cleanup function
        return () => clearTimeout(timer);
    }, [location]); // Az effectet a location változásakor futtatjuk

    return null;
};

export default ScrollToTop;
