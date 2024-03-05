import { FaLocationArrow, FaBriefcase, FaCalendarAlt } from "react-icons/fa";
import { Link, Form } from "react-router-dom";
import Wrapper from "../assets/wrappers/Job";
import TukinInfo from "./TukinInfo";
import day from "dayjs";
// import advancedFormat from "dayjs/plugin/advancedFormat";
import updateLocale from "dayjs/plugin/updateLocale";
day.extend(updateLocale);

day.updateLocale("en", {
  months: [
    "Januari",
    "Februari",
    "Maret",
    "April",
    "Mei",
    "Juni",
    "Juli",
    "Agustus",
    "September",
    "Oktober",
    "November",
    "Desember",
  ],
});

const Tukin = ({
  _id,
  tukin,
  koperasi,
  pengayoman,
  dharmaWanita,
  bapor,
  majelisTaklim,
  sosial,
  qurban,
  bendahara,
  pinjKoperasi,
  lainLain,
  jumPot,
  jumBersih,
  bulan,
}) => {
  const date = day(bulan).format("MMMM YYYY");
  return (
    <Wrapper>
      <header>
        <div className="main-icon">
          <FaCalendarAlt />
        </div>
        <div className="info">
          <h5>{date}</h5>
        </div>
      </header>
      <div className="content">
        <div className="content-center">
          <TukinInfo label="Tunjangan Kinerja" text={tukin} />
          <div className="separator" />
          <p>Potongan :</p>
          <TukinInfo label="Koperasi" text={koperasi} />
          <TukinInfo label="Pengayoman" text={pengayoman} />
          <TukinInfo label="Dharma Wanita" text={dharmaWanita} />
          <TukinInfo label="Bapor" text={bapor} />
          <TukinInfo label="Majelis Taklim" text={majelisTaklim} />
          <TukinInfo label="Sosial" text={sosial} />
          <TukinInfo label="Qurban" text={qurban} />
          <TukinInfo label="Bendahara" text={bendahara} />
          <TukinInfo label="Pinj. Koperasi" text={pinjKoperasi} />
          <TukinInfo label="Lain-Lain" text={lainLain} />
          <div className="separator" />
          <TukinInfo label="Jumlah Potongan" text={jumPot} />
          <div className="separator" />
          <TukinInfo label="Sisa Diterima" text={jumBersih} />
        </div>
      </div>
    </Wrapper>
  );
};

export default Tukin;
