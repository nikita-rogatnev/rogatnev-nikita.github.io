import React from "react";

class Intro extends React.PureComponent {
    render() {
        return (
            <section className="intro">
                <div className="intro__wrapper">
                    <div className="intro__content">
                        <h3>Director of <span>Operations</span></h3>
                        <h2>Nikita&#10;Rogatnev</h2>
                        <h4>MBA / ITSM / ITIL 4 / Servant Leadership</h4>
                        <p>
                        Confident, empowering, and positive Director of Operations with a strong foundation in leadership, and managing others with 12+ total years experience towards enhancing the operational procedures, systems, and principles in the areas of information flow and management, and business processes. Excels at overcoming business challenges through data-based analysis, facilitating consensus, rapid implementation of agreed-upon solutions, and managing the team or organization through change. OCD towards processes, organization, naming conventions, quality improvements, and training development.
                        </p>
                    </div>
                </div>
            </section>
        );
    }
}

export default Intro;
