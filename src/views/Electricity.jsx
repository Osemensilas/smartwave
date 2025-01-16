import Top from "../components/Top";
import Mainleft from "../components/Mainleft";
import "../assets/css/airtime.css";
import "../assets/css/verify.css";

const Electricity = () => {
    return ( 
        
        <div className="main">
            <Mainleft/>
            <div className="main-right">
                <Top/>
                <div className="main-right-content">
                    <div className="cable-main-container">
                        <div className="purchase-dashboard">
                            <form action="#" className="purchase-form">
                                <div className="form-header">
                                    <h2>Buy Power</h2>
                                </div>
                                <div className="form-content">
                                    <div className="details">
                                        <label htmlFor="network">Electricity Provider</label>
                                        <select name="network" id="network" className="detail">
                                            <option value="">-- Select Electricity Provider --</option>
                                            <option value="abuja-electric">Abuja Electricity Distribution Company (AEDC)</option>
                                            <option value="eko-electric">Eko Electricity Distribution Company (EKEDC)</option>
                                            <option value="ibadan-electric">Ibadan Electricity Distribution Company (IBEDC)</option>
                                            <option value="ikeja-electric">Ikeja Electricity Distribution Company (IKEDC)</option>
                                            <option value="jos-electric">Jos Electricity Distribution PLC (JEDplc)</option>
                                            <option value="kaduna-electric">Kaduna Electricity Distribution Company (KAEDCO)</option>
                                            <option value="kano-electric">Kano Electricity Distribution Company (KEDCO)</option>
                                            <option value="portharcourt-electric">Port Harcourt Electricity Distribution Company (PHED)</option>
                                        </select>
                                        <div className="error"></div>
                                    </div>
                                    <div className="details">
                                        <label htmlFor="meter">Meter No.</label>
                                        <input type="text" id="meter" className="detail"/>
                                        <div className="error"></div>
                                    </div>
                                    <div className="details">
                                        <label htmlFor="meter-type">Meter Type</label>
                                        <select name="meter_type" id="meter-type" className="detail">
                                            <option value="">-- Select Meter Type --</option>
                                            <option value="prepaid">Prepaid</option>
                                            <option value="postpaid">Postpaid</option>
                                        </select>
                                        <div className="error"></div>
                                    </div>
                                    <div className="details">
                                        <label htmlFor="phone">Phone No.</label>
                                        <input type="text" id="phone" className="detail"/>
                                        <div className="error"></div>
                                    </div>
                                    <div className="details">
                                        <label htmlFor="email">Email Address</label>
                                        <input type="text" id="email" className="detail"/>
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
                        <div className="verify-container">
                            <div className="verify-form-container">
                                <div className="verify-header">
                                    <h2>Verify Details</h2>
                                </div>
                                <div className="verify-content">
                                    <div className="verify-details">
                                        <label htmlFor="customer-name">Customer Name:</label>
                                        <div id="cutomer-name" className="verify-detail">Osemen Silas</div>
                                    </div>
                                    <div className="verify-details">
                                        <label htmlFor="vmeter">Meter No.:</label>
                                        <div id="vmeter" className="verify-detail">123758985758</div>
                                    </div>
                                    <div className="verify-details">
                                        <label htmlFor="vaddress">Address:</label>
                                        <div id="cutomer-name" className="verify-detail">No. 10 Lord Saeprd Street Abuja.</div>
                                    </div>
                                    <div className="verify-details">
                                        <label htmlFor="customer-name">Arrears:</label>
                                        <div id="cutomer-name" className="verify-detail">0.00</div>
                                    </div>
                                    <div className="verify-details">
                                        <label htmlFor="customer-amount">Amount to Buy:</label>
                                        <div id="cutomer-amount" className="verify-detail">₦1100.00</div>
                                    </div>
                                </div>
                                <div className="verify-continue-btn">
                                    <div className="edit-btn">Edit Details</div>
                                    <a href="/" className="continue-btn">Continue</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Electricity;