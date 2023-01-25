import mainBanner from '../IMAGES/main-banner.png';

const MainBanner = () => {
    return (
        <section className="main-banner container">
            <div className="main-banner__content">
                <h1 className="main-banner__title">
                    Futuristic Wireless Speaker
                </h1>
                <p className="main-banner__text">
                    Luna’s performance is balanced and smooth in all frequency ranges which makes the music both naturally pleasant and distinctly more layered.
                </p>
            </div>
            <div className="main-banner__image-container">
                <img className="main-banner__image" src={mainBanner} alt={"speakers"}/>
            </div>
        </section>
    );
}

export default MainBanner;
