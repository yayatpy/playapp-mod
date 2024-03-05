import { FormRow } from "../components";
import Wrapper from "../assets/wrappers/DashboardFormPage";
import { Link, useOutletContext } from "react-router-dom";
import { useNavigation, Form } from "react-router-dom";
import customFetch from "../utils/customFetch";
import { toast } from "react-toastify";

export const action = async ({ request }) => {
  const formData = await request.formData();
  const file = formData.get("avatar");
  if (file && file.size > 500000) {
    toast.error("ukuran file terlalu besar");
    return null;
  }

  try {
    await customFetch.patch("/users/update-peg", formData);
    toast.success("Profile berhasil di update");
  } catch (error) {
    toast.error(error?.response?.data?.msg);
  }
  return null;
};

const Profile = () => {
  const { peg } = useOutletContext();
  const { nama, nip, alamat } = peg;
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";

  return (
    <Wrapper>
      <Form method="post" className="form" encType="multipart/form-data">
        <h4 className="form-title">profile</h4>
        <div className="form-center">
          <FormRow
            type="text"
            name="nip"
            labelText="NIP (tidak bisa diubah)"
            defaultValue={nip}
            readOnly={true}
          />
          <FormRow type="text" name="nama" defaultValue={nama} />
          <FormRow type="text" name="alamat" defaultValue={alamat} />
          <div className="form-row">
            <label htmlFor="avatar" className="form-label">
              gambar profil (max 0,5 MB)
            </label>
            <input
              type="file"
              id="avatar"
              name="avatar"
              className="form-input"
              accept="image/*"
            />
          </div>
          <button
            type="submit"
            className="btn btn-block form-btn"
            disabled={isSubmitting}
          >
            {isSubmitting ? "loading..." : "simpan"}
          </button>
        </div>
      </Form>
    </Wrapper>
  );
};

export default Profile;
