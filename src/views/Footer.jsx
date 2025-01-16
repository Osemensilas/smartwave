import { Link } from "react-router-dom";

const Footer = () => {
    return ( 
        <footer id="footer">
            <div className="footer">
                <div className="footer-top">
                    <div className="footer-top-left">
                        <div className="footer-logo-container">
                            <img src="#" alt="" className="footer-logo"/>
                        </div>
                    </div>
                    <div className="footer-top-right">
                        <nav className="footer-nav">
                            <Link to="#" className="footer-nav-item">Privacy Policy</Link>
                            <Link to="#" className="footer-nav-item">Terms & Conditions</Link>
                        </nav>
                        <div className="social-container">
                            <Link to="#" className="social-icon">
                                <i className="fa fa-twitter"></i>
                            </Link>
                            <Link to="#" className="social-icon">
                                <i className="fa fa-youtube-play"></i>
                            </Link>
                            <Link to="#" className="social-icon">
                                <i className="fa fa-instagram"></i>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom">
                    <p>All rights reserved &copy smartwave. An Ossil Tech VTU business</p>
                </div>
            </div>
        </footer>
     );
}
 
export default Footer;