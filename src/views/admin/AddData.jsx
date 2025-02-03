import axios from "axios";
import Adminleft from "../../components/Adminleft";
import Top from "../../components/Top";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const AddData = () => {

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

    const handleChanged = (e) => {
        const {name, value} = e.target;
        setFormData({...formData, [name]: value});
    }

    const formSubmitted = (e) => {

        e.preventDefault();

        let url = "http://localhost/backends/waves/add-data.php";

        let formDatas = new FormData();

        Object.keys(formData).forEach((key) => {
            formDatas.append(key, formData[key]);
        })

        const formSubmit = async function(){
            try{
                const response = await axios.post(url, formData,
                    {
                        headers: {
                            'Content-Type' : 'application/json',
                        },
                        withCredentials: true,
                    }
                );

                const {msg, value} = response.data;
                console.log(response.data);

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

        formSubmit();
    }
    
    useEffect(() => {

        if (!browserSession){
            navigate("/admin_panel/");
        }

      
    }, [browserSession, navigate])

    return ( 
        <div className="main">
            <Adminleft/>
            <div className="main-right">
                <Top/>
                <div className="main-right-content">
                    <div className="purchase-dashboard">
                        <form action="#" className="purchase-form">
                            <div className="form-header">
                                <h2>Add Data Plan</h2>
                            </div>
                            <div className={errorContainer}>
                                <div className="error">{ error }</div>
                            </div>
                            <div className="form-content">
                                <div className="details">
                                    <label htmlFor="network">Network</label>
                                    <select name="network" id="network" className="detail" onChange={handleChanged}>
                                        <option value="">-- Select Network --</option>
                                        <option value="airtel"><img src="assets/imgs/commission.png" alt="" /> Airtel</option>
                                        <option value="glo"><img src="assets/imgs/glo-limited-seeklogo.svg" alt="" /> GLO</option>
                                        <option value="mtn"><img src="assets/imgs/mtn-seeklogo.png" alt="" /> MTN</option>
                                        <option value="etisalat"><img src="assets/imgs/9mobile.svg" alt="" /> 9mobile</option>
                                    </select>
                                    <div className="error"></div>
                                </div>
                                <div className="details">
                                    <label htmlFor="variation">Variation</label>
                                    <input type="text" value={formData.variation} onChange={handleChanged} id="variation" name="variation" className="detail" />
                                    <div className="error"></div>
                                </div>
                                <div className="details">
                                    <label htmlFor="basic_amount">Solo Amount</label>
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
                                <input type="submit" name="submit" onClick={formSubmitted} className="submit-btn" value="Upload" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default AddData;