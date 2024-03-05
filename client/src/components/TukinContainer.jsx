import Tukin from "./Tukin";
import Wrapper from "../assets/wrappers/JobsContainer";
import { useAllTukinContext } from "../pages/AllRincian";
import PageBtnContainer from "./PageBtnContainer";

const TukinContainer = () => {
  const { data } = useAllTukinContext();
  const { tukins, numOfPage } = data;
  if (tukins.length === 0) {
    return (
      <Wrapper>
        <h2>Tidak ada data...</h2>
      </Wrapper>
    );
  }
  return (
    <Wrapper>
      <div className="jobs">
        {tukins.map((tukin) => {
          return <Tukin key={tukin._id} {...tukin} />;
        })}
      </div>
      {numOfPage > 1 && <PageBtnContainer />}
    </Wrapper>
  );
};

export default TukinContainer;
