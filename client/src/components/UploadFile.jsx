import customFetch from "../utils/customFetch";
import { FormRowSelect } from ".";
import Wrapper from "../assets/wrappers/DashboardFormPage";
import { useNavigation, Form, redirect } from "react-router-dom";
import { toast } from "react-toastify";
import { MONTH, YEAR } from "../../../utils/constants";

export const action = async ({ request }) => {
  const formData = await request.formData();
  try {
    await customFetch.post("/data/upload-file", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    toast.success("Upload data berhasil");
    // return null;
  } catch (error) {
    toast.error(error?.response?.data?.msg);
  }
  return null;
};

const UploadFile = () => {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";

  return (
    <Wrapper>
      <Form className="form" method="post" encType="multipart/form-data">
        <h4 className="form-title">upload data tukin</h4>
        <div className="form-center">
          <div className="form-row">
            <label htmlFor="file" className="form-label">
              pilih file excell
            </label>
            <input
              type="file"
              name="file"
              className="form-input"
              accept="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel"
            />
          </div>
          <FormRowSelect
            name="month"
            labelText="bulan"
            required={true}
            list={[
              { value: "", labelOpt: "Pilih Bulan" },
              ...Object.values(MONTH),
            ]}
          />
          <FormRowSelect
            name="year"
            labelText="Tahun"
            required={true}
            defaultValue={YEAR.find((year) => year.value === 2024)?.value}
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
            {isSubmitting ? "loading..." : "upload"}
          </button>
        </div>
      </Form>
    </Wrapper>
  );
};

export default UploadFile;
