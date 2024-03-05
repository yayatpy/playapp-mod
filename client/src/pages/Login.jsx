import { Logo, FormRow, SubmitBtn } from "../components";
import { Form, redirect, useNavigation } from "react-router-dom";
import Wrapper from "../assets/wrappers/RegisterAndLoginPage";
import customFetch from "../utils/customFetch";
import { toast } from "react-toastify";

export const action = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  try {
    await customFetch.post("/auth/login", data);
    toast.success("Login berhasil");
    return redirect("/dashboard");
  } catch (error) {
    toast.error(error?.response?.data?.msg);
    return error;
  }
};

const Login = () => {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "loading";
  return (
    <Wrapper>
      <Form method="post" className="form">
        <Logo />
        <h4>Login</h4>
        <FormRow type="text" name="nip" labelText="NIP" />
        <FormRow type="password" name="password" />
        <button type="submit" className="btn btn-block" disabled={isSubmitting}>
          {isSubmitting ? "submitting" : "submit"}
        </button>
      </Form>
    </Wrapper>
  );
};

export default Login;
