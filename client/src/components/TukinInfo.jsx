import Wrapper from "../assets/wrappers/JobInfo";
import { NumericFormat } from "react-number-format";

const TukinInfo = ({ text, label }) => {
  return (
    <Wrapper>
      <span className="job-icon">{label}</span>
      <span className="job-text">
        <NumericFormat
          displayType="text"
          value={text}
          thousandSeparator="."
          decimalSeparator=","
        />
      </span>
    </Wrapper>
  );
};

export default TukinInfo;
