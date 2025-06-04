

export default function VisiMisiValue() {
    return (
        <div className="visi-misi-value" id="visi-misi-value">
            <div className="container">
                <div className="row justify-content-around">
                    <div className="content-visi-misi col-lg-6 col-md-12 d-flex flex-column">
                        <h4>Visi & Misi Kami</h4>
                        <div className="visi-misi d-flex flex-column gap-2">
                            <div className="visi d-flex gap-3">
                                <h5>Visi</h5>
                                <p>Menjadi perusahaan penyedia jasa kebersihan terbaik</p>
                            </div>
                            <div className="misi d-flex gap-3">
                                <h5>Misi</h5>
                                <div>
                                    <p>Misi Menghadirkan tim profesional yang berorientasi pada kenyamanan pelanggan.</p>
                                    <p>Memberikan solusi kebersihan dengan tingkat detail yang tinggi bagi pelanggan.</p>
                                    <p>Mengutamakan aspek kesehatan dalam pelaksanaan jasa bagi pelanggan.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="content-value d-flex flex-column gap-4 col-lg-6 col-md-12">
                        <h4><span className="fst-italic">Value</span> Kami</h4>
                        <div className="all-value d-flex flex-column">
                            <div className="value-item">
                                <h6>Profesional</h6>
                                <p>Kami terdiri dari tim yang menguasai teknik pembersihan serta didukung peralatan terbaik.</p>
                            </div>
                            <div className="value-item">
                                <h6>Responsif</h6>
                                <p>Kami adalah barisan terdepan yang selalu siap merespons berbagai kebutuhan jasa kebersihan.</p>
                            </div>
                            <div className="value-item">
                                <h6>Detail</h6>
                                <p>Kami mengutamakan detail dalam setiap proses pembersihan demi hasil maksimal.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}