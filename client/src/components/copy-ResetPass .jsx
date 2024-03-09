import React, { useState, useEffect } from "react";
import { FormRow, FormRowSelect } from "../components";
import Wrapper from "../assets/wrappers/DashboardFormPage";
import { Form, Link } from "react-router-dom";
import axios from "axios"; // Untuk melakukan HTTP request
import customFetch from "../utils/customFetch";

const ResetPass = () => {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [nip, setNip] = useState("");

  useEffect(() => {
    // Fetch data from MongoDB (assuming API endpoint)
    customFetch.get("/users/all-peg").then((response) => {
      setUsers(response.data);
    });
  }, []);

  // Filter users based on search term

  const filteredUsers = Array.isArray(users)
    ? users.filter((user) =>
        user.nama.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : [];

  const handleUserSelect = (value) => {
    const selectedUser = users.find((user) => user.nip === value);
    setSelectedUser(value);
    setNip(selectedUser.nip);
  };

  return (
    <Wrapper>
      <Form method="post" className="form">
        <h4 className="form-title">Reset Password Pegawai</h4>
        <div className="form-center">
          <FormRow
            type="text"
            labelText="filter pegawai   "
            onChange={(e) => setSearchTerm(e.target.value)}
            required={false}
          />
          <FormRowSelect
            name="nama"
            required={true}
            value={selectedUser}
            onChange={(e) => handleUserSelect(e.target.value)}
            list={[
              { value: "", labelOpt: "Pilih Nama" },
              ...filteredUsers.map((user) => ({
                value: user.nip,
                labelOpt: user.nama,
              })),
            ]}
          />
          <FormRow type="text" name="nip" value={nip} readOnly={true} />
          <FormRow type="password" name="password" labelText="Password Baru" />
          <FormRow
            type="password"
            name="confPassword"
            labelText="Confirm Password"
          />
          <button type="submit" className="btn btn-block form-btn">
            Reset
          </button>
          <Link
            to="/dashboard"
            className="btn btn-block form-btn link-font-size"
          >
            Kembali
          </Link>
        </div>
      </Form>
    </Wrapper>
  );
};

export default ResetPass;
