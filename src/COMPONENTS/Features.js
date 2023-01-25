import features from '../IMAGES/features.png';
import {useState} from "react";
import Carousel from 'react-bootstrap/Carousel';

const Features = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    return (
        <section className="features container" id="features">
            <h1 className="features__title">FEATURES</h1>
            <div className="features__content">
                <div className="features__list--onPad">
                    <Carousel className="features__list" activeIndex={index} onSelect={handleSelect}>
                        <Carousel.Item className="features__item" interval={6000}>
                            <p className="features__subtitle">
                                Sound & Music
                            </p>
                            <ul className="features__list">
                                <li className="features__list-item">
                                    Feel-in-chest Base Power
                                </li>
                                <li className="features__list-item">
                                    Lossless Digital Audio Transmission
                                </li>
                                <li className="features__list-item">
                                    Easy & Stable Stereo Pairing
                                </li>
                                <li className="features__list-item">
                                    Crisp and Clear High Frequency Sound
                                </li>
                                <li className="features__list-item">
                                    Streams from Cloud Music and Local Library
                                </li>
                                <li className="features__list-item">
                                    Auto Music Playback from Last Song Stopped
                                </li>
                            </ul>
                        </Carousel.Item>
                        <Carousel.Item className="features__item" interval={6000}>
                            <p className="features__subtitle">
                                Connectivity
                            </p>
                            <ul className="features__list">
                                <li className="features__list-item">
                                    Hands Free Wireless Audio
                                </li>
                                <li className="features__list-item">
                                    Bluetooth 4.0 LE
                                </li>
                                <li className="features__list-item">
                                    Wi-Fi 2.4 GHz (802.11 b/g/n)
                                </li>
                                <li className="features__list-item">
                                    Smart Multiroom System Set Up
                                </li>
                                <li className="features__list-item">
                                    Party Mode with 6.0 Units and above
                                </li>
                                <li className="features__list-item">
                                    Powerful MESHNET Multi Speaker Network
                                </li>
                            </ul>
                        </Carousel.Item>
                        <Carousel.Item className="features__item" interval={6000}>
                            <p className="features__subtitle">
                                App Features
                            </p>
                            <ul className="features__list">
                                <li className="features__list-item">
                                    Customize Music Schedule
                                </li>
                                <li className="features__list-item">
                                    Wake Up with Favorite Songs
                                </li>
                                <li className="features__list-item">
                                    Home Detection Auto Wake Up
                                </li>
                                <li className="features__list-item">
                                    Color Wheel & Saturation Change
                                </li>
                            </ul>
                        </Carousel.Item>
                    </Carousel>
                </div>

                <ul className="features__list--onDesktop">
                    <li className="features__item features__item--onDesktop" >
                        <p className="features__subtitle">
                            Sound & Music
                        </p>
                        <ul className="features__list">
                            <li className="features__list-item">
                                Feel-in-chest Base Power
                            </li>
                            <li className="features__list-item">
                                Lossless Digital Audio Transmission
                            </li>
                            <li className="features__list-item">
                                Easy & Stable Stereo Pairing
                            </li>
                            <li className="features__list-item">
                                Crisp and Clear High Frequency Sound
                            </li>
                            <li className="features__list-item">
                                Streams from Cloud Music and Local Library
                            </li>
                            <li className="features__list-item">
                                Auto Music Playback from Last Song Stopped
                            </li>
                        </ul>
                    </li>
                    <li className="features__item features__item--onDesktop" >
                        <p className="features__subtitle">
                            Connectivity
                        </p>
                        <ul className="features__list">
                            <li className="features__list-item">
                                Hands Free Wireless Audio
                            </li>
                            <li className="features__list-item">
                                Bluetooth 4.0 LE
                            </li>
                            <li className="features__list-item">
                                Wi-Fi 2.4 GHz (802.11 b/g/n)
                            </li>
                            <li className="features__list-item">
                                Smart Multiroom System Set Up
                            </li>
                            <li className="features__list-item">
                                Party Mode with 6.0 Units and above
                            </li>
                            <li className="features__list-item">
                                Powerful MESHNET Multi Speaker Network
                            </li>
                        </ul>
                    </li>
                    <li className="features__item features__item--onDesktop" >
                        <p className="features__subtitle">
                            App Features
                        </p>
                        <ul className="features__list">
                            <li className="features__list-item">
                                Customize Music Schedule
                            </li>
                            <li className="features__list-item">
                                Wake Up with Favorite Songs
                            </li>
                            <li className="features__list-item">
                                Home Detection Auto Wake Up
                            </li>
                            <li className="features__list-item">
                                Color Wheel & Saturation Change
                            </li>
                        </ul>
                    </li>
                </ul>

                {/*<div className="features__image-container--onDesktop">*/}
                {/*    <img className="features__image--onDesktop"src={features} alt={'sound system build'}/>*/}
                {/*</div>*/}
            </div>
        </section>
    );
};

export default Features;
