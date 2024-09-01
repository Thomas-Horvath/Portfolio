import React from 'react';
import { Link } from 'react-router-dom' 
import ProfilPic from '../../../assets/img/Profil_pic_BG.webp';
import YellowWave from '../../../assets/img/wave-yellow.svg';
import YellowWaveReverse from '../../../assets/img/wave-reverse-yellow.svg';

const About = () => {
    return (
        <section className="about section-link" id="about">
            <div className="main-heading about-main-heading">
                <h2>Néhány szó</h2>
                <span>Rólam</span>
            </div>
            <div className="about-container">
                <div className="about-left">
                    <div className="about-img">
                        <img src={ProfilPic} alt="profilkép"/>
                    </div>
                </div>
                <div className="about-right">
                    <div className="about-section">
                        <h3>Engedd meg, hogy néhány sorban bemutatkozzam!</h3>
                        <p><strong>Horváth Tamás</strong> vagyok, eredetileg zenész, zeneszerző, alkotó. A
                            webfejlesztéssel 2022-ben kezdtem komolyabban foglalkozni.</p>
                        <p>Szeretek alkotni, a tanulás a hobbim. Szeretem a logikusan felépülő rendszereket.
                            Precízen,tökéletességre törekdve ugyanakkor kreatívan megoldani a feladatokat.</p>
                        <p><strong>2022 tavaszán</strong> az Újratervezés program keretében lehetőséget kaptam az IT
                            világába való betekintésre. A <strong>rendszerüzemeltető </strong>képzés során
                            elsajátítottam a számítástechnika alapelveit, a hálózatüzemeltetés alapjait, valamint a
                            kliens (Windows, Linux) és szerver oldali (Windows Server, Linux Server) operációs
                            rendszerek, virtuális gépek (Hyper-V, Docker) és cloud platformok (Azure, AWS)
                            szolgáltatásainak felépítését, használatát és üzemeltetését.</p>
                        <p>Ezt követően <strong>adatbázis specialista </strong>képzésen vettem részt, ahol haladó
                            szinten elsajátítottam az SQL nyelvet, valamint a különböző adatbázis szoftverek (MS SQL,
                            MySQL, MongoDB) használatát, konfigurálását és üzemeltetését. Ezen kívül elsajátítottam az
                            adatbázisok tervezését és optimalizálását is.</p>
                        <p>Folyamatos tanulás iránti elkötelezettségemnek köszönhetően, és mivel mindig a teljes képet
                            szeretem látni, <strong>full-stack fejlesztő </strong>karrier felé vettem az irányt. A
                            <strong>front-end fejlesztés</strong> haladó szintű elsajátítása mellett jelenlegi célom a
                            back-end oldal megismerése, amellyel teljes rendszereket tudok majd megvalósítani a
                            webfejlesztés platformján.
                        </p>
                    </div>
                </div>
                <img src={YellowWaveReverse} alt="fordított sárga hullám háttér"
                    className="wave-yellow-reverse"/>

                    <div className="more-info-container">
                        <div className="info-group-wrapper">
                            <h2>Még néhány infó rólam</h2>
                            <div className="info-group">
                                <div className="info-title">
                                    <h3>1. A gitáros</h3>
                                    <i className="fa-solid fa-circle-arrow-down title-icon"></i>
                                </div>
                                <div className="info-content">
                                    <p>A zene gyerekkorom óta szerves része az életemnek. Tizenhárom éves korom óta
                                        gtiározom, ami egy örök szerelem.</p>
                                        <p> A Kőbányai Zenei Stúdióban végeztem, mint
                                            hivatásos gitáros. Óriási megtiszteltetés volt olyan magyar zenei ikonokkal együtt
                                            zenélni, mint Póka Egon, Babos Gyula vagy Vörös István.
                                        </p>
                                        <p>A következő oldalon többet is megtudhatsz zenei karrieremről:
                                            <Link to="/">ThomasTheGuitarist.hu</Link>
                                        </p>
                                </div>
                            </div>
                            <div className="info-group">
                                <div className="info-title">
                                    <h3>2. Az informatikus</h3>
                                    <i className="fa-solid fa-circle-arrow-down title-icon"></i>
                                </div>
                                <div className="info-content">
                                    <p>A számítógépek világa már gyermekkoromban lenyűgözött, amikor még az MS-DOS és a
                                        Commodore 64 uralkodott.
                                    </p>
                                    <p>Bár inkább a zenei irányba fordultam, a COVID-19
                                        megjelenése radikálisan átformálta az életem. A zene háttérbe szorult viszont egy
                                        remek lehetőségel élve elkezdtem informatikát tanuli. Ez ugyanazt a lelkesedést
                                        ébresztette bennem, mint mikor a zenével kezdtem foglalkozni.
                                    </p>
                                </div>
                            </div>
                            <div className="info-group">
                                <div className="info-title">
                                    <h3>3. A Hobbik</h3>
                                    <i className="fa-solid fa-circle-arrow-down title-icon"></i>
                                </div>
                                <div className="info-content">
                                    <p>Szabadidőmben is szeretek alkotni. Szívesen barkácsolok, és megoldom a házkörül
                                        felmerülő problémákat, legyen az festés, villany vagy autószerelés.
                                    </p>
                                    <p> Örömmel
                                        vetem bele magam az új dolgok elsajátításába. Szeretek kirándulni, olvasni, zenét
                                        hallgatni, gitározni valamint
                                        tanulni.
                                    </p>
                                </div>
                            </div>
                            <div className="info-group">
                                <div className="info-title">
                                    <h3>4. A sport</h3>
                                    <i className="fa-solid fa-circle-arrow-down title-icon"></i>
                                </div>
                                <div className="info-content">
                                    <p>Az fitness és a testépítés mindig is ámulattal töltött el. Tinédzserként
                                        lelkesen jártam az edzőterembe, bár a munka világába lépve már kevésbé tudok időt
                                        szakítani a rendszeres edzésekre.
                                        Terveim közöt szerepel, hogy újra elkezdjek sportolni.</p>
                                    <p>
                                        Legnagyobb inspirációm Arnold Schwarzenegger.
                                    </p>
                                </div>
                            </div>
                            <div className="info-group">
                                <div className="info-title">
                                    <h3>5. A személyiség</h3>
                                    <i className="fa-solid fa-circle-arrow-down title-icon"></i>
                                </div>
                                <div className="info-content">
                                    <p>Számíthatsz rá, hogy minden helyzetben megbízhatóan és precízen végzem el a
                                        feladataimat.
                                    </p>
                                    <p>
                                        Kitartó vagyok az elérni kívánt célokért, miközben könnyen
                                        alkalmazkodom az új helyzetekhez és képes vagyok hatékonyan együttműködni másokkal.
                                    </p>
                                </div>
                            </div>

                        </div>
                    </div>

                    <img src={YellowWave} alt="sárga hullám háttér " className="wave-yellow"/>
                        <div className="btn-group">
                            <a href="#contact" className="btn about-btn">Lépjünk kapcsolatba!<i className="fa-solid fa-arrow-right"></i></a>
                            <a download target="_blank" href="./assets/download/CV_2023hu.pdf" className="btn-secund">
                                <i className="fa-solid fa-file-arrow-down"></i>Tölsd le az önéletrajzom!</a>
                        </div>


                    </div>
                </section>
                )
}

                export default About