import Top from "../components/Top";
import Mainleft from "../components/Mainleft";
import { Link } from "react-router-dom";
import "../assets/css/upgrade.css";

const Upgrade = () => {

    return ( 

        <div className="main">
            <Mainleft/>
            <div className="main-right">
                <Top/>
                <div className="main-right-content">
                    <div className="upgrade-main-container">
                        <div className="user-dashbord-message">
                            <div className="user-dashboard-message-container">
                                <div className="user-dashboard-header">
                                    <h2>Become a Reseller</h2>
                                </div>
                                <div className="user-dashboard-content">
                                    <p>Smartwave, a service business by Ossil Tech LTD. We are your go-to platform for seamless and reliable virtual top-ups. With a commitment to efficiency and customer satisfaction, SmartVTU makes airtime, data, and utility
                                        transactions quick and hassle-free. Experience innovation at its best with SmartVTU!</p>
                                </div>
                                <div className="upgrade-btn-container">
                                    <Link to="/" className="upgrade-btn">Become a Reseller</Link>
                                </div>
                            </div>
                        </div>
                        <div className="price-container-for-packages">
                            <div className="price-container-for-packages-header">
                                <h2>Prices for packages</h2>
                            </div>
                            <div className="price-table-container">
                                <table className="history-table">
                                    <thead>
                                        <tr className="history-table-header">
                                            <th>Service</th>
                                            <th>Basic</th>
                                            <th>Reseller</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className="history-table-content">
                                        <td>286573</td>
                                        <td>Data</td>
                                        <td>200 naira data</td>
                                    </tr>
                                    <tr className="history-table-content">
                                        <td>273573</td>
                                        <td>Airtime</td>
                                        <td>200 naira data</td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div className="upgrade-btn-container">
                            <Link to="/" className="upgrade-btn">Become a Reseller</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Upgrade;