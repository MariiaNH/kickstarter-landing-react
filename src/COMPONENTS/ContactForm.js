const ContactForm = () => {
    return (
        <section className="contactForm container" id="getInTouch">
            <h1 className="contactForm__title">DO YOU HAVE ANY QUESTIONS?</h1>
            <form
                action="/"
                className="contactForm__form"
                id="form"
            >
                <label className="contactForm__form-item">
                    <input
                        className="contactForm__form-field contactForm__form-field--input"
                        type="email"
                        name="Email"
                        placeholder="Your email"
                        required
                    />
                </label>

                <label className="contactForm__form-item">
                  <textarea
                      className="contactForm__form-field contactForm__form-field--textarea"
                      name="Message"
                      placeholder="Your message..."
                      required
                  ></textarea>
                </label>
                <button
                    className="contactForm__form-submit"
                    type={"submit"}
                >
                    send
                </button>
            </form>

        </section>
    );
};
export default ContactForm
