import customFetch from "../utils/customFetch";
import { FormRowSelect } from ".";
import Wrapper from "../assets/wrappers/DashboardFormPage";
import { useNavigation, Form, redirect } from "react-router-dom";
import { toast } from "react-toastify";
import { MONTH, YEAR } from "../../../utils/constants";

export const action = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  const { bulan, tahun } = data;
  try {
    const response = await customFetch.delete(`/tukins/${bulan}/${tahun}`);
    toast.success(response.data.msg);
    return redirect("/dashboard/admin");
  } catch (error) {
    toast.error(error?.response?.data?.msg);
    return error;
  }
};

const HapusData = () => {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";
  return (
    <Wrapper>
      <Form method="post" className="form">
        <h4 className="form-title">hapus data tukin</h4>
        <div className="form-center">
          <FormRowSelect
            name="bulan"
            labelText="bulan"
            required={true}
            list={[
              { value: "", labelOpt: "Pilih Bulan" },
              ...Object.values(MONTH),
            ]}
          />
          <FormRowSelect
            name="tahun"
            labelText="Tahun"
            required={true}
            list={[
              { value: "", labelOpt: "Pilih Tahun" },
              ...Object.values(YEAR),
            ]}
          />
          <button
            type="submit"
            className="btn form-btn"
            disabled={isSubmitting}
          >
            {isSubmitting ? "loading..." : "hapus"}
          </button>
        </div>
      </Form>
    </Wrapper>
  );
};

export default HapusData;
