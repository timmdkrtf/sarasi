import AlvainPhoto from "../assets/image/photo/1.png"
import TaufikPhoto from "../assets/image/photo/3.png"

export default function AboutUs(){
    return(
        <div className="about-us">
            <div className="row">
                <div className="content-left">
                    <div className="cover-image">
                        <img src={TaufikPhoto} alt="" />
                    </div>
                    <div className="title">
                        <h4>ahmad taufik</h4>
                        <h5>Dewan Komisaris</h5>
                    </div>
                </div>
                <div className="content-center">
                    <div className="title">
                        <h2>
                            Dewan Komisaris
                            <br/>
                            <span>&</span>
                            <br/>
                            Direktur Utama
                        </h2>
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