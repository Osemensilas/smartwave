import {Link} from "react-router-dom";
import { useState } from "react";
import maleImg from "../assets/imgs/man.png";

const Adminleft = () => {

    const [mainLeft, setMainLeft] = useState("main-left");
    const [anchorText, setAnchorText] = useState("anchor-text");
    const [greeting, setGreeting] = useState("greeting");
    const [userRight, setUserRight] = useState('user-right');
    const [hamburger, setHamburger] = useState('hamburger');
    const [user, setUser] = useState('user-container');

    const hamClicked = function(){
      if (mainLeft === 'main-left'){
        setMainLeft('main-left active');
        setAnchorText('anchor-text active');
        setGreeting('greeting active');
        setUserRight('user-right active');
        setHamburger('hamburger active');
        setUser('user-container active');
      }else{
        setMainLeft('main-left');
        setAnchorText('anchor-text');
        setGreeting('greeting');
        setUserRight('user-right');
        setHamburger('hamburger');
        setUser('user-container');
      }
    }

    return ( 
        <div className={mainLeft}>
            <div className="header-left">
                <div className="dashboard-header">
                  <h3 className={greeting}>Good Morning</h3>
                  <div className="hamburger-container" onClick={hamClicked}>
                      <div className={hamburger}></div>
                  </div>
                </div>
            </div>
            <div className={user}>
                <div className="user-left">
                <div className="user-img-container">
                    <img src={maleImg} alt="" className="user-img" />
                </div>
                </div>
                <div className={userRight}>
                  <div className="user-right-top">
                      <h3> Osemensilas </h3>
                  </div>
                  <div className="user-right-bottom">
                      <p> Balance: ₦125 </p>
                  </div>
                </div>
            </div>
            <div className="nav-content">
                <Link to="/admin_panel/dashboard" className="nav-anchor">
                  <p className={anchorText}>My Dashboard</p>
                  <i className="fa fa-home"></i>
                </Link>
                <Link to="#" className="nav-anchor">
                  <p className={anchorText}>Fund Account</p>
                  <i className="fa fa-credit-card"></i>
                </Link>
                <Link to="/admin_panel/add-data" className="nav-anchor">
                  <p className={anchorText}>Add Data</p>
                  <i className="fa fa-home"></i>
                </Link>
                <Link to="/admin_panel/add-cable" className="nav-anchor">
                  <p className={anchorText}>Add Cable</p>
                  <i className="fa fa-home"></i>
                </Link>
                <Link to="/airtime" className="nav-anchor">
                  <p className={anchorText}>Buy Airtime</p>
                  <i className="fa fa-phone"></i>
                </Link>
                <Link to="/data" className="nav-anchor">
                  <p className={anchorText}>Buy Data</p>
                  <i className="fa fa-signal"></i>
                </Link>
                <Link to="/cable" className="nav-anchor">
                  <p className={anchorText}>Cable TV</p>
                  <i className="fa fa-television"></i>
                </Link>
                <Link to="/electricity" className="nav-anchor">
                  <p className={anchorText}>Electricity</p>
                  <i className="fa fa-bolt"></i>
                </Link>
                <Link to="/account" className="nav-anchor">
                  <p className={anchorText}>Account</p>
                  <i className="fa fa-user"></i>
                </Link>
                <Link to="/notifications" className="nav-anchor">
                  <p className={anchorText}>Notifications</p>
                  <i className="fa fa-bell"></i>
                </Link>
            </div>
        </div>
     );
}
 
export default Adminleft;