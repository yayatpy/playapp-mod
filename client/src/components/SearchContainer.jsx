import { FormRowSelect } from ".";
import Wrapper from "../assets/wrappers/DashboardFormPage";
import { Form, useNavigation } from "react-router-dom";
import { TUKIN_SORT_BY, MONTH, YEAR } from "../../../utils/constants";

const SearchContainer = () => {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";
  return (
    <Wrapper>
      <Form className="form">
        <div className="form-sort">
          <FormRowSelect
            name="sort"
            labelText="Urutkan"
            list={[...Object.values(TUKIN_SORT_BY)]}
          />
          <FormRowSelect
            name="month"
            labelText="bulan"
            list={[{ value: "", labelOpt: "Semua" }, ...Object.values(MONTH)]}
          />
          <FormRowSelect
            name="year"
            labelText="tahun"
            list={[{ value: "", labelOpt: "Semua" }, ...Object.values(YEAR)]}
          />
          <button
            type="submit"
            className="btn form-btn"
            disabled={isSubmitting}
          >
            {isSubmitting ? "loading..." : "terapkan"}
          </button>
        </div>
      </Form>
    </Wrapper>
  );
};

export default SearchContainer;
