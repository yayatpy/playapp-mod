import { Link } from "react-router-dom";
import Wrapper from "../assets/wrappers/LandingPage";
import Logo from "../components/Logo";
import main from "../assets/images/main.svg";

const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <Logo />
      </nav>
      <div className="container page">
        <div className="info">
          <h1>
            Pla<span className="highlight">Y</span>App
          </h1>
          <p>
            Aplikasi ini menampilkan rincian remunerasi berikut potongan yang
            diterima setiap bulannya oleh Pegawai Kanawil Kementerian Hukum dan
            HAM Gorontalo.
          </p>
          <p className="span-p">
            Note : Aplikasi ini tidak terintegrasi dengan aplikasi manapun. Data
            dalam aplikasi ini merupakan data salinan menual dari Daftar
            Potongan yang dibuat oleh PPDG.
          </p>
          <Link to="/login" className="btn">
            Login
          </Link>
        </div>
        <img src={main} alt="playapp" className="img main-img" />
      </div>
    </Wrapper>
  );
};

export default Landing;
