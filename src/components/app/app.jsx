import {useEffect} from "react";

import Intro from "../intro/intro";
import Resume from "../resume/resume";
import Certificates from "../certificates/certificates";
import Contact from "../contact/contact";
import Footer from "../footer/footer";
import initReveal from "../../reveal";

// Only runs in the browser during development. The production page is
// prerendered and starts the same enhancement from src/static.js.
const App = () => {
    useEffect(() => {
        initReveal();
    }, []);

    return (
        <>
            <main>
                <Intro/>
                <Resume/>
                <Certificates/>
                <Contact/>
            </main>
            <Footer/>
        </>
    );
};

export default App;
