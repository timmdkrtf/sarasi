import Navbar from "../components/Navbar"
import Cover from "../components/Cover"
import AboutPT from "../components/AboutPT"
import AboutUs from "../components/AboutUs"
import VisiMisiValue from "../components/VisiMisiValue"
import Service from "../components/Service"
import WhyOur from "../components/WhyOur"
import Client from "../components/Client"
import Brand from "../components/Brand"
import Footer from "../components/Footer"


export default function Landing(){
    return(
        <div className="landing-page">
            <Navbar />
            <Cover />
            <AboutPT />
            <AboutUs />
            <VisiMisiValue />
            <Service />
            <WhyOur />
            <Client />
            <Brand />
            <Footer />
        </div>
    );
}