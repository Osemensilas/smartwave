import Top from "../components/Top";
import Mainleft from "../components/Mainleft";
import "../assets/css/notification.css";
import { Link } from "react-router-dom";


const Notification = () => {

    return ( 

        <div className="main">
            <Mainleft/>
            <div className="main-right">
                <Top/>
                <div className="main-right-content">
                    <div className="notification-main-container">
                        <div className="client-history-container">
                            <div className="client-history-header">
                                <h2>Transaction History</h2>
                            </div>
                            <div className="transaction-content">
                                <div className="notifications-table">
                                    <Link to="#" className="notification-card">
                                        <div className="notification-left">
                                            <p>23/04/2024</p>
                                        </div>
                                        <div className="norification-right">
                                            <p>Top Up account with 20 naira</p>
                                        </div>
                                    </Link>
                                    <Link to="#" className="notification-card">
                                        <div className="notification-left">
                                            <p>23/04/2024</p>
                                        </div>
                                        <div className="norification-right">
                                            <p>Top Up account with 20 naira</p>
                                        </div>
                                    </Link>
                                    <Link to="#" className="notification-card">
                                        <div className="notification-left">
                                            <p>23/04/2024</p>
                                        </div>
                                        <div className="norification-right">
                                            <p>Top Up account with 20 naira</p>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Notification;