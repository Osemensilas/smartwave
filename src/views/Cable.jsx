import Top from "../components/Top";
import Mainleft from "../components/Mainleft";
import "../assets/css/airtime.css";
import "../assets/css/verify.css";
import { useState, useRef } from "react";

const Cable = () => {

    const plansFormRef = useRef(null);
    
        const [activeProduct, setActiveProduct] = useState("");
        const [activePrice, setActivePrice] = useState("");
        const [activeViewPrice, setActiveViewPrice] = useState("");
    
        const selectProduct = function(e){
            const selectedProduct = e.target.value;
    
            setActiveProduct(selectedProduct);
        }
    
        const changePackage = function(e){
            const packageName = e.target.value;
    
            const optionValues = plansFormRef.current.querySelectorAll('option');
    
            for (let i = 0; i < optionValues.length; i++){
                let optionValue = optionValues[i];
    
                if (packageName === optionValue.value){
                    
                    let viewPrice = "₦" + optionValue.dataset.price + ".00";
                    let price = optionValue.dataset.price;
    
                    setActivePrice(price);
                    setActiveViewPrice(viewPrice);
                }
            }
        }

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
                                    <h2>Cable Subscription</h2>
                                </div>
                                <div className="form-content" ref={plansFormRef}>
                                    <div className="details">
                                        <label htmlFor="network">TV Product</label>
                                        <select name="network" id="network" className="detail" onChange={selectProduct}>
                                            <option value="">-- Select TV product --</option>
                                            <option value="dstv">DSTV</option>
                                            <option value="gotv">GOTV</option>
                                            <option value="startimes">Startimes</option>
                                        </select>
                                        <div className="error"></div>
                                    </div>
                                    <div className="plans-container">
                                        <div className={`details ${activeProduct === "dstv" ? "active" : ""}`}>
                                            <label htmlFor="plan">DSTV Package</label>
                                            <select name="plan" id="plan1" className="detail" onChange={changePackage}>
                                                <option value="" data-price=" ">-- Select DSTV Package --</option>
                                                <option value="dstv-padi" data-price="3600">DStv Padi</option>
                                                <option value="dstv-yanga" data-price="5100">DStv Yanga</option>
                                                <option value="dstv-confam" data-price="9300">DStv Confam</option>
                                                <option value="dstv79" data-price="15700">DStv Compact</option>
                                                <option value="dstv7" data-price="25000">DStv Compact Plus</option>
                                                <option value="dstv3" data-price="37000">DStv Premium</option>
                                                <option value="dstv10" data-price="42000">DStv Premium Asia</option>
                                                <option value="dstv9" data-price="57500">DStv Premium French</option>
                                                <option value="confam-extra" data-price="14300">DStv Confam + ExtraView</option>
                                                <option value="yanga-extra" data-price="10100">DStv Yanga + ExtraView</option>
                                                <option value="padi-extra" data-price="8600">DStv Padi + ExtraView</option>
                                                <option value="com-asia" data-price="28100">DStv Compact + Asia</option>
                                                <option value="dstv30" data-price="20700">DStv Compact + Extra View</option>
                                                <option value="com-frenchtouch" data-price="21500">DStv Compact + French Touch</option>
                                                <option value="dstv33" data-price="42000">DStv Premium – Extra View</option>
                                                <option value="dstv40" data-price="37400">DStv Compact Plus – Asia</option>
                                                <option value="com-frenchtouch-extra" data-price="26500">DStv Compact + French Touch + ExtraView</option>
                                                <option value="com-asia-extra" data-price="33100">DStv Compact + Asia + ExtraView</option>
                                                <option value="dstv43" data-price="45500">DStv Compact Plus + French Plus</option>
                                                <option value="complus-frenchtouch" data-price="30800">DStv Compact Plus + French Touch</option>
                                                <option value="dstv45" data-price="30000">DStv Compact Plus – Extra View</option>
                                                <option value="complus-french-extraview" data-price="50500">DStv Compact Plus + FrenchPlus + Extra View</option>
                                                <option value="dstv47" data-price="36200">DStv Compact + French Plus</option>
                                                <option value="dstv48" data-price="42400">DStv Compact Plus + Asia + ExtraView</option>
                                                <option value="dstv61" data-price="54400">DStv Premium + Asia + Extra View</option>
                                                <option value="dstv62" data-price="51000">DStv Premium + French + Extra View</option>
                                                <option value="hdpvr-access-service" data-price="5000">DStv HDPVR Access Service</option>
                                                <option value="frenchplus-addon" data-price="20500">DStv French Plus Add-on</option>
                                                <option value="asia-addon" data-price="12400">DStv Asian Add-on</option>
                                                <option value="DStv French Touch Add-on" data-price="5800">DStv French Touch Add-on</option>
                                                <option value="extraview-access" data-price="5000">ExtraView Access</option>
                                                <option value="french11" data-price="9000">DStv French 11</option>
                                            </select>
                                            <div className="error"></div>
                                        </div>
                                        <div className={`details ${activeProduct === "gotv" ? "active" : ""}`}>
                                            <label htmlFor="plan">GOTV Package</label>
                                            <select name="plan" id="plan2" className="detail" onChange={changePackage}>
                                                <option value="">-- Select GOTV Package --</option>
                                                <option value="gotv-smallie" data-price="1575">GOtv Smallie</option>
                                                <option value="gotv-jinja" data-price="3300">GOtv Jinja</option>
                                                <option value="gotv-jolli" data-price="4850">GOtv Jolli</option>
                                                <option value="gotv-max" data-price="7200">GOtv Max</option>
                                                <option value="gotv-supa" data-price="15700">GOtv Supa</option>
                                            </select>
                                            <div className="error"></div>
                                        </div>
                                        <div className={`details ${activeProduct === "startimes" ? "active" : ""}`}>
                                            <label htmlFor="plan">Startimes Package</label>
                                            <select name="plan" id="plan3" className="detail" onChange={changePackage}>
                                                <option value="">-- Select Startimes Package --</option>
                                                <option value="nova" data-price="1500">Startimes Nova</option>
                                                <option value="basic" data-price="3000">Startimes Basic</option>
                                                <option value="smart" data-price="3500">Startimes Smart</option>
                                                <option value="classic" data-price="3800">Startimes Classic</option>
                                                <option value="super" data-price="6500">Startimes Super</option>
                                            </select>
                                            <div className="error"></div>
                                        </div>
                                    </div>
                                    <div className="details">
                                        <label htmlFor="phone">Phone No.</label>
                                        <input type="text" id="phone" className="detail"/>
                                        <div className="error"></div>
                                    </div>
                                    <div className="details">
                                        <label htmlFor="amount">Amount</label>
                                        <input type="text" id="hidden-amount" name="amount" value={activePrice} className="hidden-amount" hidden/>
                                        <div id="amount" className="detail">{activeViewPrice}</div>
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
                                        <label htmlFor="vmeter">Smartcard no.:</label>
                                        <div id="vmeter" className="verify-detail">123758985758</div>
                                    </div>
                                    <div className="verify-details">
                                        <label htmlFor="vproduct">TV Product:</label>
                                        <div id="vproduct" className="verify-detail">DSTV</div>
                                    </div>
                                    <div className="verify-details">
                                        <label htmlFor="vpackage">TV Package:</label>
                                        <div id="vpackage" className="verify-detail">DStv Yanga</div>
                                    </div>
                                    <div className="verify-details">
                                        <label htmlFor="customer-amount">Amount:</label>
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
 
export default Cable;