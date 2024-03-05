import { FormRow } from "../components";
import Wrapper from "../assets/wrappers/DashboardFormPage";
import { Form, useNavigation, redirect, Link } from "react-router-dom";
import customFetch from "../utils/customFetch";
import { toast } from "react-toastify";

export const action = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);

  try {
    await customFetch.patch("/users/change-pass", data);
    toast.success("Ganti password berhasil");
    return redirect("/dashboard/profile");
  } catch (error) {
    toast.error(error?.response?.data?.msg);
    return null;
  }
};

const Password = () => {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";
  return (
    <Wrapper>
      <Form method="post" className="form">
        <h4 className="form-title">ganti password</h4>
        <div className="form-sort">
          <FormRow type="text" name="newPassword" labelText="password baru" />
          <FormRow type="text" name="confirmPass" labelText="ketik ulang" />
          <button
            type="submit"
            className="btn btn-block form-btn"
            disabled={isSubmitting}
          >
            {isSubmitting ? "loading..." : "simpan"}
          </button>
          <Link
            to="/dashboard"
            className="btn btn-block form-btn link-font-size"
          >
            kembali
          </Link>
        </div>
      </Form>
    </Wrapper>
  );
};

export default Password;
