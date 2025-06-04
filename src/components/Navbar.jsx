import LogoMain from "../assets/image/logo/ASA-Logo Utama (P).png"

export default function Navbar(){

    return(
        <>
        <nav className="navbar navbar-expand-lg fixed-top">
            <div className="container">
                <a className="navbar-brand" href="#"><img src={LogoMain} alt="" /></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <a className="nav-link" aria-current="page" href="#cover">Beranda</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#about-pt">Tentang Perusahaan</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#visi-misi">Visi dan Misi</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#client">Klien</a>
                    </li>
                </ul>
                </div>
            </div>
        </nav>
        </>
    );
}