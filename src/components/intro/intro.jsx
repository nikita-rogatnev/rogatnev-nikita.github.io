import React from "react";

class Intro extends React.PureComponent {
    render() {
        return (
            <section className="intro">
                <div className="intro__wrapper">
                    <div className="intro__content">
                        <h3>Chief <span>Operating</span> Officer</h3>
                        <h2>Nikita&#10;Rogatnev</h2>
                        <h4>MBA / BEng / PSM / Lean Six Sigma Black Belt</h4>
                        <p>
                        Confident, empowering, and positive Chief Operating Officer with a strong foundation in leadership, and managing others with 12+ total years experience towards enhancing the operational procedures, systems, and principles in the areas of information flow and management, and business processes. Excels at overcoming business challenges through data-based analysis, facilitating consensus, rapid implementation of agreed-upon solutions, and managing the team or organization through change. OCD towards processes, organization, naming conventions, quality improvements, and training development.
                        </p>
                    </div>
                </div>
            </section>
        );
    }
}

export default Intro;
