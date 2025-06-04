import Apostrof from '../assets/image/client/apostrof.png';
import BahanaIlmu from '../assets/image/client/bahana.png';
import Habatour from '../assets/image/client/habatour.png';
import Realtour from '../assets/image/client/realtour.png';
import Halakah from '../assets/image/client/halakah.png';
import Kronika from '../assets/image/client/kronika.png';
import Mdkrtf from '../assets/image/client/mdkrtf.png';
import AsimetriKopi from '../assets/image/client/asimetri-kopi.png';
import CelebrityBarbershop from '../assets/image/client/celebrity-barbershop.jpg';
import Kimboim from '../assets/image/client/kimboim.jpg';
import Unida from '../assets/image/client/LOGO-UNIDA.png';
import Tirta from '../assets/image/client/perumda-tirta-pakuan.jpg';
import RedDoorz from '../assets/image/client/red-doorz.png';
import VivereCoffee from '../assets/image/client/vivere-coffee.png';
import Masjid from '../assets/image/client/Logo 2.png';
import Inka from '../assets/image/client/Logo 1.png';

export default function Client(){
    return (
        <div className="client" id="client">
            <div className="container">
                <div className="row">
                    <div className="title">
                        <h3>Our Clients</h3>
                    </div>
                    <div className="content d-flex flex-wrap justify-content-center">
                        <img src={Apostrof} alt="" />
                        <img src={BahanaIlmu} alt="" />
                        <img src={Habatour} alt="" />
                        <img src={Realtour} alt="" />
                        <img src={Halakah} alt="" />
                        <img src={Kronika} alt="" />
                        <img src={Mdkrtf} alt="" />
                        <img src={AsimetriKopi} alt="" />
                        <img src={CelebrityBarbershop} alt="" />
                        <img src={Kimboim} alt="" />
                        <img src={Unida} alt="" />
                        <img src={Tirta} alt="" />
                        <img src={RedDoorz} alt="" />
                        <img src={VivereCoffee} alt="" />
                        <img src={Masjid} alt="" />
                        <img src={Inka} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
}