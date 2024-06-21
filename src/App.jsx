
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import User from "./pages/user/User";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Contacts from "./pages/Contacts/Contacts";

function App() {
  return (
    <>
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user" element={<User />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/contact" element={<Contacts/>} />
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
