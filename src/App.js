import './STYLES/components/App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./COMPONENTS/Header";
import MainBanner from "./COMPONENTS/MainBanner";
import Navigation from "./COMPONENTS/Navigation";
import Technology from "./COMPONENTS/Technology";
import AboutUs from "./COMPONENTS/AboutUs";
import Features from "./COMPONENTS/Features";
import Footer from "./COMPONENTS/Footer";
import ContactForm from "./COMPONENTS/ContactForm";

const App = () => {
  return (
    <div className="App">
        <Header />
        <MainBanner />
        <Navigation />
        <Technology />
        <AboutUs />
        <Features />
        <ContactForm />
        <Footer />

    </div>
  );
}

export default App;
