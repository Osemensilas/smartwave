import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../views/Home";
import Dashboard from "../views/dashboard";
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
                </Routes>
            </BrowserRouter>
        </div>
     );
}
 
export default Layout;