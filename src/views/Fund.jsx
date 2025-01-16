import Top from "../components/Top";
import Mainleft from "../components/Mainleft";
import { Link } from "react-router-dom";
import "../assets/css/fund.css";

const Fund = () => {
    return ( 
        <div className="main">
            <Mainleft/>
            <div className="main-right">
                <Top/>
                <div className="main-right-content">
                    <div className="user-fund-dashboard">
                        <div className="user-dashbord-message">
                            <div className="user-dashboard-message-container">
                                <div className="user-dashboard-header">
                                    <h2>Fund account</h2>
                                </div>
                                <div className="user-dashboard-content">
                                    <p>SmartVTU, a service business by Ossil Tech LTD. We are your go-to platform for seamless and reliable virtual top-ups. With a commitment to efficiency and customer satisfaction, SmartVTU makes airtime, data, and utility
                                        transactions quick and hassle-free. Experience innovation at its best with SmartVTU!</p>
                                </div>
                            </div>
                        </div>
                        <div className="payment-method-container">
                            <Link to="/" className="payment-method flutterwave">
                                <img src="#" alt="" className="payment-img" />
                            </Link>
                            <Link to="/" className="payment-method monify">
                                <img src="#" alt="" className="payment-img" />
                            </Link>
                            <Link to="/" className="payment-method paystack">
                                <img src="#" alt="" className="payment-img" />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Fund;