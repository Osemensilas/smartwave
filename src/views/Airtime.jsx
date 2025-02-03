import "../assets/css/top.css";
import "../assets/css/dashboard.css";
import "../assets/css/purchase.css";
import "../assets/css/page.css";
import "../assets/css/main.css";
import "../assets/css/airtime.css";
import Mainleft from "../components/Mainleft";
import Top from "../components/Top";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Setsession from "../components/Setsession";

const Airtime = () => {

    const browserSession = sessionStorage.getItem("session");
    const navigate = useNavigate();

    if (!browserSession){
        navigate('/home');
    }

    const [formData, setFormData] = useState({
        'network': '',
        'phone': '',
        'amount': '',
        'session': browserSession,
        'payment': '',
    });
    const [networkError, setNetworkError] = useState("");
    const [phoneError, setPhoneError] = useState("");
    const [amountError, setAmountError] = useState("");
    const [paymentError, setPaymentError] = useState("");
    const [successValue, setSuccessValue] = useState("success-container");
    const [successText, setSuccessText] = useState("");

    const handleChanged = (e) => {
        const {name, value} = e.target;
        setFormData({...formData, [name]: value});
    }

    const btnClicked = (e) => {

        e.preventDefault();
        
        const buyAirtime = async function () {

            const url = "http://localhost/backends/waves/airtime.php";
            
            const formDatas = new FormData();

            Object.keys(formData).forEach((key) => {
                formDatas.append(key, formData[key]);
            })

            const response = await axios.post(url,
                formData,
                {
                    headers: {
                        "Content-Type" : "Application/json"
                    },withCredentials: true
                }
            );
            const { msg, value } = response.data;

            if (msg === 'not successful'){
                    if (value.payment === 'All field required'){
                        setPaymentError('Payment option required');
                    }
                    
                    if (value.payment === ''){
                        setPaymentError('');
                    }
                    

                    if (value.network === 'All field required'){
                        setNetworkError('Network required');
                    }
                    
                    if (value.network === ''){
                        setNetworkError('');
                    }

                    if (value.phone === 'All field required'){
                        setPhoneError('Phone number required');
                    }
                    
                    if (value.phone === 'Invalid phone number'){
                        setPhoneError('Invalid phone number');
                    }
                    
                    if (value.phone === ''){
                        setPhoneError('');
                    }

                    if (value.amount === 'All field required'){
                        setAmountError('Amount required');
                    }
                    
                    if (value.amount === 'Invalid amount'){
                        setAmountError('Invalid amount');
                    }
                    
                    if (value.amount === 'Insufficient account balance'){
                        setAmountError('Insufficient account balance');
                    }
                    
                    if (value.amount === 'Insufficient cashback'){
                        setAmountError('Insufficient cashback');
                    }
                    
                    if (value.amount === ''){
                        setAmountError('');
                    } 
                }

                if (msg === 'pending'){
                    setPaymentError('');
                    setAmountError('');
                    setPhoneError('');
                    setNetworkError('');

                    setSuccessText(value);
                    setSuccessValue("success-container pending");
                }

                if (msg === 'successful'){
                    setPaymentError('');
                    setAmountError('');
                    setPhoneError('');
                    setNetworkError('');

                    setSuccessText(value);
                    setSuccessValue("success-container success");
                }
            }

            buyAirtime();
        }

    return ( 
        <div className="main">
            <Setsession/>
            <Mainleft/>
            <div className="main-right">
                <Top/>
                <div className="main-right-content">
                    <div className="purchase-dashboard">
                        <form action="#" className="purchase-form">
                            <div className="form-header">
                                <h2>Buy Airtime</h2>
                            </div>
                            <div className={ successValue}>
                                <p>{ successText }</p>
                            </div>
                            <div className="form-content">
                                <div className="details">
                                    <label htmlFor="payment">Payment Option</label>
                                    <select name="payment" id="payment" onChange={handleChanged} className="detail">
                                        <option value="">-- Select Payment Option --</option>
                                        <option value="account balance">Account Balance</option>
                                        <option value="cash back">Cash Back</option>
                                    </select>
                                    <div className="single-error">{paymentError}</div>
                                </div>
                                <div className="details">
                                    <label htmlFor="network">Network</label>
                                    <select name="network" id="network" onChange={handleChanged} className="detail">
                                        <option value="">-- Select Network --</option>
                                        <option value="airtel">Airtel</option>
                                        <option value="glo">GLO</option>
                                        <option value="mtn">MTN</option>
                                        <option value="etisalat">9mobile</option>
                                    </select>
                                    <div className="single-error">{networkError}</div>
                                </div>
                                <div className="details">
                                    <label htmlFor="phone">Phone No.</label>
                                    <input type="text" id="phone" value={formData.phone} onChange={handleChanged} name="phone" className="detail"/>
                                    <div className="single-error">{phoneError}</div>
                                </div>
                                <div className="details">
                                    <label htmlFor="amount">Amount</label>
                                    <input type="text" id="amount" value={formData.amount} onChange={handleChanged} name="amount" className="detail"/>
                                    <div className="single-error">{amountError}</div>
                                </div>
                            </div>
                            <div className="form-submit-btn-container">
                                <input type="submit" className="submit-btn" onClick={btnClicked} value="Buy Now"/>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Airtime;