import React from "react";

class Skills extends React.PureComponent {
    render() {
        return (
            <section className="skills" data-aos="zoom-in">
                <div className="skills__wrapper">
                    <div className="skills__heading">
                        <span>CHAPTER 03</span>
                        <h2>skills</h2>
                    </div>

                    <div className="skills__content">
                        <h2>Development</h2>
                        <svg xmlns="http://www.w3.org/2000/svg" width="108px" height="24px">
                            <path d="M1 12 L108 12" strokeLinecap="round" strokeDasharray="0.001 3.3333333333333335"/>
                        </svg>
                        <ul className="skills__items">
                            <li className="skills__item">BEM, OOCSS, SMACSS</li>
                            <li className="skills__item">Gulp / Grunt / Webpack</li>
                            <li className="skills__item">Adaptive Design / Responsive Design</li>
                            <li className="skills__item">Mobile First / Desktop First</li>
                            <li className="skills__item">Pixel Perfect</li>
                            <li className="skills__item">Search Engine Optimization</li>
                            <li className="skills__item">Phabricator</li>
                        </ul>
                    </div>

                    <div className="skills__content">
                        <h2>CI and Git</h2>
                        <svg xmlns="http://www.w3.org/2000/svg" width="108px" height="24px">
                            <path d="M1 12 L108 12" strokeLinecap="round" strokeDasharray="0.001 3.3333333333333335"/>
                        </svg>
                        <ul className="skills__items">
                            <li className="skills__item">Git / GitHub / Bitbucket</li>
                            <li className="skills__item">GitLab CI</li>
                            <li className="skills__item">Travis CI</li>
                            <li className="skills__item">Jenkins</li>
                            <li className="skills__item">Bamboo</li>
                            <li className="skills__item">Codebase</li>
                            <li className="skills__item">Visual Studio Team Services</li>
                        </ul>
                    </div>

                    <div className="skills__content">
                        <h2>Coding</h2>
                        <svg xmlns="http://www.w3.org/2000/svg" width="108px" height="24px">
                            <path d="M1 12 L108 12" strokeLinecap="round" strokeDasharray="0.001 3.3333333333333335"/>
                        </svg>
                        <ul className="skills__items">
                            <li className="skills__item">HTML5 / CSS3</li>
                            <li className="skills__item">Bootstrap 3/4, Foundation</li>
                            <li className="skills__item">Pug / Handlebars</li>
                            <li className="skills__item">CSS3 / LESS / SASS</li>
                            <li className="skills__item">PostCSS / Stylus</li>
                            <li className="skills__item">JavaScript, jQuery, React</li>
                            <li className="skills__item">PHP / MySQL / Yii</li>
                        </ul>
                    </div>

                    <div className="skills__content">
                        <h2>Design</h2>
                        <svg xmlns="http://www.w3.org/2000/svg" width="108px" height="24px">
                            <path d="M1 12 L108 12" strokeLinecap="round" strokeDasharray="0.001 3.3333333333333335"/>
                        </svg>
                        <ul className="skills__items">
                            <li className="skills__item">Sketch</li>
                            <li className="skills__item">Zeplin</li>
                            <li className="skills__item">Adobe Photoshop CC</li>
                            <li className="skills__item">Adobe Illustrator CC</li>
                            <li className="skills__item">Adobe InDesign CC</li>
                            <li className="skills__item">Avacode</li>
                        </ul>
                    </div>

                    <div className="skills__content">
                        <h2>CMS</h2>
                        <svg xmlns="http://www.w3.org/2000/svg" width="108px" height="24px">
                            <path d="M1 12 L108 12" strokeLinecap="round" strokeDasharray="0.001 3.3333333333333335"/>
                        </svg>
                        <ul className="skills__items">
                            <li className="skills__item">WordPress</li>
                            <li className="skills__item">1-C Bitrix</li>
                            <li className="skills__item">MODX Revolution</li>
                            <li className="skills__item">Livestreet</li>
                            <li className="skills__item">Drupal</li>
                            <li className="skills__item">Opencart</li>
                        </ul>
                    </div>

                    <div className="skills__content">
                        <h2>Payment Integration</h2>
                        <svg xmlns="http://www.w3.org/2000/svg" width="108px" height="24px">
                            <path d="M1 12 L108 12" strokeLinecap="round" strokeDasharray="0.001 3.3333333333333335"/>
                        </svg>
                        <ul className="skills__items">
                            <li className="skills__item">Yandex Kassa</li>
                            <li className="skills__item">Robokassa</li>
                            <li className="skills__item">PayPal</li>
                            <li className="skills__item">Stripe</li>
                        </ul>
                    </div>

                    <div className="skills__content">
                        <h2>Analytics</h2>
                        <svg xmlns="http://www.w3.org/2000/svg" width="108px" height="24px">
                            <path d="M1 12 L108 12" strokeLinecap="round" strokeDasharray="0.001 3.3333333333333335"/>
                        </svg>
                        <ul className="skills__items">
                            <li className="skills__item">Google Analytics</li>
                            <li className="skills__item">Adobe Analytics</li>
                        </ul>
                    </div>

                    <div className="skills__content">
                        <h2>Mobile Development</h2>
                        <svg xmlns="http://www.w3.org/2000/svg" width="108px" height="24px">
                            <path d="M1 12 L108 12" strokeLinecap="round" strokeDasharray="0.001 3.3333333333333335"/>
                        </svg>
                        <ul className="skills__items">
                            <li className="skills__item">Apache Cordova</li>
                            <li className="skills__item">Swift</li>
                        </ul>
                    </div>

                    <div className="skills__action">
                        <a href="https://hh.ru/resume/174b5603ff01623a6f0039ed1f6c5a434e5969?print=true"
                           className="button button--big" target="_blank" rel="noopener noreferrer">Print / Download CV</a>
                    </div>
                </div>
            </section>
        );
    }
}

export default Skills;
