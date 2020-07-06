import React from "react";

class Footer extends React.PureComponent {
    render() {
        return (
            <footer className="footer">
                <div className="footer__wrapper">
                    <div className="footer__content">
                        <cite>Nikita Rogatnev</cite>
                        <span>&copy; 2020</span>
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;
