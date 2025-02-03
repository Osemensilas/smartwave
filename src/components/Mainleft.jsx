import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import maleImg from "../assets/imgs/man.png";
import axios from "axios";

const Mainleft = () => {

    const [mainLeft, setMainLeft] = useState("main-left");
    const [anchorText, setAnchorText] = useState("anchor-text");
    const [greeting, setGreeting] = useState("greeting");
    const [userRight, setUserRight] = useState('user-right');
    const [hamburger, setHamburger] = useState('hamburger');
    const [user, setUser] = useState('user-container');
    const [username, setUsername] = useState('');
    const [accountBal, setAccountBal] = useState("0");

    let browserSession = sessionStorage.getItem("session");

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

    useEffect(() => {

      const session = { userSession: browserSession };

      const fetchData = async function () {
          try {

              const response = await axios.post("http://localhost/backends/waves/dashboard.php",
                  session,
                  {
                      headers: {
                          "Content-Type": "application/json", // Inform PHP that the data is in JSON format
                      },
                      withCredentials: true,
                  }
              );

              const userDetails = response.data;

              if (userDetails.msg === 'successful'){
                  setUsername(userDetails.user);
                  setAccountBal(userDetails.acct_bal);
              }

          } catch (err) {
              console.log(err);
          }
      }
          
      fetchData();

    }, [browserSession]);
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
                      <h3> {username} </h3>
                  </div>
                  <div className="user-right-bottom">
                      <p> Balance: ₦{accountBal} </p>
                  </div>
                </div>
            </div>
            <div className="nav-content">
                <Link to="/upgrade" className="nav-anchor">
                  <p className={anchorText}>Upgrade Account</p>
                  <i className="fa fa-level-up"></i>
                </Link>
                <Link to="/dashboard" className="nav-anchor">
                  <p className={anchorText}>My Dashboard</p>
                  <i className="fa fa-home"></i>
                </Link>
                <Link to="/fund-account" className="nav-anchor">
                  <p className={anchorText}>Fund Account</p>
                  <i className="fa fa-credit-card"></i>
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
 
export default Mainleft;