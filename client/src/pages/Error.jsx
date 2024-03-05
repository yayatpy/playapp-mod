import { Link, useRouteError } from "react-router-dom";
import Wrapper from "../assets/wrappers/ErrorPage";
import img from "../assets/images/not-found.svg";

const Error = () => {
  const error = useRouteError();
  if (error.status === 404) {
    return (
      <Wrapper>
        <div>
          <img src={img} alt="not found" />
          <h3>Halaman tidak ditemukan</h3>
          <p>Kami tidak bisa menemukan halaman yang anda cari</p>
          <Link to="./dashboard">Kembali</Link>
        </div>
      </Wrapper>
    );
  }
  return (
    <Wrapper>
      <div>
        <h3>Terjadi kesalahan</h3>
      </div>
    </Wrapper>
  );
};

export default Error;
