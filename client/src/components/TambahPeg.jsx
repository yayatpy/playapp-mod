import { FormRow } from "../components";
import Wrapper from "../assets/wrappers/DashboardFormPage";
import { useNavigation, Form, redirect } from "react-router-dom";
import customFetch from "../utils/customFetch";
import { toast } from "react-toastify";

export const action = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  try {
    const response = await customFetch.post("/auth/tambah-peg", data);
    toast.success(response.data.msg);
    return redirect("/dashboard/admin");
  } catch (error) {
    toast.error(error?.response?.data?.msg);
    return error;
  }
};

const TambahPeg = () => {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";
  return (
    <Wrapper>
      <Form method="post" className="form">
        <h4 className="form-title">tambah pegawai</h4>
        <div className="form-center">
          <FormRow type="text" name="nip" labelText="NIP" />
          <FormRow type="text" name="nama" />
          <FormRow
            type="text"
            name="alamat"
            defaultValue="jl. tinaloga no. 1 gorontalo"
          />
          <FormRow type="password" name="password" />
          <FormRow
            type="password"
            name="confPassword"
            labelText="retype password"
          />
          <button
            type="submit"
            className="btn btn-block form-btn"
            disabled={isSubmitting}
          >
            {isSubmitting ? "simpan..." : "tambah"}
          </button>
        </div>
      </Form>
    </Wrapper>
  );
};

export default TambahPeg;
