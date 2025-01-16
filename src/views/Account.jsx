import Top from "../components/Top";
import Mainleft from "../components/Mainleft";
import Purchase from "../components/Purchase";
import "../assets/css/account.css";
import { Link } from "react-router-dom";
import { useState } from "react";

const Account = () => {

    const [updateForm, setUpdateForm] = useState("update-form-container");
    
    
    const showUpdateForm = function(){
        if (updateForm === 'update-form-container'){
            setUpdateForm('update-form-container active');
        }else{
            setUpdateForm('update-form-container');
        }
    }

    return ( 
        
        <div className="main">
            <Mainleft/>
            <div className="main-right">
                <Top/>
                <div className="main-right-content">
                    <div className="account-main-container">
                        <div className="account">
                            <div className="user-name-account-container">
                                <div className="account-type-left">
                                    <div className="account-img-container">
                                        <img src="#" alt="" className="account-img" />
                                    </div>
                                </div>
                                <div className="account-type-right">
                                    <div className="account-type-right-top">
                                        <h3>Osemensilas</h3>
                                        <div className="acount-right-bottom-left">
                                            <h3>Basic</h3>
                                        </div>
                                    </div>
                                    <div className="account-right-bottom">
                                        <Link to="/" className="acount-right-bottom-right">Ugrade Account</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="account-balance">
                            <div className="balance-container">
                                <h3>Balance: ₦125</h3>
                            </div>
                            <div className="fund-account-btn-container">
                                <Link to="/" className="fund-account-btn">Fund Account</Link>
                            </div>
                        </div>
                        <Purchase/>
                        <div className="user-details-container">
                            <div className="user-details-header">
                                <h2>User Details</h2>
                            </div>
                            <div className="user-details-content">
                                <div className="user-details">
                                    <p>Name: Osemen Silas</p>
                                    <p>Email: Osemensilas@gmail.com</p>
                                    <p>Phone No.: 09054060454</p>
                                    <p>Mobile Network: GLO</p>
                                </div>
                            </div>
                            <div className="update-details-container">
                                <div className="update-details" onClick={showUpdateForm}>Update Phone Details</div>
                            </div>
                        </div>
                        <div className={updateForm}>
                            <form action="#" className="update-details-form">
                                <div className="update-form-details-header">
                                    <h2>Update Phone Details</h2>
                                    <div className="cancel-icon-container" onClick={showUpdateForm}>
                                        <div className="cancel-icon"></div>
                                    </div>
                                </div>
                                <div className="update-error-container">
                                    <div className="update-error">Invalid Input</div>
                                </div>
                                <div className="update-form-details-content">
                                    <div className="update-form-details">
                                        <label htmlFor="update-phone">Phone Number:</label>
                                        <input type="text" className="update-phone-detail update-phone" id="update-phone" />
                                    </div>
                                    <div className="update-form-details">
                                        <label htmlFor="update-network">Phone Network:</label>
                                        <select type="text" className="update-phone-detail update-network" id="update-network">
                                            <option value="">-- Select Network --</option>
                                            <option value="airtel">Airtel</option>
                                            <option value="glo">GLO</option>
                                            <option value="mtn">MTN</option>
                                            <option value="9mobile">Etisalat</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="update-form-btn-container">
                                    <input type="submit" className="update-form-btn" value="Update" />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Account;