import { FunctionComponent } from "react";


import Logo from "../../Atoms/Logo";
import OpeningHoursList from "../../Molecules/OpeningHoursList";

const Footer: FunctionComponent = () => {
    const year = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="footer__content">
                <div className="footer__content__logo">
                    <Logo height={100} />
                </div>
                <div className="footer__content__opening-hours">
                    <h3>Openingstijden</h3>
                    <OpeningHoursList />
                </div>
                <div className="footer__content__contact">
                    <h3>Contact</h3>
                    <div className="footer__content__contact-item">
                        <h4>Adres</h4>
                        <p>Eindhoven</p>
                    </div>
                    <div className="footer__content__contact-item">
                        <h4>Telefoon</h4>
                        <a href="tel:040 845 7955">040 845 7955</a>
                    </div>
                </div>
            </div>
            
            <div className="footer__copyright">
                © Copyright {year} Innovation A Zorg - Alle rechten voorbehouden
            </div>
        </footer>
    );
}

export default Footer;
