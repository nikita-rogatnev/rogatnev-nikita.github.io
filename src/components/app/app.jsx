import React from "react";

import Intro from "../intro/intro";
import Resume from "../resume/resume";
import Portfolio from "../portfolio/portfolio";
import Skills from "../skills/skills";
import Certificates from "../certificates/certificates";
import Blog from "../blog/blog";
import Contact from "../contact/contact";
import Footer from "../footer/footer";

class App extends React.PureComponent {
    render() {
        return (
            <React.Fragment>
                <main>
                    <Intro/>
                    <Resume/>
                    <Portfolio/>
                    <Skills/>
                    <Certificates/>
                    <Blog/>
                    <Contact/>
                </main>
                <Footer/>
            </React.Fragment>
        );
    }
}

export default App;
