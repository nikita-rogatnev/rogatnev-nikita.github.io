import {certificates, badges} from "../../data/certificates";

const Badge = ({badge}) => {
    const className = [
        `certificates__badge`,
        badge.wide && `certificates__badge--wide`,
        badge.small && `certificates__badge--small`,
    ].filter(Boolean).join(` `);

    const image = (
        <img src={badge.src} alt={badge.alt} width={badge.width || 240} height={badge.height || 240}
             loading="lazy" decoding="async"/>
    );

    return (
        <li className="certificates__badges-item">
            {badge.url ? (
                <a href={badge.url} className={className} title={badge.alt} target="_blank"
                   rel="noopener noreferrer">{image}</a>
            ) : (
                <span className={className} title={badge.alt}>{image}</span>
            )}
        </li>
    );
};

const Certificates = () => (
    <section className="certificates" id="certificates" aria-labelledby="certificates-heading">
        <div className="certificates__heading">
            <span>CHAPTER 02</span>
            <h2 id="certificates-heading">Certificates</h2>
        </div>
        <div className="certificates__wrapper">
            <div className="certificates__content">
                <h3 className="title" data-reveal="">Certifications</h3>
                <ul className="certificates__items" data-reveal="">
                    {certificates.map(([year, name]) => (
                        <li className="certificates__item" key={`${year}-${name}`}>{year} - {name}</li>
                    ))}
                </ul>
                <ul className="certificates__badges" data-reveal="">
                    {badges.map((badge) => <Badge badge={badge} key={badge.src}/>)}
                </ul>
            </div>
        </div>
    </section>
);

export default Certificates;
