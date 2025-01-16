import {Link} from "react-router-dom";


const Sidenav = () => {



    return ( 
              <div className="nav-content">
                <Link to="/upgrade" className="nav-anchor">
                  <p className="anchor-text">Upgrade Account</p>
                  <i className="fa fa-level-up"></i>
                </Link>
                <Link to="/dashboard" className="nav-anchor">
                  <p className="anchor-text">My Dashboard</p>
                  <i className="fa fa-home"></i>
                </Link>
                <Link href="/" className="nav-anchor">
                  <p className="anchor-text">Fund Account</p>
                  <i className="fa fa-credit-card"></i>
                </Link>
                <Link to="/airtime" className="nav-anchor">
                  <p className="anchor-text">Buy Airtime</p>
                  <i className="fa fa-phone"></i>
                </Link>
                <Link to="/data" className="nav-anchor">
                  <p className="anchor-text">Buy Data</p>
                  <i className="fa fa-signal"></i>
                </Link>
                <Link to="/cable" className="nav-anchor">
                  <p className="anchor-text">Cable TV</p>
                  <i className="fa fa-television"></i>
                </Link>
                <Link to="/electricity" className="nav-anchor">
                  <p className="anchor-text">Electricity</p>
                  <i className="fa fa-bolt"></i>
                </Link>
                <Link to="/account" className="nav-anchor">
                  <p className="anchor-text">Account</p>
                  <i className="fa fa-user"></i>
                </Link>
                <Link to="/notifications" className="nav-anchor">
                  <p className="anchor-text">Notifications</p>
                  <i className="fa fa-bell"></i>
                </Link>
              </div>
     );
}
 
export default Sidenav;