import React from 'react';
import { useParams, Link } from 'react-router-dom';
import BackButton from '../../components//BackButton/BackButton';


const InfoPage = () => {
    const { category } = useParams();
    let content;

    if (category === "policy") {
        content = <section className="policy">
            <h1>Adatkezelési Irányelvek</h1>

            <div className="policy-wrapper">
                <h2>1. Adatvédelem és Biztonság</h2>

                <p>Az ügyféladataidat szigorúan bizalmasnak tekintjük, és minden létező intézkedést megteszünk azok védelme
                    érdekében.
                    Kizárólag azok a munkatársak férhetnek hozzá az adatokhoz, akiknek erre kifejezett felhatalmazásuk van,
                    és
                    akiknek szükségük van rá a munkájuk során.
                    Rendszeres adatbiztonsági ellenőrzéseket végzünk annak érdekében, hogy megelőzzük az illetéktelen
                    hozzáféréseket és a biztonsági incidenseket.
                </p>

                <h2>2. Adatgyűjtés és Felhasználás</h2>

                <p>Az ügyféladatokat kizárólag tisztességes és törvényes célokra gyűjtjük és használjuk fel.
                    Az adatokat kizárólag az ügyfelekkel való kapcsolat fenntartásához, valamint a szolgáltatásaink
                    fejlesztéséhez
                    és javításához használjuk fel.
                    Nem értékesítjük, vagy adjuk ki az ügyféladatainkat harmadik felek számára engedély nélkül.
                </p>

                <h2>3. Felhasználói Jogok</h2>

                <p>Ügyfeleinknek joguk van hozzáférni az általuk megadott személyes adatokhoz, valamint kérhetik azok
                    helyesbítését
                    vagy törlését, amennyiben szükséges.
                    Amennyiben ügyfeleink szeretnék kijelenteni az adatkezeléssel kapcsolatos preferenciáikat, kérjük, hogy
                    vegyék
                    fel velünk a kapcsolatot az alábbi elérhetőségeken.
                </p>
                <h2>4. Adatvédelmi Tájékoztatás és Felülvizsgálat</h2>

                <p>Rendszeresen frissítjük az adatvédelmi irányelveinket annak érdekében, hogy megfeleljünk a jogi
                    követelményeknek
                    és az ügyfelek elvárásainak.
                    Az esetleges változásokról értesítést küldünk ügyfeleinknek, és minden új adatvédelmi intézkedést
                    előzetesen
                    ellenőrzünk és jóváhagyunk.
                </p>
            </div>
            <BackButton />
        </section>

    } else if (category === 'impresszum') {
        content = <section className="impresszum">
            <h1>Impresszum</h1>

            <div className="page-owner-container">
                <h2>Oldalt üzemeltető adatai:</h2>

                <div className="content-item-container">
                    <strong>Név:</strong>
                    <p>Horváth Tamás</p>
                </div>
                <div className="content-item-container">
                    <strong>Cím:</strong>
                    <p>2013 Pomáz, Példa utca</p>
                </div>
                <div className="content-item-container">
                    <strong>Telefonszám:</strong>
                    <p>06-1-123-4567</p>
                </div>
                <div className="content-item-container">
                    <strong>E-mail cím:</strong>
                    <p>info@sajatdomainnevem.hu</p>
                </div>
            </div>

            <div className="hosting-provider-container">
                <h2>Webtárhely szolgáltató adatai:</h2>
                <div className="content-item-container">
                    <strong>Cégnév:</strong>
                    <p> Nethely Kft.</p>
                </div>
                <div className="content-item-container">
                    <strong>Székhely: </strong>
                    <p>1115 Budapest, Halmi utca 29.</p>
                </div>
                <div className="content-item-container">
                    <strong>Fióktelep:</strong>
                    <p> 6724 Szeged, Teréz utca 34.</p>
                </div>
                <div className="content-item-container">
                    <strong>Webcím:</strong>
                    <p> <Link to="https://www.nethely.hu" target="_blank">https://www.nethely.hu</Link></p>
                </div>
                <div className="content-item-container">
                    <strong>Elérhetőség:</strong>
                    <p> <Link to="https://www.nethely.hu/rolunk" target="_blank">https://www.nethely.hu/rolunk</Link></p>
                </div>
            </div>
            <BackButton />
        </section>
    } else if (category === 'cookies') {
        content = <section className="cookies">
            <h1>Sütik kezelése</h1>

            <div className="cookies-wrapper">
                <p>A portfólió weboldalamra való belépéskor a weboldal automatikusan elmenthet információkat az Ön
                    számítógépéről, illetve a böngészésre használt eszközéről (tablet, okostelefon). Erre a célre ún.
                    számítógépes „sütiket” (cookie) használ.</p>

                <h2>Mi az a süti?</h2>
                <p>A cookie egy rövid szöveg, amelyet a felkeresett webhely küld el böngészőjébe. Segítségével a webhely
                    megjegyzi a látogatásával kapcsolatos információkat, például az Ön által használt nyelvet és egyéb
                    beállításokat. Ezáltal gördülékenyebbé válhat a következő látogatás, és könnyebb lesz a webhely
                    használata. A cookie-k fontos szerepet játszanak. Nélkülük az internet használata sokkal nehézkesebb
                    lenne.</p>
                <h2>Milyen sütiket és milyen célból használunk a weboldalon?</h2>

                <strong>ÁLLANDÓ VAGY IDEIGLENES SÜTIK</strong>
                <p>Weboldalam un. „ideiglenes sütiket” (session/munkamenet sütik) és „állandó sütiket” is használ. Az
                    ideiglenes sütik addig maradnak a számítógépén, amíg Ön el nem hagyja a weboldalamat. Az állandó sütik
                    hosszabb ideig (a böngésző beállításától függően), vagy egészen addig maradnak az eszközén, ameddig Ön
                    azokat manuálisan nem törli.</p>

                <strong>MUNKAMENET (SESSION) SÜTIK</strong>
                <p>Ideiglenes süti, csak az aktuális látogatás ideje alatt, a munkamenet végével, valamint a böngésző
                    bezárásával automatikusan törlődnek számítógépéről. Ezek nélkülözhetetlenek a weboldalamon történő
                    navigáláshoz és a weboldal üzemszerű működéséhez. A munkamenet sütik semmilyen esetben sem gyűjtenek
                    Önről olyan információkat, amellyel Önt azonosítani lehetne.</p>

                <strong>TELJESÍTMÉNYT BIZTOSÍTÓ SÜTIK (ANALITIKA)</strong>
                <p>A Google Analytics sütik segítségével információt gyűjtök látogatóim viselkedéséről és jellemzőiről. Ez
                    segít számomra, hogy a későbbiekben még átláthatóbbá, könnyebben használhatóvá tegyen a weboldalamat. E
                    sütik nem képesek Önt személy szerint beazonosítani, például nem rögzítem az Ön nevét és email címét; az
                    adatokat összesítve és névtelenül tárolják. Az IP címet is csak részben rögzítik.</p>
                <p><u>További információ:</u>
                    <Link to="https://developers.google.com/analytics/devguides/collection/analyticsjs/cookie-usage" target="_blank">Ezen az oldalon.</Link> </p>

                <strong>HASZNÁLATOT ELŐSEGÍTŐ, UN. FUNKCIONÁLIS SÜTIK</strong>
                <p>Segítségükkel megjegyezhetem honlapomon kapcsolatos döntéseit (pl.: űrlapokon megadott adatokat, stb).
                    Ezek a sütik kizárólag a meglátogatott weboldalon követik nyomon az Ön tevékenységét, más honlapokon
                    nem. Ezen sütik tárolhatnak személyes azonosító adatokat, amelyeket Ön megadott weboldalamon, mint az Ön
                    e-mail címe.</p>

                <strong>HARMADIK FÉLTŐL SZÁRMAZÓ SÜTIK</strong>
                <p>Előfordulhat, hogy harmadik féltől származó külső webes szolgáltatásokat veszek igénybe weboldalamon.
                    Ebben az esetben a sütik tárolását nem én felügyelem, nincs ráhatásom arra, hogy ezek a külső
                    szolgáltatók milyen információkat gyűjtenek.</p>
                <p>A Google által használt cookie-k típusáról <strong><Link to="https://www.google.com/policies/privacy/"
                    target="_blank" rel="noopener noreferrer">ITT</Link></strong> tájékozódhat.</p>


                <h2>A sütik (cookies) ellenőrzése, kezelése, kikapcsolása</h2>
                <strong>HOGYAN LEHET VISSZAVONNI A HOZZÁJÁRULÁST?</strong>
                <p>A hozzájárulás érvényessége időnként lejár. Azonban, hogyha szeretné visszavonni hozzájárulását, a
                    böngészője cookie beállításai között bármikor megteheti.</p>

                <strong>BÖNGÉSZŐ BEÁLLÍTÁSA</strong>
                <p>Ezek a cookie-k nem tárolnak személyes adatokat, például az Ön nevét, címét vagy fizetési adatait. Ha
                    mégis szeretné letiltani, blokkolni vagy törölni a cookie-kat honlapomról, böngészője segítségével
                    megteheti. Fontosabb böngészők cookie beállításait itt érheti el:</p>
                <ul >
                    <li><strong><Link to="https://support.google.com/chrome/answer/95647?hl=hu" target="_blank"
                        rel="noopener noreferrer">Chrome</Link></strong></li>
                    <li><strong><Link to="https://support.mozilla.org/en-US/kb/delete-cookies-remove-info-websites-stored"
                        target="_blank" rel="noopener noreferrer">Firefox</Link> </strong></li>
                    <li><strong><Link
                        to="http://windows.microsoft.com/hu-hu/internet-explorer/delete-manage-cookies#ie=ie-11"
                        target="_blank" rel="noopener noreferrer">Microsoft Internet Explorer</Link> </strong></li>
                </ul>

                <strong>ANONIM GOOGLE ANALYTICS SÜTIK KIKAPCSOLÁSA:</strong>
                <p>Ahhoz, hogy megakadályozza, hogy a Google Analytics sütik Önre vonatkozó információkat gyűjtsenek,
                    telepítenie kell egy kiegészítőt (Google Analytics plug-in) a böngészőjébe.</p>
                <p>Erről további információkat az alábbi linkeken talál:</p>
                <p>A sütik letilthatók a Google szolgáltatásaiban is, a Google reklámok letiltására vonatkozó oldalán: <a
                    href="http://www.google.com/intl/hu/policies/technologies/ads" target="_blank"
                    rel="noopener noreferrer">Link</a></p>
                <p>A felhasználó gépén tárolt Google információkat az alábbi oldalon lehet kezelni: <a
                    href="https://www.google.com/settings/ads/preferences" target="_blank"
                    rel="noopener noreferrer">Link</a></p>
                <p>„Google adatvédelem és biztonság” témában tovább olvashat itt: <a
                    href="https://support.google.com/analytics/answer/6004245" target="_blank"
                    rel="noopener noreferrer">Link</a></p>
            </div>
            <BackButton />
        </section>

    }



    return (
        <>
            {content}
        </>
    )
}

export default InfoPage