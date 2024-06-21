import React, { useState } from "react";
import "./Login.css";
import { useGetInputValue } from "../../hooks/useGetInputValue";
import axios from "../../api";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const initialState = {
  UserName: "",
  password: "",
};

const Login = () => {
  const { formData, handleChange, setFormData } =
    useGetInputValue(initialState);
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    setIsLoading(true);
    axios
      .post("auth/sign-in", formData)
      .then((res) => {
        console.log(res.data.data.token);
        localStorage.setItem("x-auth-token", res.data.data.token);
        toast.success("Muvaffaqiyatli!");
        setFormData(initialState);
        localStorage.setItem("user-data", JSON.stringify(res.data.data.user));
      })
      .catch((error) => {
        console.error("err", error);
        toast.error("Xatolik bor qaytadan urinib koring!");
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <div className="Login">
      <form className="login__form" onSubmit={handleLogin}>
        <h1>Login</h1>
        <input
          onChange={handleChange}
          name="UserName"
          value={formData.UserName}
          type="text"
          placeholder="Username"
          required
        />
        <input
          onChange={handleChange}
          name="password"
          value={formData.password}
          type="password"
          placeholder="Password"
          required
        />
        <button type="submit">Submit</button>
      </form>
      <ToastContainer />
    </div>
  );
};

export default Login;
