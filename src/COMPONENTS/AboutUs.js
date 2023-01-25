import aboutUs1 from '../IMAGES/aboutUs1.png';
import aboutUs2 from '../IMAGES/aboutUs2.png';
import quotes from '../IMAGES/quotes.png';
import author from '../IMAGES/author.png';

const AboutUs = () => {
    return(
        <section className="aboutUs container" id="aboutUs">
            <div className="aboutUs__parts">
                <div className="aboutUs__parts-item aboutUs__parts-item-1">
                    <div className="aboutUs__parts-item-image-container aboutUs__parts-item-image-container-1">
                        <img
                            src={aboutUs1}
                            className="aboutUs__parts-item-image"
                        />
                    </div>
                    <div className="aboutUs__parts-item-content">
                        <h1 className="aboutUs__parts-item-title">DESIGNED FOR THE FUTURE</h1>
                        <p className="aboutUs__parts-item-text">
                            In 2014, a group of geeky industrial designers, engineering veterans and acoustic experts formed crazybaby. This is a bunch of passionate people who are crazy enough to think they can challenge the industry with disruptive audio products.
                        </p>
                        <a href={'#'} className="aboutUs__parts-item-link">See more about us</a>
                    </div>
                </div>

                <div className="aboutUs__parts-item aboutUs__parts-item-2">
                    <div className="aboutUs__parts-item-content">
                        <h1 className="aboutUs__parts-item-title">Luna Eye</h1>
                        <p className="aboutUs__parts-item-text">
                            Luna Eye is to the essence of this innovative light and audio system. It comprises an independent tweeter speaker, a light guiding component, a dome and a ring ornament.
                        </p>
                        <a href={'#'} className="aboutUs__parts-item-link">See more about us</a>
                    </div>

                    <div className="aboutUs__parts-item-image-container aboutUs__parts-item-image-container-2">
                        <img
                            src={aboutUs2}
                            className="aboutUs__parts-item-image"
                        />
                    </div>
                </div>
            </div>
            <div className="aboutUs__citation">
                <div className="aboutUs__citation-text">
                    <img className="aboutUs__citation-quotes" src={quotes} />
                    <p className="aboutUs__citation-text-paragraf">
                        It really took me by surprise honestly to have such full beautiful sound that coming out of this small compact device. And with the brush aluminum surface, it feels so familiar. Like my iPhone.
                    </p>
                </div>

                <div className="aboutUs__citation-author">
                    <div className="aboutUs__citation-author-image-container">
                        <img src={author} alt="Garrett Martin photo"/>
                    </div>
                    <p className="aboutUs__citation-author-name">Garrett Martin</p>
                    <p className="aboutUs__citation-author-position">Creative Director</p>
                </div>
            </div>
        </section>
    );
}

export default AboutUs;
