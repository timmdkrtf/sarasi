import NyamaninLogo from "../assets/image/logo/nyamanin(P).png"

export default function Brand(){
    return(
        <div className="brand" id="brand">
            <div className="container">
                <div className="row">
                    <div className="title">
                        <h3>Brand Kami</h3>
                    </div>
                    <div className="content">
                        <a href="https://realtour.co.id" target="_blank">
                            <img src={NyamaninLogo} alt="" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}