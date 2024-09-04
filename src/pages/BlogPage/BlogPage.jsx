import React from 'react';
import { useParams } from 'react-router-dom';
import BackButton from '../../components//BackButton/BackButton';


const BlogPage = () => {
    const { id } = useParams();
    let content;



    if (Number(id) === 1) {
        content = <div className="blog-article-container" id="blog-1">
            <article className="blog-1 blog-section" >
                <h2>1. Html a gyakorlatban</h2>
                <p>Kezdjük azzal, hogy mi is az a HTML nyelv.</p>
            </article>
            <BackButton />
        </div>
    } else if (Number(id) === 2) {
        content = <div className="blog-article-container" id="blog-2">
            <article className="blog-2 blog-section" >
                <h2>2. A CSS varázslat</h2>
                <p>A css a modern weboldal megjelenítésének varázslatos eszköze.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate minus eveniet magnam assumenda
                    vitae,
                    quo, dolorem beatae suscipit culpa animi alias dolore impedit est atque hic fugiat unde deserunt
                    quam
                    possimus in! Dolorum totam quos deserunt voluptatibus laboriosam, veritatis aspernatur id sequi
                    iusto
                    commodi deleniti architecto quas iure. Amet mollitia porro obcaecati eaque dolores cumque quisquam
                    debitis pariatur exercitationem minus delectus sint totam vitae alias quae, iusto reprehenderit at,
                    eligendi molestiae commodi, dolorem modi nesciunt! Nam dolor ducimus omnis repellendus, dicta
                    placeat
                    consequatur nostrum repudiandae ipsam optio quaerat, sapiente nihil cupiditate porro commodi quae
                    culpa
                    non cumque error dignissimos perspiciatis! Dignissimos perspiciatis mollitia voluptatum laboriosam
                    sequi! Mollitia ipsum incidunt, ab accusamus eveniet numquam quae sapiente laboriosam excepturi
                    nostrum
                    quas ullam deleniti sed tempora tempore magni, animi alias sit fugit nam aut possimus? Debitis,
                    nihil!
                    Quis impedit veritatis eligendi amet officiis ab ex repellat vitae consectetur. Saepe odio ad
                    tempore
                    earum reprehenderit soluta dolorem, provident aperiam! Ipsam praesentium atque doloribus,
                    accusantium
                    eveniet dolores obcaecati amet perspiciatis velit laborum aliquam cupiditate. Labore esse
                    repellendus,
                    earum porro maiores corporis similique eaque minima illum velit optio vel, beatae itaque aperiam
                    facere
                    ipsum accusamus voluptas illo veritatis et aut commodi explicabo vero! Neque dolorem tempora
                    sapiente
                    adipisci sint at cumque minus vitae! Blanditiis labore architecto incidunt facilis illum rem,
                    repellendus fuga. Voluptate similique numquam sequi autem vitae dolor quibusdam amet quas
                    consequuntur,
                    cum unde, quae, est praesentium aliquam. Iure amet perspiciatis minus qui commodi atque molestiae
                    asperiores repellendus, incidunt assumenda placeat id dignissimos animi fuga reiciendis voluptatibus
                    facere necessitatibus sequi magni autem corrupti, laborum alias harum. Corrupti itaque fuga cum
                    dignissimos aut repellat pariatur aliquam asperiores alias, atque laboriosam doloremque ducimus
                    possimus
                    enim perferendis magni rem consequuntur cumque, cupiditate eum aperiam quia nam adipisci? Molestias
                    nesciunt quasi sit neque voluptatum, exercitationem saepe commodi odio. Quos itaque similique
                    adipisci
                    enim cupiditate tempore sit ipsam dolorum in, omnis natus repudiandae. Iste aliquam doloribus
                    aliquid
                    pariatur iusto possimus nihil fugit odio deleniti sint? A, ducimus illum atque corporis sunt facere
                    necessitatibus aperiam dolorum omnis cumque quo ex laboriosam reprehenderit animi dolore quia ab rem
                    magnam exercitationem minima quidem hic nisi. Nemo maiores rerum quod possimus, recusandae error
                    adipisci excepturi? Quae illo cumque velit, temporibus non mollitia porro nulla? Expedita laborum
                    inventore sequi facere quidem numquam eius corrupti, labore possimus eveniet, commodi nostrum
                    perferendis fuga recusandae. Perferendis, minima aperiam ipsam, deleniti minus, sequi eveniet
                    voluptatem
                    sunt laudantium modi facilis?</p>
            </article>
            <BackButton />
        </div>
    } else if (Number(id) === 3) {
        content = <div className="blog-article-container" id="blog-3">
            <article className="blog-3 blog-section" >
                <h2>3. JavaScript</h2>
                <p>Mikor azt szeretnéd, hogy weboldalad interaktívan működjön.</p>
            </article>
            <BackButton />
        </div>
    } else if (Number(id) === 4) {
        content =
            <div className="blog-article-container" id="blog-4">
                <article className="blog-4 blog-section" >
                    <h2>4. Vigyázz az adataidra</h2>
                    <p>Volt már úgy, hogy azt érezted figyelnek?
                        A mai kor digitális világában
                        egyre aggasztób a kiberbűnözés térhódítása.</p>
                </article>
                <BackButton />
            </div>
    }



    return (
        <main className="blogPage-wrapper">
            {content}
        </main>
    )
}

export default BlogPage