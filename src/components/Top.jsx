import logo from "../assets/imgs/SmartVTU.png";

const Top = () => {
    return ( 
       <div className="header-right">
            <div className="header-content">
            <div className="header-logo-container">
                <img src={logo} alt="" className="header-logo" />
            </div>
            <a href="/" className="logout-btn">
                <i className="fa fa-power-off"></i>
                <p>Logout</p>
            </a>
            </div>
        </div>
     );
}
 
export default Top;