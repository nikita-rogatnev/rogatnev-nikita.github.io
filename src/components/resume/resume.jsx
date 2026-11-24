import {jobs, education, volunteering} from "../../data/resume";

const Logo = ({logo, url}) => {
    const className = [
        `resume__img`,
        logo.big && `resume__img--big`,
        logo.margin && `resume__img--margin`,
    ].filter(Boolean).join(` `);

    const image = (
        <img src={logo.src} alt={logo.alt} width={logo.width} height={logo.height} className={className}
             loading="lazy" decoding="async"/>
    );

    return url ? (
        <a href={url} className="resume__link" target="_blank" rel="noopener noreferrer nofollow">{image}</a>
    ) : (
        <span className="resume__link">{image}</span>
    );
};

const Articles = ({articles}) => (
    <ul className="resume__articles">
        {articles.map((article) => (
            <li className="resume__articles-item" key={article.url}>
                <a href={article.url} target="_blank" rel="noopener noreferrer">
                    <img src={article.image} alt="" width="420" height="236" loading="lazy" decoding="async"/>
                    <span className="resume__articles-title">{article.title}</span>
                </a>
            </li>
        ))}
    </ul>
);

const Item = ({item, compact}) => (
    <article className={`resume__item${compact ? ` resume__item--compact` : ``}`} data-reveal="">
        <div className="resume__position">
            <Logo logo={item.logo} url={item.url}/>
            <p className="resume__period">{item.period}</p>
            <h4 className="resume__role">
                {item.role} <span className="resume__company">{item.company}</span>
            </h4>
        </div>
        <div className="resume__description">
            {item.summary && <p>{item.summary}</p>}
            {item.bullets && (
                <ul className="resume__list">
                    {item.bullets.map((bullet, index) => <li key={index}>{bullet}</li>)}
                </ul>
            )}
            {item.articles && <Articles articles={item.articles}/>}
        </div>
    </article>
);

const Resume = () => (
    <section className="resume" id="resume" aria-labelledby="resume-heading">
        <div className="resume__heading">
            <span>CHAPTER 01</span>
            <h2 id="resume-heading">Resume</h2>
        </div>
        <div className="resume__wrapper">
            <div className="resume__content">
                <h3 className="title" data-reveal="">Latest Work History</h3>
                <div className="resume__items">
                    {jobs.map((item) => <Item item={item} key={`${item.role}-${item.period}`}/>)}
                </div>

                <div className="resume__action" data-reveal="">
                    <a href="https://www.linkedin.com/in/nikitarogatnev/" className="button button--big"
                       target="_blank" rel="noopener noreferrer">Full profile on LinkedIn</a>
                </div>

                <h3 className="title" data-reveal="">Education</h3>
                <div className="resume__items">
                    {education.map((item) => <Item item={item} compact key={`${item.company}-${item.period}`}/>)}
                </div>

                <h3 className="title" data-reveal="">Volunteer Experience</h3>
                <div className="resume__items">
                    {volunteering.map((item) => <Item item={item} compact key={`${item.role}-${item.period}`}/>)}
                </div>
            </div>
        </div>
    </section>
);

export default Resume;
