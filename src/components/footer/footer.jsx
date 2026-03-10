import React from "react";

const today = new Date();

class Footer extends React.PureComponent {
    render() {
        return (
            <footer className="footer">
                <div className="footer__wrapper">
                    <div className="footer__content">
                        <cite>Nikita Rogatnev</cite>
                        <span>&copy; {today.getFullYear()}</span>
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;
