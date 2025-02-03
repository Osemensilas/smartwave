import Adminleft from "../../components/Adminleft";
import Top from "../../components/Top";
import { Link } from "react-router-dom";
import walletImg from "../../assets/imgs/wallet.png";
import cashbackImg from "../../assets/imgs/refund.png";
import commissionImg from "../../assets/imgs/commission.png";
import referalsImg from "../../assets/imgs/change.png";
import phoneImg from "../../assets/imgs/phone-call.png";
import signalImg from "../../assets/imgs/signal.png";
import cableImg from "../../assets/imgs/television.png";
import powerImg from "../../assets/imgs/flash.png";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Admindash = () => {

    const [accountBal, setAccountBal] = useState(0);
    const [commission, setCommission] = useState(0);
    const [referers, setReferers] = useState(0);
    const [cashback, setCashback] = useState(0);

    let browserSession = sessionStorage.getItem("session");
    const navigate = useNavigate();

    useEffect(() => {

        const session = { userSession: browserSession };

        if (!browserSession){
            navigate("/admin_panel/");
        }

        const dashboardDetails = async function (){
            const response = await axios.post("http://localhost/backends/waves/admin_dash.php",
                session,
                {
                    headers: {
                        'Content-type' : 'application/json',
                    },
                    withCredentials: true,
                }
            );
            setAccountBal(response.data.balance);
            setCashback(response.data.cashback);
            setCommission(response.data.commission);
            setReferers(response.data.referers);
        }

        dashboardDetails();

        setInterval(() => {
            dashboardDetails();
        }, 10000);
    }, [browserSession, navigate])
    return ( 
        <div className="main">
            <Adminleft/>
            <div className="main-right">
                <Top/>
                <div className="main-right-content">
                    <div className="user-dashboard">
                        <div className="user-dashbord-message">
                            <div className="user-dashboard-message-container">
                                <div className="user-dashboard-header">
                                    <h2>Admin Dashboard</h2>
                                </div>
                                <div className="user-dashboard-content">
                                    <p>SmartVTU, a service business by Ossil Tech LTD. We are your go-to platform for seamless and reliable virtual top-ups. With a commitment to efficiency and customer satisfaction, SmartVTU makes airtime, data, and utility
                                        transactions quick and hassle-free. Experience innovation at its best with SmartVTU!</p>
                                </div>
                            </div>
                        </div>
                        <div className="client-dashboard-details-container">
                            <div className="client-dashboard-header">
                                <h2>Package: Admin Panel</h2>
                                <Link to="/" className="client-dashboard-fund-account">Fund Account</Link>
                            </div>
                        </div>
                        <div className="client-wallet-summary">
                            <div className="wallet-summary-container">
                                <div className="wallet-container-right">
                                    <div className="wallet-img-container">
                                        <img src={walletImg} alt="" className="wallet-img" />
                                    </div>
                                </div>
                                <div className="wallet-container-left">
                                    <div className="wallet-left-top">
                                        <h3>Wallet Balance</h3>
                                    </div>
                                    <div className="wallet-left-bottom">
                                        <p>₦{accountBal}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="wallet-summary-container">
                                <div className="wallet-container-right">
                                    <div className="wallet-img-container">
                                        <img src={cashbackImg} alt="" className="wallet-img" />
                                    </div>
                                </div>
                                <div className="wallet-container-left">
                                    <div className="wallet-left-top">
                                        <h3>Total Cashback</h3>
                                    </div>
                                    <div className="wallet-left-bottom">
                                        <p>₦{cashback}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="wallet-summary-container">
                                <div className="wallet-container-right">
                                    <div className="wallet-img-container">
                                        <img src={commissionImg} alt="" className="wallet-img" />
                                    </div>
                                </div>
                                <div className="wallet-container-left">
                                    <div className="wallet-left-top">
                                        <h3>Total Commission</h3>
                                    </div>
                                    <div className="wallet-left-bottom">
                                        <p>₦{commission}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="wallet-summary-container">
                                <div className="wallet-container-right">
                                    <div className="wallet-img-container">
                                        <img src={referalsImg} alt="" className="wallet-img" />
                                    </div>
                                </div>
                                <div className="wallet-container-left">
                                    <div className="wallet-left-top">
                                        <h3>Total Referals</h3>
                                    </div>
                                    <div className="wallet-left-bottom">
                                        <p>{referers}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="dashhbord-purchase">
                            <div className="dashboard-purchase-container">
                                <Link to="/airtime" className="dashboard-purchase-card">
                                    <div className="purchase-card-top">
                                        <img src={phoneImg} alt="" className="purchase-cardimg" />
                                    </div>
                                    <div className="purchase-card-bottom">
                                        <p>Buy Airtime</p>
                                    </div>
                                </Link>
                                <Link to="/data" className="dashboard-purchase-card">
                                    <div className="purchase-card-top">
                                        <img src={signalImg} alt="" className="purchase-cardimg" />
                                    </div>
                                    <div className="purchase-card-bottom">
                                        <p>Buy Data</p>
                                    </div>
                                </Link>
                                <Link to="/cable" className="dashboard-purchase-card">
                                    <div className="purchase-card-top">
                                        <img src={cableImg} alt="" className="purchase-cardimg" />
                                    </div>
                                    <div className="purchase-card-bottom">
                                        <p>Cable TV</p>
                                    </div>
                                </Link>
                                <Link to="/electricity" className="dashboard-purchase-card">
                                    <div className="purchase-card-top">
                                        <img src={powerImg} alt="" className="purchase-cardimg" />
                                    </div>
                                    <div className="purchase-card-bottom">
                                        <p>Electricity Bill</p>
                                    </div>
                                </Link>
                            </div>
                        </div>
                        <div className="client-history">
                            <div className="client-history-container">
                                <div className="client-history-header">
                                    <h2>Transaction History</h2>
                                </div>
                                <div className="transaction-content">
                                    <table className="history-table">
                                        <tr className="history-table-header">
                                            <th>ID</th>
                                            <th>Service</th>
                                            <th>Details</th>
                                            <th>Status</th>
                                        </tr>
                                        <tr className="history-table-content">
                                            <td>286573</td>
                                            <td>Data</td>
                                            <td>200 naira data</td>
                                            <td className="status">
                                                <div className="status-holder success">Successful</div>
                                            </td>
                                        </tr>
                                        <tr className="history-table-content">
                                            <td>273573</td>
                                            <td>Airtime</td>
                                            <td>200 naira data</td>
                                            <td className="status">
                                                <div className="status-holder success">Successful</div>
                                            </td>
                                        </tr>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Admindash;