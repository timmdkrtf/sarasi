import Navbar from "../components/Navbar"
import Cover from "../components/Cover"
import AboutPT from "../components/AboutPT"
import AboutUs from "../components/AboutUs"
import Brand from "../components/Brand"
import Footer from "../components/Footer"

import ASALogo from "../assets/image/logo/ASA-Logo Utama (P).png"

export default function Landing(){
    return(
        <>
            <Navbar />
            <Cover />
            <AboutPT />
            <AboutUs />
            <Brand />
            <Footer />

            {/* <div className="landing">
                <div className="content">
                    <img src={ASALogo} alt="" />
                    <h3>Under Maintenance</h3>
                </div>
            </div> */}
        </>
    );
}