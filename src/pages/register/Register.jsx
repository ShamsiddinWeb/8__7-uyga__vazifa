import React, { useState } from "react";
import "./Register.css";
import { useGetInputValue } from "../../hooks/useGetInputValue";
import axios from "../../api";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const initialState = {
  UserName: "",
  password: "",
  FirstName: "",
  LastName: "",
  phones: "",
};

const Register = () => {
  const { formData, handleChange, setFormData } =
    useGetInputValue(initialState);
  const [isLoading, setIsLoading] = useState(false);

  const handleRegister = (e) => {
    e.preventDefault();
    setIsLoading(true);
    const updatedFormData = { ...formData, phones: [formData.phones] };
    console.log(updatedFormData);
    axios
      .post("auth/user/sign-up", updatedFormData)
      .then((res) => {
        toast.success("Roʻyxatdan oʻtdiz!");
        setFormData(initialState);
      })
      .catch((error) => {
        toast.error("Xatolik bor.");
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <div className="register">
      <form onSubmit={handleRegister}>
        <h1>Register</h1>
        <input
          onChange={handleChange}
          value={formData.UserName}
          name="UserName"
          type="text"
          placeholder="UserName"
          required
        />
        <input
          onChange={handleChange}
          value={formData.password}
          name="password"
          type="password"
          placeholder="password"
          required
        />
        <input
          onChange={handleChange}
          value={formData.FirstName}
          name="FirstName"
          type="text"
          placeholder="FirstName"
          required
        />
        <input
          onChange={handleChange}
          value={formData.LastName}
          name="LastName"
          type="text"
          placeholder="LastName"
        />
        <input
          onChange={handleChange}
          value={formData.phones}
          name="phones"
          type="number"
          placeholder="phones"
          required
        />
        <button type="submit">
          Create
        </button>
      </form>
      <ToastContainer />
    </div>
  );
};

export default Register;
