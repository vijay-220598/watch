import { Route, Routes } from "react-router-dom";
import "./App.css";
import DashboardLayout from "./components/dashboard/DashboardLayout";
import AdminLogin from "./components/adminlogin/AdminLogin";
import Admincontact from "./components/admincontact/Admincontact";
import Productdetail from "./components/productdetail/Productdetail";
import Updateproduct from "./components/productupdate/Updateproduct";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<AdminLogin />} />
        <Route path="/admin" element={<DashboardLayout />} />
        <Route path="/admin/admincontact" element={<Admincontact />} />
        <Route path="/admin/productdetail" element={<Productdetail />} />
        <Route path="/admin/updateproduct" element={<Updateproduct />} />
      </Routes>
    </>
  );
}

export default App;
