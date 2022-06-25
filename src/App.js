import { createContext, useState } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import './App.css';
import AddDoctor from "./components/AddDoctor/AddDoctor";
import Appointment from "./components/Appointment/Appointment/Appointment";
import AllPatients from "./components/Dashboard/AllPatients/AllPatients";
import Appointments from "./components/Dashboard/Appointments/Appointments";
import Dashboard from "./components/Dashboard/Dashboard/Dashboard";
import DashboardMain from "./components/Dashboard/DashboardMain/DashboardMain";
import Prescription from "./components/Dashboard/Prescription/Prescription";
import Home from "./components/Home/Home/Home";
import Login from "./components/Login/Login/Login";
import RequireAuth from "./components/Login/RequireAuth/RequireAuth";

export const userContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <userContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="appointment" element={<Appointment />} />
        <Route path="dashboard" element={<RequireAuth><Dashboard /></RequireAuth>}>
          <Route path="" element={<DashboardMain />} />
          <Route path="appointments" element={<Appointments />} />
          <Route path="allPatients" element={<AllPatients />} />
          <Route path="prescription" element={<Prescription />} />
          <Route path="addDoctor" element={<AddDoctor />} />
        </Route>
        <Route path="login" element={<Login />} />
      </Routes>
    </BrowserRouter>
   </userContext.Provider>
  );
}

export default App;
