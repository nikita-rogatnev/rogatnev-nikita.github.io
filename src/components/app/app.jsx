import React from "react";
import AOS from "aos";

import Intro from "../intro/intro";
import Resume from "../resume/resume";
import Certificates from "../certificates/certificates";
import Contact from "../contact/contact";
import Footer from "../footer/footer";

class App extends React.PureComponent {
    componentDidMount() {
        AOS.init({
            duration: 2000
        })
    }

    render() {
        return (
            <React.Fragment>
                <main>
                    <Intro/>
                    <Resume/>
                    <Certificates/>
                    <Contact/>
                </main>
                <Footer/>
            </React.Fragment>
        );
    }
}

export default App;
