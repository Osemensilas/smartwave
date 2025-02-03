import Adminleft from "../../components/Adminleft";
import Top from "../../components/Top";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const AddCable = () => {

    let browserSession = sessionStorage.getItem("session");
    const navigate = useNavigate();

    const [errorContainer, setErrorContainer] = useState("error-container");
    const [error, setError] = useState("");
    const [formData, setFormData] = useState({
        'network': '',
        'variation': '',
        'solo_amount': '',
        'reseller_amount': '',
        'public_name': '',
        'session': browserSession,
    });

    useEffect(() => {
    
        if (!browserSession){
            navigate("/admin_panel/");
        }

        
    }, [browserSession, navigate])

    const handleChanged = (e) => {
        const {name, value} = e.target;
        setFormData({...formData, [name]: value});
    }

    const formSubmit = async function(){

        try{

            let url = "http://localhost/backends/waves/add-cable.php";

            let formDatas = new FormData();

            Object.keys(formData).forEach((key) => {
                formDatas.append(key, formData[key]);
            })

            let response = await axios.post(url, formData,
                {
                    headers: {
                        'Content-Type' : 'application/json'
                    },
                    withCredentials: true,
                }
            );
            console.log(response.data);
            const {msg, value} = response.data;

            if (msg === 'not successful'){
                if (value.network === 'All fields required'){
                    setError("All fields required");
                    setErrorContainer("error-container active");
                }

                if (value.variation === 'All fields required'){
                    setError("All fields required");
                    setErrorContainer("error-container active");
                }

                if (value.variation === 'Plan already exist'){
                    setError("Plan already exist");
                    setErrorContainer("error-container active");
                }

                if (value.solo_amount === 'All fields required'){
                    setError("All fields required");
                    setErrorContainer("error-container active");
                }

                if (value.solo_amount === 'Invalid amount'){
                    setError("Invalid solo amount");
                    setErrorContainer("error-container active");
                }

                if (value.reseller_amount === 'Invalid amount'){
                    setError("Invalid reseller amount");
                    setErrorContainer("error-container active");
                }

                if (value.public_name === 'All fields required'){
                    setError("All fields required");
                    setErrorContainer("error-container active");
                }
            }

            if (msg === 'successful'){
                setError("Data added successfully");
                setErrorContainer("error-container success");

                setFormData({
                    'public_name': '',
                    'variation': '',
                    'solo_amount': '',
                    'reseller_amount': '',
                })
            }
        }catch(error){
            console.log(error);
        }
    }

    const formSubmitted = (e) => {
        e.preventDefault();

        formSubmit();
    }

    return ( 
        <div className="main">
            <Adminleft/>
            <div className="main-right">
                <Top/>
                <div className="main-right-content">
                    <div className="purchase-dashboard">
                        <form action="#" className="purchase-form">
                            <div className="form-header">
                                <h2>Add Cable Subscription</h2>
                            </div>
                            <div className={errorContainer}>
                                <div className="error">{ error }</div>
                            </div>
                            <div className="form-content">
                                <div className="details">
                                    <label htmlFor="network">TV Product</label>
                                    <select name="network" onChange={handleChanged} id="network" className="detail">
                                        <option value="">-- Select TV product --</option>
                                        <option value="dstv">DSTV</option>
                                        <option value="gotv">GOTV</option>
                                        <option value="startimes">Startimes</option>
                                    </select>
                                    <div className="error"></div>
                                </div>
                                <div className="details">
                                    <label htmlFor="variation">Variation</label>
                                    <input type="text" value={formData.variation} onChange={handleChanged} id="variation" className="detail" name="variation" />
                                    <div className="error"></div>
                                </div>
                                <div className="details">
                                    <label htmlFor="basic_amount">Basic Amount</label>
                                    <input type="text" value={formData.solo_amount} onChange={handleChanged} id="basic_amount" name="solo_amount" className="detail" />
                                    <div className="error"></div>
                                </div>
                                <div className="details">
                                    <label htmlFor="reseller_amount">Reseller Amount</label>
                                    <input type="text" value={formData.reseller_amount} onChange={handleChanged} id="reseller_amount" name="reseller_amount" className="detail" />
                                    <div className="error"></div>
                                </div>
                                <div className="details">
                                    <label htmlFor="public_name">Public Name</label>
                                    <input type="text" value={formData.public_name} onChange={handleChanged} id="public_name" name="public_name" className="detail" />
                                    <div className="error"></div>
                                </div>
                            </div>
                            <div className="form-submit-btn-container">
                                <input type="submit" onClick={formSubmitted} className="submit-btn" value="Add Now" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default AddCable;