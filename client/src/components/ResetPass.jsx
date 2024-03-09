import { useState, useEffect } from "react";
import { FormRow } from "../components";
import Wrapper from "../assets/wrappers/DashboardFormPage";
import { Form, Link, redirect } from "react-router-dom";
import SelectWithSearch from "./SelectWithSearch";
import customFetch from "../utils/customFetch";
import { toast } from "react-toastify";

export const action = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  try {
    const response = await customFetch.patch("/users/change-pass-peg", data);
    toast.success(response.data.msg);
    return redirect("/dashboard/admin");
  } catch (error) {
    toast.error(error?.response?.data?.msg);
    return error;
  }
};

const ResetPass = () => {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);

  useEffect(() => {
    customFetch.get("/users/all-peg").then((response) => {
      setUsers(
        response.data.map((user) => ({
          value: user.nip,
          label: user.nama,
        }))
      );
    });
  }, []);

  const handleUserSelect = (selectedOption) => {
    setSelectedUser(selectedOption);
  };

  return (
    <Wrapper>
      <Form method="post" className="form">
        <h4 className="form-title">Reset Password Pegawai</h4>
        <div className="select-style">
          <SelectWithSearch options={users} onChange={handleUserSelect} />
        </div>
        <div className="form-center">
          <FormRow
            type="text"
            name="nip"
            labelText="NIP"
            value={selectedUser ? selectedUser.value : ""}
            readOnly={true}
          />
          <FormRow type="text" name="password" labelText="Password Baru" />
          <FormRow
            type="text"
            name="confPassword"
            labelText="Confirm Password"
          />
          <button type="submit" className="btn btn-block form-btn">
            Reset
          </button>
        </div>
      </Form>
    </Wrapper>
  );
};

export default ResetPass;
