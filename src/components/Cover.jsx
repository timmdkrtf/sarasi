import { useState, useEffect } from "react";
import LogoMain from "../assets/image/logo/ASA-Logo Utama (P).png"
import Forest1 from "../assets/image/bg/forest1.png"
import Forest2 from "../assets/image/bg/forest2.png"
import Room from "../assets/image/bg/room.png"

const images = [Forest1, Room, Forest2];

export default function Cover(){

    const [currentImage, setCurrentImage] = useState(0);
    const [fade, setFade] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setFade(true); 
            setTimeout(() => {
                setCurrentImage((prev) => (prev + 1) % images.length);
                setFade(false);
            }, 300); 
        }, 6000); 

        return () => clearInterval(interval);
    }, []);

    return(
        <div id="cover" className={`cover ${fade ? "fade-out" : "fade-in"}`} style={{ backgroundImage: `url(${images[currentImage]})` }}>
            <div className="container">
                <div className="row">
                    <div className="content">
                        <img src={LogoMain} />
                        <p>PT Abdi Sarana Asri</p>
                    </div>
                </div>
            </div>
        </div>
    );
}