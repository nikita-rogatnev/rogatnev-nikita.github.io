import React from "react";

class Intro extends React.PureComponent {
    render() {
        return (
            <section className="intro">
                <div className="intro__wrapper">
                    <div className="intro__content">
                        <h2>Nikita <span>Rogatnev</span></h2>
                        <h4>MBA | BEng | PSM | Trusted AI Safety Expert | Lean Six Sigma Black Belt | ISO/IEC 27001:2022 & 42001:2023 Lead Auditor</h4>
                        <p>With over 15 years of experience enhancing operational and business procedures, systems, and principles in the areas of information flow and management, I approach business challenges with data-driven analysis, stakeholder alignment, and efficient execution - while guiding teams and organizations through change with clarity and confidence.</p>
                    </div>
                </div>
            </section>
        );
    }
}

export default Intro;
