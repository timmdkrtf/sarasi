import PriceIcon from '../assets/elemen/price.svg';
import MoodIcon from '../assets/elemen/mood.svg';
import GroupsIcon from '../assets/elemen/groups.svg';
import SupportAgen from "../assets/elemen/support_agent.svg";
import FeatureSearch from "../assets/elemen/feature_search.svg";

export default function WhyOur() {
    return (
        <div className="why-our" id="why-our">
            <div className="container">
                <div className="row gap-5">
                    <div className="title">
                        <h3>Mengapa Kami?</h3>
                    </div>
                    <div className="d-flex flex-wrap">
                        <div className="why-item">
                            <img src={GroupsIcon} alt="" />
                            <h5>Tim Profesional Berpengalaman</h5>
                            <p>Seluruh anggota tim kami merupakan tenaga terlatih dengan pengalaman dalam bidang kebersihan, sehingga mampu memberikan hasil kerja yang efektif dan terpercaya.</p>
                        </div>
                        <div className="why-item">
                            <img src={SupportAgen} alt="" />
                            <h5>Kualitas Pelayanan Terbaik</h5>
                            <p>Kami berkomitmen untuk memberikan pelayanan yang responsif, ramah, dan profesional, demi menciptakan pengalaman pelanggan yang memuaskan.</p>
                        </div>
                        <div className="why-item">
                            <img src={FeatureSearch} alt="" />
                            <h5>Detail Kebersihan Maksimal</h5>
                            <p>Kami memperhatikan setiap detail dalam proses pembersihan, memastikan kebersihan menyeluruh hingga ke area yang sering terabaikan.</p>
                        </div>
                        <div className="why-item">
                            <img src={PriceIcon} alt="" />
                            <h5>Harga Terbaik</h5>
                            <p>Nyamanin menawarkan layanan berkualitas tinggi dengan harga yang kompetitif dan transparan</p>
                        </div>
                        <div className="why-item">
                            <img src={MoodIcon} alt="" />
                            <h5>Kenyamanan Menjadi Prioritas</h5>
                            <p>Fokus utama kami adalah menghadirkan rasa nyaman bagi pelanggan, melalui ruang yang bersih, rapi, dan menenangkan.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}