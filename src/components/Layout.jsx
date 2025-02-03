import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../views/Home";
import Dashboard from "../views/Dashboard";
import Airtime from "../views/airtime";
import Data from "../views/Data";
import Cable from "../views/Cable";
import Electricity from "../views/Electricity";
import Account from "../views/Account";
import Notification from "../views/Notification";
import Upgrade from "../views/Upgrade";
import Signin from "../views/Signin";
import Signup from "../views/Signup";
import Fund from "../views/Fund";
import Index from "../views/admin";
import Admindash from "../views/admin/Amindash";
import AddData from "../views/admin/AddData";
import AddCable from "../views/admin/AddCable";

const Layout = () => {
    return ( 
        <div className="layout-container">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />}></Route>
                    <Route path="/home" element={<Home />}></Route>
                    <Route path="/dashboard" element={<Dashboard />}></Route>
                    <Route path="/airtime" element={<Airtime />}></Route>
                    <Route path="/data" element={<Data />}></Route>
                    <Route path="/cable" element={<Cable />}></Route>
                    <Route path="/electricity" element={<Electricity />}></Route>
                    <Route path="/account" element={<Account />}></Route>
                    <Route path="/notifications" element={<Notification />}></Route>
                    <Route path="/upgrade" element={<Upgrade />}></Route>
                    <Route path="/sign-in" element={<Signin />}></Route>
                    <Route path="/sign-up" element={<Signup />}></Route>
                    <Route path="/fund-account" element={<Fund />}></Route>
                    <Route path="/admin_panel/" element={<Index />}></Route>
                    <Route path="/admin_panel/index" element={<Index />}></Route>
                    <Route path="/admin_panel/dashboard" element={<Admindash />}></Route>
                    <Route path="/admin_panel/add-data" element={<AddData />}></Route>
                    <Route path="/admin_panel/add-cable" element={<AddCable/>}></Route>
                </Routes>
            </BrowserRouter>
        </div>
     );
}
 
export default Layout;