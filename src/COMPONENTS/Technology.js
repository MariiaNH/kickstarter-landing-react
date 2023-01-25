import technology from '../IMAGES/technology.png';
import technologyDesign from '../IMAGES/technology-design.png';
import technologySpeaker from '../IMAGES/technology-speaker.png';
import technologyMultiroom from '../IMAGES/technology-multiroom.png';
import technologyLight from '../IMAGES/technology-light.png';
import Carousel from 'react-bootstrap/Carousel';
import {useState} from "react";


 const Technology = () => {
     const [index, setIndex] = useState(0);

     const handleSelect = (selectedIndex, e) => {
         setIndex(selectedIndex);
     };

    return(
        <section className="technology container" id="technology">
            <Carousel activeIndex={index} onSelect={handleSelect} className="technology__list technology__list--onPad">
                    <Carousel.Item className="technology__item" interval={3000}>
                        <div className="technology__item-image-container">
                            <img src={technologyDesign} className="technology__item-image" />
                        </div>
                        <h2 className="technology__item-title">Futuristic Design</h2>
                        <p className="technology__item-description">
                            To give Luna a truly flawless look, we specifically picked aircraft grade aluminum as its material and adopted both three-dimensional stretch-bending technology and a high precision cold forging technique.
                        </p>
                    </Carousel.Item>

                    <Carousel.Item className="technology__item" interval={3000}>
                        <div className="technology__item-image-container">
                            <img src={technologySpeaker} className="technology__item-image" />
                        </div>
                        <h2 className="technology__item-title">Tweeter Speaker System</h2>
                        <p className="technology__item-description">
                            To deliver a more layered sound performance better than a sole full-range speaker, our team equipped Luna with one more tweeter speaker responsible for high-frequency sound independently.
                        </p>
                    </Carousel.Item >

                    <Carousel.Item className="technology__item" interval={3000}>
                        <div className="technology__item-image-container">
                            <img src={technologyMultiroom} className="technology__item-image" />
                        </div>
                        <h2 className="technology__item-title">Multiroom System</h2>
                        <p className="technology__item-description">
                            Luna is natively compatible with your home Wi-Fi. Set up multiple speakers in different rooms to expand your music experience into the entire house.
                        </p>
                    </Carousel.Item>

                    <Carousel.Item className="technology__item" interval={3000}>
                        <div className="technology__item-image-container">
                            <img src={technologyLight} className="technology__item-image" />
                        </div>
                        <h2 className="technology__item-title">Intuitive Lighting System</h2>
                        <p className="technology__item-description">
                            An intuitive user interface allows you to adjust the hue and saturation of color for lighting that fits any mood and situation.
                        </p>
                    </Carousel.Item>
            </Carousel>

            <ul className="technology__list technology__list--onDesktop">
                <li className="technology__item">
                    <div className="technology__item-image-container">
                        <img src={technologyDesign} className="technology__item-image" />
                    </div>
                    <h2 className="technology__item-title">Futuristic Design</h2>
                    <p className="technology__item-description">
                        To give Luna a truly flawless look, we specifically picked aircraft grade aluminum as its material and adopted both three-dimensional stretch-bending technology and a high precision cold forging technique.
                    </p>
                </li>

                <li className="technology__item" >
                    <div className="technology__item-image-container">
                        <img src={technologySpeaker} className="technology__item-image" />
                    </div>
                    <h2 className="technology__item-title">Tweeter Speaker System</h2>
                    <p className="technology__item-description">
                        To deliver a more layered sound performance better than a sole full-range speaker, our team equipped Luna with one more tweeter speaker responsible for high-frequency sound independently.
                    </p>
                </li >

                <li className="technology__item">
                    <div className="technology__item-image-container">
                        <img src={technologyMultiroom} className="technology__item-image" />
                    </div>
                    <h2 className="technology__item-title">Multiroom System</h2>
                    <p className="technology__item-description">
                        Luna is natively compatible with your home Wi-Fi. Set up multiple speakers in different rooms to expand your music experience into the entire house.
                    </p>
                </li>

                <li className="technology__item">
                    <div className="technology__item-image-container">
                        <img src={technologyLight} className="technology__item-image" />
                    </div>
                    <h2 className="technology__item-title">Intuitive Lighting System</h2>
                    <p className="technology__item-description">
                        An intuitive user interface allows you to adjust the hue and saturation of color for lighting that fits any mood and situation.
                    </p>
                </li>
            </ul>

            <div className="technology__image-container">
                <img src={technology} alt="Luna stereo" className="technology__image" />
            </div>
        </section>
    );
}

export default Technology;
