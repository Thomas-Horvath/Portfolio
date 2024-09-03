import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Mousewheel, Keyboard, Autoplay } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


const Blog = () => {
    return (
        <section className="blog section-link" id="blog" data-observe>
            <div className="main-heading">
                <h2>Blog</h2>
                <span>Néhány gondolatom</span>
            </div>
            <div className="blog-wrapper">
                <div className="blogContent">
                    <div className="carousel-container">
                        <Swiper
                            spaceBetween={1}
                            slidesPerView={2}
                            cssMode={true}
                            navigation={true}
                            pagination={false}
                            mousewheel={true}
                            loop={true}
                            keyboard={true}
                            autoplay={{ delay: 3000 }}
                            modules={[Navigation, Pagination, Mousewheel, Keyboard, Autoplay]}
                            className="blog_slider"
                        >
                            <SwiperSlide>
                                <div className="blog-content">
                                    <div className="content-top">
                                        <h2>1. Html a gyakorlatban</h2>
                                        <img src="./assets/img/blog_img/HTML.svg" alt="html blog kép" />
                                        <p>Kezdjük azzal, hogy mi is az a HTML nyelv....</p>
                                    </div>
                                    <a href="./blog.html#blog-1" className="btn-secund">Tovább..</a>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="blog-content">
                                    <div className="content-top">
                                        <h2>2. A CSS varázslat</h2>
                                        <img src="./assets/img/blog_img/css.svg" alt="css blog kép" />
                                        <p>A css a modern weboldal megjelenítésének varázslatos eszköze...</p>
                                    </div>
                                    <a href="./blog.html#blog-2" className="btn-secund">Tovább..</a>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="blog-content">
                                    <div className="content-top">
                                        <h2>3. JavaScript</h2>
                                        <img src="./assets/img/blog_img/js.svg" alt="javascript blog kép" />
                                        <p>Mikor azt szeretnéd, hogy weboldalad interaktívan működjön...</p>
                                    </div>
                                    <a href="./blog.html#blog-3" className="btn-secund">Tovább..</a>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="blog-content">
                                    <div className="content-top">
                                        <h2>4. Vigyázz az adataidra</h2>
                                        <img src="./assets/img/blog_img/security.svg" alt="biztonság blog bejegyzés" />
                                        <p>Volt már úgy, hogy azt érezted figyelnek? A mai kor digitális világában egyre...</p>
                                    </div>
                                    <a href="./blog.html#blog-4" className="btn-secund">Tovább..</a>
                                </div>
                            </SwiperSlide>
                        </Swiper>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default Blog;
