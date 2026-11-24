const Footer = () => (
    <footer className="footer">
        <div className="footer__wrapper">
            <div className="footer__content">
                <cite>Nikita Rogatnev</cite>
                <span>&copy; <span data-year="">{new Date().getFullYear()}</span></span>
            </div>
        </div>
    </footer>
);

export default Footer;
