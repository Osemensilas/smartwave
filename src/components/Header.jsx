import {Link} from "react-router-dom";
import logo from "../assets/imgs/SmartVTU.png"



const Header = () => {
    return ( 
            <header id="home-header">
                <div className="home-header">
                    <div className="home-header-left">
                        <div className="home-header-logo-container">
                            <img src={logo} alt="" className="home-header-logo" />
                        </div>
                    </div>
                    <div className="home-header-right">
                        <div className="home-header-cta-container">
                            <Link to="/sign-in" className="home-header-cta-signin">Sign In</Link>
                            <Link to="/sign-up" className="home-header-cta-signup">Sign Up</Link>
                        </div>
                    </div>
                </div>
            </header>
     );
}
 
export default Header;