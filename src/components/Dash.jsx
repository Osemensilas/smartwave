import Purchase from "../components/Purchase";
import walletImg from "../assets/imgs/wallet.png";
import cashbackImg from "../assets/imgs/refund.png";
import commissionImg from "../assets/imgs/commission.png";
import referalsImg from "../assets/imgs/change.png";
import { Link } from "react-router-dom";

const Dash = () => {
    return ( 
        <div className="user-dashboard">
            <div className="user-dashbord-message">
                <div className="user-dashboard-message-container">
                    <div className="user-dashboard-header">
                        <h2>Welcome to SmartVTU</h2>
                    </div>
                    <div className="user-dashboard-content">
                        <p>SmartVTU, a service business by Ossil Tech LTD. We are your go-to platform for seamless and reliable virtual top-ups. With a commitment to efficiency and customer satisfaction, SmartVTU makes airtime, data, and utility
                            transactions quick and hassle-free. Experience innovation at its best with SmartVTU!</p>
                    </div>
                </div>
            </div>
            <div className="client-dashboard-details-container">
                <div className="client-dashboard-header">
                    <h2>Package: Reseller</h2>
                    <Link to="/fund-account" className="client-dashboard-fund-account">Fund Account</Link>
                </div>
            </div>
            <div className="client-wallet-summary">
                <div className="wallet-summary-container">
                    <div className="wallet-container-right">
                        <div className="wallet-img-container">
                            <img src={walletImg} alt="" className="wallet-img"/>
                        </div>
                    </div>
                    <div className="wallet-container-left">
                        <div className="wallet-left-top">
                            <h3>Wallet Balance</h3>
                        </div>
                        <div className="wallet-left-bottom">
                            <p>₦125</p>
                        </div>
                    </div>
                </div>
                <div className="wallet-summary-container">
                    <div className="wallet-container-right">
                        <div className="wallet-img-container">
                            <img src={cashbackImg} alt="" className="wallet-img"/>
                        </div>
                    </div>
                    <div className="wallet-container-left">
                        <div className="wallet-left-top">
                            <h3>Cashback</h3>
                        </div>
                        <div className="wallet-left-bottom">
                            <p>₦125</p>
                        </div>
                    </div>
                </div>
                <div className="wallet-summary-container">
                    <div className="wallet-container-right">
                        <div className="wallet-img-container">
                            <img src={commissionImg} alt="" className="wallet-img"/>
                        </div>
                    </div>
                    <div className="wallet-container-left">
                        <div className="wallet-left-top">
                            <h3>Commission</h3>
                        </div>
                        <div className="wallet-left-bottom">
                            <p>₦125</p>
                        </div>
                    </div>
                </div>
                <div className="wallet-summary-container">
                    <div className="wallet-container-right">
                        <div className="wallet-img-container">
                            <img src={referalsImg} alt="" className="wallet-img"/>
                        </div>
                    </div>
                    <div className="wallet-container-left">
                        <div className="wallet-left-top">
                            <h3>Referals</h3>
                        </div>
                        <div className="wallet-left-bottom">
                            <p>5</p>
                        </div>
                    </div>
                </div>
            </div>
            <Purchase/>
            <div className="client-history">
                <div className="client-history-container">
                    <div className="client-history-header">
                        <h2>Transaction History</h2>
                    </div>
                    <div className="transaction-content">
                        <table className="history-table">
                            <thead>
                                <tr className="history-table-header">
                                    <th>ID</th>
                                    <th>Service</th>
                                    <th>Details</th>
                                    <th>Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="history-table-content">
                                <td>286573</td>
                                <td>Data</td>
                                <td><Link to="/">200 naira data</Link></td>
                                <td className="status">
                                    <div className="status-holder success">Successful</div>
                                </td>
                            </tr>
                            <tr className="history-table-content">
                                <td>273573</td>
                                <td>Airtime</td>
                                <td><Link to="/">200 naira data</Link></td>
                                <td className="status">
                                    <div className="status-holder success">Successful</div>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Dash;
