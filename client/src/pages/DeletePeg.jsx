import { useState, useEffect } from "react";
import { FormRow } from "../components";
import Wrapper from "../assets/wrappers/DashboardFormPage";
import { Form, redirect } from "react-router-dom";
import SelectWithSearch from "../components/SelectWithSearch";
import customFetch from "../utils/customFetch";
import { toast } from "react-toastify";

export const action = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  const { nip } = data;
  try {
    const response = await customFetch.delete("/users/delete-peg/" + nip);
    toast.success(response.data.msg);
    return null;
  } catch (error) {
    toast.error(error?.response?.data?.msg);
    return error;
  }
};

const DeletePeg = () => {
  const [pegawais, setPegawais] = useState([]);
  const [selectedPeg, setSelectedPeg] = useState(null);

  useEffect(() => {
    customFetch.get("/users/all-peg").then((response) => {
      setPegawais(
        response.data.map((peg) => ({
          value: peg.nip,
          label: peg.nama,
        }))
      );
    });
  }, []);

  const handlePegawaiSelect = (selectedOption) => {
    setSelectedPeg(selectedOption);
  };

  return (
    <Wrapper>
      <Form method="post" className="form">
        <h4 className="form-title">hapus pegawai</h4>
        {/* <div className="select-style"></div> */}
        <div className="form-center">
          <div className="select-style">
            <SelectWithSearch
              options={pegawais}
              onChange={handlePegawaiSelect}
            />
          </div>
          <FormRow
            type="text"
            name="nip"
            labelText="NIP"
            value={selectedPeg ? selectedPeg.value : ""}
            readOnly={true}
          />
          <button type="submit" className="btn btn-block form-btn">
            hapus
          </button>
        </div>
      </Form>
    </Wrapper>
  );
};

export default DeletePeg;
