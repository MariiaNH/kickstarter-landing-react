import logo from '../IMAGES/logo.svg';
import facebookLogo from '../IMAGES/facebook.svg';
import twitterLogo from '../IMAGES/twitter.svg';
import instagramLogo from '../IMAGES/instagram.png';
import arrowUp from '../IMAGES/arrowUp.png';

const Footer = () => {
    return (
        <footer className="footer container">
            <div className="footer__content">
                <a
                    href="#header"
                    className="icon icon__arrow-up"
                    id="scroll-up"
                >
                    <img src={arrowUp} />
                </a>

                <div className="logo footer__logo">
                    <a
                        href="https://www.crazybaby.com/"
                        className="logo__link"
                        target="_blank"
                    >
                        <img
                            src={logo}
                            alt="CrazyBaby logo"
                            className="logo__image"
                        />
                    </a>
                </div>
                <div className="footer__icons">
                    <a
                        href="https://www.facebook.com/hicrazybaby/"
                        className="icon icon__facebook"
                        target="_blank"
                    >
                        <img src={facebookLogo} />
                    </a>

                    <a
                        href="https://twitter.com/crazybabyaudio"
                        className="icon icon__twitter"
                        target="_blank"
                    >
                        <img src={twitterLogo} />
                    </a>

                    <a
                        href="https://www.instagram.com/crazybaby/"
                        className="icon icon__insta"
                        target="_blank"
                    >
                        <img src={instagramLogo} />
                    </a>
                </div>

                <p className="footer__policy">
                    © 2023 All rights reserved. Terms of Use & Privacy Policy
                </p>
            </div>

        </footer>
    );
}

    export default Footer;
