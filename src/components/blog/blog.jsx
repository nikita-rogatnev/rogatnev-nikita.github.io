import React from "react";

class Blog extends React.PureComponent {
    render() {
        return (
            <section className="blog" data-aos="zoom-in">
                <div className="blog__wrapper">
                    <div className="blog__heading">
                        <span>CHAPTER 05</span>
                        <h2>Blog</h2>
                    </div>
                    <div className="blog__content">
                        <div className="blog__items">

                            <article className="blog__item">
                                <a href="https://habrahabr.ru/post/349484/" className="blog__link" target="_blank" rel="noopener noreferrer">
                                    <img src="https://habrastorage.org/webt/7t/zf/h9/7tzfh9w4ytsmfpda1knfeewk10i.jpeg"
                                         alt="Медиа-запросы"/>
                                </a>
                                <div className="blog__description">
                             <span className="blog__item-date">
                                285 feb 18
                             </span>
                                    <h2>Медиа-запросы в адаптивном дизайне 2018</h2>
                                    <p>В июле 2010 года я написала статью «Как использовать CSS3 медиа-запросы для
                                        создания
                                        мобильной версии вашего сайта». Я решила вернуться к этой теме, поскольку теперь
                                        у нас
                                        есть такие методы компоновки, как Flexbox и CSS Grid. В этой статье мы
                                        рассмотрим
                                        современные методы
                                        использования медиа-запросов.</p>
                                    <a href="https://habrahabr.ru/post/349484/" className="button" target="_blank" rel="noopener noreferrer">
                                        Continue reading at<br/>habrahabr.ru
                                    </a>
                                </div>
                            </article>

                            <article className="blog__item">
                                <a href="https://www.theseus.fi/handle/10024/94414" className="blog__link"
                                   target="_blank" rel="noopener noreferrer">
                                    <img src="https://i.ytimg.com/vi/e8Syghjr8YM/maxresdefault.jpg" alt="theseus"/>
                                </a>
                                <div className="blog__description">
                             <span className="blog__item-date">
                                28 may 15
                             </span>
                                    <h2>Responsive Web Design</h2>
                                    <p>In this thesis I described everything regarding to the responsive web design. I
                                        summed up
                                        and compared all the possible website layout approaches. The disadvantages of
                                        fixed,
                                        fluid, adaptive and hybrid layouts are so significant that it is undoubtedly
                                        clear that
                                        the responsive approach is the best one.</p>
                                    <a href="https://www.theseus.fi/handle/10024/94414" className="button"
                                       target="_blank" rel="noopener noreferrer">
                                        Continue reading at<br/>theseus.fi
                                    </a>
                                </div>
                            </article>

                            <article className="blog__item">
                                <a href="https://geektimes.ru/company/madrobots/blog/240182/" className="blog__link"
                                   target="_blank" rel="noopener noreferrer">
                                    <img
                                        src="https://hsto.org/getpro/habr/post_images/12e/e06/53d/12ee0653d7347e963f09adfbcb52b9f2.jpg"
                                        alt="Kickstarter"/>
                                </a>
                                <div className="blog__description">
                             <span className="blog__item-date">
                                14 oct 14
                             </span>
                                    <h2>Ежемесячный дайджест интересных IT-проектов на Kickstarter №6</h2>
                                    <p>Изобретатели продолжают пополнять Kickstarter интереснейшими IT проектами.
                                        Предлагаем
                                        вашему вниманию второй ежемесячный дайджест за сентябрь 2014 года.</p>
                                    <a href="https://geektimes.ru/company/madrobots/blog/240182/" className="button"
                                       target="_blank" rel="noopener noreferrer">
                                        Continue reading at<br/>geektimes.ru
                                    </a>
                                </div>
                            </article>

                            <article className="blog__item">
                                <a href="https://habrahabr.ru/company/madrobots/blog/231689/" className="blog__link"
                                   target="_blank" rel="noopener noreferrer">
                                    <img
                                        src="https://hsto.org/getpro/habr/post_images/12e/e06/53d/12ee0653d7347e963f09adfbcb52b9f2.jpg"
                                        alt="Kickstarter"/>
                                </a>
                                <div className="blog__description">
                             <span className="blog__item-date">
                                28 aug 14
                             </span>
                                    <h2>Ежемесячный дайджест интересных IT-проектов на Kickstarter №5</h2>
                                    <p>Изобретатели продолжают пополнять Kickstarter интереснейшими IT проектами.
                                        Предлагаем
                                        вашему вниманию второй ежемесячный дайджест за июль 2014 года.</p>
                                    <a href="https://habrahabr.ru/company/madrobots/blog/231689/" className="button"
                                       target="_blank" rel="noopener noreferrer">
                                        Continue reading at<br/>geektimes.ru
                                    </a>
                                </div>
                            </article>

                            <article className="blog__item">
                                <a href="https://habrahabr.ru/company/madrobots/blog/226385/" className="blog__link"
                                   target="_blank" rel="noopener noreferrer">
                                    <img
                                        src="https://hsto.org/getpro/habr/post_images/12e/e06/53d/12ee0653d7347e963f09adfbcb52b9f2.jpg"
                                        alt="Kickstarter"/>
                                </a>
                                <div className="blog__description">
                             <span className="blog__item-date">
                                17 jul 14
                             </span>
                                    <h2>Ежемесячный дайджест интересных IT-проектов на Kickstarter №4</h2>
                                    <p>Изобретатели продолжают пополнять Kickstarter интереснейшими IT проектами.
                                        Предлагаем
                                        вашему вниманию второй ежемесячный дайджест за июнь 2014 года.</p>
                                    <a href="https://habrahabr.ru/company/madrobots/blog/226385/" className="button"
                                       target="_blank" rel="noopener noreferrer">
                                        Continue reading at<br/>habrahabr.ru
                                    </a>
                                </div>
                            </article>

                            <article className="blog__item">
                                <a href="https://habrahabr.ru/company/madrobots/blog/220803/" className="blog__link"
                                   target="_blank" rel="noopener noreferrer">
                                    <img
                                        src="https://hsto.org/getpro/habr/post_images/12e/e06/53d/12ee0653d7347e963f09adfbcb52b9f2.jpg"
                                        alt="Kickstarter"/>
                                </a>
                                <div className="blog__description">
                             <span className="blog__item-date">
                                7 may 14
                             </span>
                                    <h2>Ежемесячный дайджест интересных IT-проектов на Kickstarter №3</h2>
                                    <p>Изобретатели продолжают пополнять Kickstarter интереснейшими IT проектами.
                                        Предлагаем
                                        вашему вниманию второй ежемесячный дайджест за апрель 2014 года.</p>
                                    <a href="https://habrahabr.ru/company/madrobots/blog/220803/" className="button"
                                       target="_blank" rel="noopener noreferrer">
                                        ontinue reading at habrahabr.ru
                                    </a>
                                </div>
                            </article>

                            <article className="blog__item">
                                <a href="https://habrahabr.ru/company/madrobots/blog/217431/" className="blog__link"
                                   target="_blank" rel="noopener noreferrer">
                                    <img
                                        src="https://hsto.org/getpro/habr/post_images/12e/e06/53d/12ee0653d7347e963f09adfbcb52b9f2.jpg"
                                        alt="Kickstarter"/>
                                </a>
                                <div className="blog__description">
                             <span className="blog__item-date">
                                30 may 14
                             </span>
                                    <h2>Ежемесячный дайджест интересных IT-проектов на Kickstarter №2</h2>
                                    <p>Изобретатели продолжают пополнять Kickstarter интереснейшими IT проектами.
                                        Предлагаем
                                        вашему вниманию второй ежемесячный дайджест за март 2014 года.</p>
                                    <a href="https://habrahabr.ru/company/madrobots/blog/217431/" className="button"
                                       target="_blank" rel="noopener noreferrer">
                                        Continue reading at<br/>habrahabr.ru
                                    </a>
                                </div>
                            </article>

                            <article className="blog__item">
                                <a href="https://geektimes.ru/post/258434/" className="blog__link" target="_blank" rel="noopener noreferrer">
                                    <img
                                        src="https://hsto.org/getpro/habr/post_images/560/6e6/625/5606e662599455b418b01003b9958298.jpg"
                                        alt="LEGO"/>
                                </a>
                                <div className="blog__description">
                             <span className="blog__item-date">
                                11 mar 14
                             </span>
                                    <h2>Клавиатура из LEGO</h2>
                                    <p>Меня всегда поражало, что только не строят люди из конструктора LEGO: от
                                        громадных фигур
                                        роботов и звездолетов до 3D принтеров и полномасштабных работающих картов. LEGO
                                        выдержало испытание временем. Даже спустя 65 лет после его изобретения
                                        конструкции из
                                        LEGO все еще очаровывают нас. Сегодня я представляю вам очередное произведение
                                        искусства
                                        — клавиатура из LEGO.</p>
                                    <a href="https://geektimes.ru/post/258434/" className="button" target="_blank" rel="noopener noreferrer">
                                        Continue reading at<br/>geektimes.ru
                                    </a>
                                </div>
                            </article>

                            <article className="blog__item">
                                <a href="https://geektimes.ru/post/214821/" className="blog__link" target="_blank" rel="noopener noreferrer">
                                    <img
                                        src="https://hsto.org/getpro/habr/post_images/e35/b88/38e/e35b8838e4ec19acc3d87a3e0c446030.jpg"
                                        alt="DVD"/>
                                </a>
                                <div className="blog__description">
                             <span className="blog__item-date">
                                9 mar 14
                             </span>
                                    <h2>DVD с запахом пиццы!</h2>
                                    <p>Разве вы не любите посмотреть с друзьями интересный фильмец с куском пиццы в
                                        руке?
                                        Пиццерия Domino’s Pizza в Бразилии решили смешать эти два удовольствия в одной
                                        коробке и
                                        выпустили термочувствительный DVD диск, который выглядит и пахнет как пицца.</p>
                                    <a href="https://geektimes.ru/post/214821/" className="button" target="_blank" rel="noopener noreferrer">
                                        Continue reading at<br/>geektimes.ru
                                    </a>
                                </div>
                            </article>

                            <article className="blog__item">
                                <a href="https://geektimes.ru/post/215073/" className="blog__link" target="_blank" rel="noopener noreferrer">
                                    <img
                                        src="https://hsto.org/getpro/habr/post_images/379/c3d/50d/379c3d50d179ff27d905c03273429782.jpg"
                                        alt="Geraghty"/>
                                </a>
                                <div className="blog__description">
                             <span className="blog__item-date">
                                8 mar 14
                             </span>
                                    <h2>Федеральный суд США разрешил использование дронов в коммерческих целяx</h2>
                                    <p>Уже совсем скоро можно будет услышать жужжание маленьких лопастей коптеров,
                                        предвещающих
                                        доставку всего: от электроники, до пиццы и пива по всей территории Соединенных
                                        Штатов
                                        Америки. Это станет реальностью благодаря новому постановлению федерального
                                        судьи
                                        Патрика Джерати (Patrick Geraghty).</p>
                                    <a href="https://geektimes.ru/post/215073/" className="button" target="_blank" rel="noopener noreferrer">
                                        Continue reading at<br/>geektimes.ru
                                    </a>
                                </div>
                            </article>

                            <article className="blog__item">
                                <a href="https://geektimes.ru/post/214811/" className="blog__link" target="_blank" rel="noopener noreferrer">
                                    <img
                                        src="https://hsto.org/getpro/habr/post_images/629/171/bb3/629171bb332065ddfb570a2e7fcc73f4.jpg"
                                        alt="Microsoft"/>
                                </a>
                                <div className="blog__description">
                             <span className="blog__item-date">
                                7 mar 14
                             </span>
                                    <h2>SurroundWeb — 3D-браузер от Microsoft</h2>
                                    <p>Microsoft Research усердно трудятся над разработкой системы «SurroundWeb»,
                                        предназначенной для отображения содержимого веб страниц по всему пространству
                                        комнаты.
                                        SurroundWeb представляет из себя, своего рода, «3D браузер», создающей эффект
                                        полного
                                        погружения пользователя в интернет.
                                    </p>
                                    <a href="https://geektimes.ru/post/214811/" className="button" target="_blank" rel="noopener noreferrer">
                                        Continue reading at<br/>geektimes.ru
                                    </a>
                                </div>
                            </article>

                            <article className="blog__item">
                                <a href="https://geektimes.ru/post/214817/" className="blog__link" target="_blank" rel="noopener noreferrer">
                                    <img
                                        src="https://hsto.org/getpro/habr/post_images/9ea/750/f0c/9ea750f0ccc29cbd6c6aad27f378821e.jpg"
                                        alt="Android"/>
                                </a>
                                <div className="blog__description">
                             <span className="blog__item-date">
                                6 mar 14
                             </span>
                                    <h2>Evernote для Android теперь поддерживает рукописный текст</h2>
                                    <p>Отличная новость для любителей Evernote на Android. Теперь, когда появится
                                        необходимость
                                        быстро сделать заметку, вы сможете сделать набросок от руки прямо в Evernote.
                                        Если вы
                                        таскаете с собой записную книжку, только потому что не любите печатать заметки
                                        на
                                        телефоне, начиная с сегодняшнего дня, обновление приложения Evernote станет для
                                        вас
                                        спасением.</p>
                                    <a href="https://geektimes.ru/post/214817/" className="button" target="_blank" rel="noopener noreferrer">
                                        Continue reading at<br/>geektimes.ru
                                    </a>
                                </div>
                            </article>

                            <article className="blog__item">
                                <a href="https://geektimes.ru/post/214555/" className="blog__link" target="_blank" rel="noopener noreferrer">
                                    <img
                                        src="https://hsto.org/getpro/habr/post_images/c78/9d9/d70/c789d9d708354b93a2eea61c2f21c536.jpg"
                                        alt="протез"/>
                                </a>
                                <div className="blog__description">
                             <span className="blog__item-date">
                                6 mar 14
                             </span>
                                    <h2>Необычный протез для барабанщика</h2>
                                    <p>Для многих барабанщиков потеря руки означает одно — окончание карьеры. Но не для
                                        Джейсона
                                        Барнса (Jason Barnes). Гил Вейнберг (Gil Weinberg), профессор технологического
                                        института
                                        Джорджии, сконструировал протез кисти, который не только восстановил базовые
                                        функции
                                        руки Джейсона, тем самым позволив ему играть как прежде, но и усовершенствовал
                                        ее.</p>
                                    <a href="https://geektimes.ru/post/214555/" className="button" target="_blank" rel="noopener noreferrer">
                                        Continue reading at<br/>geektimes.ru
                                    </a>
                                </div>
                            </article>

                            <article className="blog__item">
                                <a href="https://geektimes.ru/post/212843/" className="blog__link" target="_blank" rel="noopener noreferrer">
                                    <img
                                        src="https://hsto.org/getpro/habr/post_images/12e/e06/53d/12ee0653d7347e963f09adfbcb52b9f2.jpg"
                                        alt="Kickstarter"/>
                                </a>
                                <div className="blog__description">
                             <span className="blog__item-date">
                                5 mar 14
                             </span>
                                    <h2>Ежемесячный дайджест интересных IT-проектов на Kickstarter №1</h2>
                                    <p>Изобретатели продолжают пополнять Kickstarter интереснейшими IT проектами.
                                        Предлагаем
                                        вашему вниманию второй ежемесячный дайджест за февраль 2014 года.</p>
                                    <a href="https://geektimes.ru/post/212843/" className="button" target="_blank" rel="noopener noreferrer">
                                        Continue reading at<br/>geektimes.ru
                                    </a>
                                </div>
                            </article>

                            <article className="blog__item">
                                <a href="https://habrahabr.ru/post/214327/" className="blog__link" target="_blank" rel="noopener noreferrer">
                                    <img
                                        src="https://hsto.org/getpro/habr/post_images/9e4/4b2/852/9e44b28527e622fde10b4743e771ae73.png"
                                        alt="Кейлогер"/>
                                </a>
                                <div className="blog__description">
                             <span className="blog__item-date">
                                3 mar 14
                             </span>
                                    <h2>Кейлогер iOS 7</h2>
                                    <p>Проблема кейлогеров для мобильных приложений становится все заметнее в мире
                                        мобильных
                                        устройств. Уже достаточно давно стало известно, что джейлбрейкнутые IOS 7
                                        девайсы могут
                                        быть уязвимы для кейлогеров, которые записывают и передают все ваши жесты и
                                        нажатия
                                        злоумышленникам. Теперь это касается и не взломанных IOS устройств.</p>
                                    <a href="https://habrahabr.ru/post/214327/" className="button" target="_blank" rel="noopener noreferrer">
                                        Continue reading at<br/>habrahabr.ru
                                    </a>
                                </div>
                            </article>

                            <article className="blog__item">
                                <a href="https://habrahabr.ru/post/213187/" className="blog__link" target="_blank" rel="noopener noreferrer">
                                    <img
                                        src="https://searchengineland.com/figz/wp-content/seloads/2014/07/yahoo-logo-fade-ss-1920-800x450.jpg"
                                        alt="Yahoo"/>
                                </a>
                                <div className="blog__description">
                             <span className="blog__item-date">
                                2 mar 14
                             </span>
                                    <h2>Как удалить 1500000 записей из базы данных Yahoo</h2>
                                    <p>На четвертом по посещаемости сайте — Yahoo.com, была обнаружена очередная
                                        уязвимость, на
                                        этот раз на поддомене suggestions.yahoo.com. Эта уязвимость позволяет
                                        злоумышленнику
                                        удалить всю ленту доски предложений (Yahoo Suggestion Board), а так же все
                                        комментарии к
                                        ней.</p>
                                    <a href="https://habrahabr.ru/post/213187/" className="button" target="_blank" rel="noopener noreferrer">
                                        Continue reading at<br/>habrahabr.ru
                                    </a>
                                </div>
                            </article>

                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Blog;
