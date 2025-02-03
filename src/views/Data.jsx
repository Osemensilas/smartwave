import Top from "../components/Top";
import Mainleft from "../components/Mainleft";
import "../assets/css/airtime.css";
import { useRef, useState } from "react";
import axios from "axios";

const Data = () => {

    const [airtelData, setAirtelData] = useState([]);

    const plansContainerRef = useRef(null);
    let browserSession = sessionStorage.getItem("session");

    const session = { userSession: browserSession };

    const getPrices = async function(){
        try{
            let fetchUrl = "http://localhost/backends/waves/fetchdata.php";

            let fetchResponse = await axios.post(fetchUrl, 
                session, 
                {
                    headers: {
                        "Content-Type" : "application/json",
                    },
                    withCredentials: true,
                }
            );
            const dataOptions = fetchResponse.data;

            const airtelValue = dataOptions.airtel;
            setAirtelData(airtelValue);

            console.log(airtelValue);
        }catch(error){
            console.log(error);
        }
    }

    getPrices();
    
    const [activeNetwork, setActiveNetwork] = useState('');
    const [planPrice, setPlanPrice] = useState('');
    

    const NetworkSelected = function(e){

        const selectedNetwork = e.target.value;

        setActiveNetwork(selectedNetwork);
    }

    const airtelPlan = function(e){
        const selectPlanPrice = e.target.value;

        setPlanPrice(selectPlanPrice);
    }

    return ( 

        <div className="main">
            <Mainleft/>
            <div className="main-right">
                <Top/>
                <div className="main-right-content">
                    <div className="purchase-dashboard">
                        <form action="#" className="purchase-form" ref={plansContainerRef}>
                            <div className="form-header">
                                <h2>Buy Data</h2>
                            </div>
                            <div className="form-content">
                                <div className="details">
                                    <label htmlFor="network">Network</label>
                                    <select name="network" id="network" className="detail" onChange={NetworkSelected}>
                                        <option value="">-- Select Network --</option>
                                        <option value="airtel">Airtel</option>
                                        <option value="glo">GLO</option>
                                        <option value="mtn">MTN</option>
                                        <option value="etisalat">9mobile</option>
                                    </select>
                                    <div className="error"></div>
                                </div>
                                <div className="plans-container">
                                    <div className={`details ${activeNetwork === "airtel" ? "active" : ""}`}>
                                        <label htmlFor="plan">Airtel Plan</label>
                                        <select name="plan" id="plan1" className="detail" onChange={airtelPlan}>
                                            <option value="">-- Select airtel data plan --</option>
                                            {airtelData}
                                        </select>
                                        <div className="error"></div>
                                    </div>
                                    <div className={`details ${activeNetwork === "glo" ? "active" : ""}`}>
                                        <label htmlFor="plan">GLO Plan</label>
                                        <select name="plan" id="plan2" className="detail" onChange={airtelPlan}>
                                            <option value="">-- Select airtel data plan --</option>
                                            <option value="200">Glo Data 500MB (Gift) – 30 Days</option>
                                            <option value="340">Glo Data 1GB (Gift) – 30 Days</option>
                                            <option value="680">Glo Data 2GB (Gift)– 30 Days</option>
                                            <option value="1010">Glo Data 3GB (Gift)– 30 Days</option>
                                            <option value="1700">Glo Data 5GB (Gift)– 30 Days</option>
                                            <option value="3400">Glo Data 10GB (Gift)– 30 Days</option>
                                        </select>
                                        <div className="error"></div>
                                    </div>
                                    <div className={`details ${activeNetwork === "mtn" ? "active" : ""}`}>
                                        <label htmlFor="plan">MTN Plan</label>
                                        <select name="plan" id="plan3" className="detail" onChange={airtelPlan}>
                                            <option value="">-- Select airtel data plan --</option>
                                            <option value="340">MTN Data 1GB – 30 Days</option>
                                            <option value="680">MTN Data 2GB – 30 Days</option>
                                            <option value="1020">MTN Data 3GB – 30 Days</option>
                                            <option value="1700">MTN Data 5GB – 30 Days</option>
                                            <option value="3400">MTN Data 10GB – 30 Days</option>
                                            <option value="7960">MTN Data 30GB – 30 Days</option>
                                        </select>
                                        <div className="error"></div>
                                    </div>
                                    <div className={`details ${activeNetwork === "etisalat" ? "active" : ""}`}>
                                        <label htmlFor="plan">9mobile Plan</label>
                                        <select name="plan" id="plan4" className="detail" onChange={airtelPlan}>
                                            <option value="">-- Select airtel data plan --</option>
                                            <option value="1100">9mobile Data 1GB – 30 Days</option>
                                            <option value="2100">9mobile Data 2.5GB – 30 Days</option>
                                            <option value="8100">9mobile Data 11.5GB – 30 Days</option>
                                            <option value="10100">9mobile Data 15GB – 30 Days</option>
                                        </select>
                                        <div className="error"></div>
                                    </div>
                                </div>
                                <div className="details">
                                    <label htmlFor="phone">Phone No.</label>
                                    <input type="text" id="phone" className="detail" />
                                    <div className="error"></div>
                                </div>
                                <div className="details">
                                    <label htmlFor="amount">Amount</label>
                                    <input type="text" id="hidden-amount" name="amount" className="hidden-amount" value={planPrice} hidden />
                                    <div id="amount" className="detail">{planPrice}</div>
                                    <div className="error"></div>
                                </div>
                            </div>
                            <div className="form-submit-btn-container">
                                <input type="submit" className="submit-btn" value="Buy Now" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Data;