import logo from '../IMAGES/logo.svg'

const Header = () => {
    return (
        <header className="header container" id="header">
            <img className="header__logo" src={logo} alt={"company logo"}/>
            <div className="header__actions">
                <div className="header__language-toggler">
                    <a href="#"
                       className="
                       header__language-toggler-select
                       header__language-toggler-select--hover
                       "
                    >
                        en
                    </a>
                    <p className="nav__lang-select">
                        /
                    </p>
                    <a href="#"
                       className="
                       header__language-toggler-select
                       header__language-toggler-select--hover
                       "
                    >
                        ua
                    </a>
                </div>
                <div className="header__buy-button">
                    <a className="header__buy-button-link">buy</a>
                </div>
            </div>
        </header>
    );
}

export default Header;
