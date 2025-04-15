import { useState, useEffect } from "react";
import { motion } from "framer-motion"; 
import LogoMain from "../assets/image/logo/ASA-Logo Utama (P).png"
import Room1 from "../assets/image/bg/room4.png"
import Room2 from "../assets/image/bg/room3.png"
import Room3 from "../assets/image/bg/room.png"
import Room4 from "../assets/image/bg/room5.png"

const images = [Room1, Room3, Room2, Room4];

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
                    <motion.img
                            src={LogoMain}
                            initial={{ rotateY: -360, opacity: 0 }}
                            animate={{ rotateY: 0, opacity: 1 }}
                            transition={{ duration: 0.7, ease: "easeOut" }}
                        />
                        <p>PT Abdi Sarana Asri</p>
                    </div>
                </div>
            </div>
        </div>
    );
}