import customFetch from "../utils/customFetch";
import { FormRowSelect } from "../components";
import Wrapper from "../assets/wrappers/DashboardFormPage";
import { useNavigation, Form } from "react-router-dom";
import { toast } from "react-toastify";
import { NAMA_BULAN, YEAR } from "../../../utils/constants";

export const action = async ({ request }) => {
  const formData = await request.formData();
  const { data } = Object.fromEntries(formData);
  const file = formData.get("file");
  console.log({ data });
  console.log({ file });
  try {
    await customFetch.post("/data/upload-xl", data, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    toast.success("Upload data berhasil");
    return null;
  } catch (error) {
    toast.error(error?.response?.data?.msg);
    return null;
  }
};

const UploadXlPage = () => {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";

  return (
    <Wrapper>
      <Form className="form" method="post">
        <h4 className="form-title">upload data tukin</h4>
        <div className="form-center">
          <div className="form-row">
            <label htmlFor="file" className="form-label">
              pilih file excell
            </label>
            <input
              type="file"
              id="file"
              name="file"
              className="form-input"
              accept="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel"
            />
          </div>
          <FormRowSelect
            name="month"
            labelText="bulan"
            list={[
              { value: "", labelOpt: "Pilih Bulan" },
              ...Object.values(NAMA_BULAN),
            ]}
          />
          <FormRowSelect
            name="year"
            labelText="year"
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

export default UploadXlPage;
