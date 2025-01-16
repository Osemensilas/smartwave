import "../assets/css/top.css";
import "../assets/css/dashboard.css";
import "../assets/css/purchase.css";
import "../assets/css/page.css";
import "../assets/css/main.css";
import "../assets/css/airtime.css";
import Mainleft from "../components/Mainleft";
import Top from "../components/Top";

const Airtime = () => {
    return ( 
        <div className="main">
            <Mainleft/>
            <div className="main-right">
                <Top/>
                <div className="main-right-content">
                    <div className="purchase-dashboard">
                        <form action="#" className="purchase-form">
                            <div className="form-header">
                                <h2>Buy Airtime</h2>
                            </div>
                            <div className="form-content">
                                <div className="details">
                                    <label htmlFor="network">Network</label>
                                    <select name="network" id="network" className="detail">
                                        <option value="">-- Select Network --</option>
                                        <option value="airtel">Airtel</option>
                                        <option value="glo">GLO</option>
                                        <option value="mtn">MTN</option>
                                        <option value="etisalat">9mobile</option>
                                    </select>
                                    <div className="error"></div>
                                </div>
                                <div className="details">
                                    <label htmlFor="phone">Phone No.</label>
                                    <input type="text" id="phone" className="detail"/>
                                    <div className="error"></div>
                                </div>
                                <div className="details">
                                    <label htmlFor="amount">Amount</label>
                                    <input type="text" id="amount" name="amount" className="detail"/>
                                    <div className="error"></div>
                                </div>
                            </div>
                            <div className="form-submit-btn-container">
                                <input type="submit" className="submit-btn" value="Buy Now"/>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Airtime;