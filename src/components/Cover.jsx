import LogoASA from "../assets/image/logo/ASA-Logo Utama (N).png"

export default function Cover(){

    return(
        <div id="cover" className="cover">
            <div className="container">
                <div className="row">
                    <div className="content-left col-lg-6 col-md-12">
                        <h1 className="cover-title">Berkomitmen Menyediakan Layanan <span className="kualitas">Kebersihan Berkualitas</span> untuk Meningkatkan <span className="kesehatan">Kesehatan</span></h1>
                        <p className="cover-desc">
                            Kami berkomitmen untuk menyediakan layanan kebersihan yang berkualitas demi meningkatkan kesehatan dan kenyamanan masyarakat. Melalui merek Nyamanin, kami menghadirkan solusi kebersihan yang menyeluruh, ditangani oleh tim profesional dengan peralatan terbaik untuk menjawab berbagai kebutuhan pelanggan.
                        </p>
                        <a href="#about" className="btn">Baca Selengkapnya</a>
                    </div>
                    <div className="content-right col-lg-6 col-md-12">
                        <div className="cover-image">
                            <img src={LogoASA} alt="Cover Image" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
