import AlvainPhoto from "../assets/image/photo/Frame 4.png"
import TaufikPhoto from "../assets/image/photo/Frame 3.png"

export default function AboutUs(){
    return(
        <div className="about-us">
            <div className="title">
                <h2><span className="dewan">Dewan</span> <span>Komisaris</span> dan <span>Direksi</span></h2>
            </div>
            <div className="row">
                <div className="content-left">
                    <div className="cover-image">
                        <img src={TaufikPhoto} alt="" />
                    </div>
                    <div className="title">
                        <h4>ahmad taufik</h4>
                        <h5>Komisaris Utama</h5>
                    </div>
                </div>
                <div className="content-right">
                    <div className="cover-image">
                        <img src={AlvainPhoto} alt="" />
                    </div>
                    <div className="title">
                        <h4>Alvain maulana</h4>
                        <h5>Direktur Utama</h5>
                    </div>
                </div>
            </div>
        </div>
    );
}