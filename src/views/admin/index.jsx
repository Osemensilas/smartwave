import { useNavigate } from "react-router-dom";
import { useState } from 'react';
import axios from 'axios';

const Index = () => {

    const [errorContainer, setErrorContainer] = useState("error-container");
    const [error, setError] = useState("");
    const [formData, setFormData] = useState({
        'email': '',
        'password': '',
    });
    const navigate = useNavigate();

    const handleChanged = (e) => {
        const { name, value } = e.target;
        setFormData({...formData, [name]: value});
    }

    const formSubmitted = (e) => {
        e.preventDefault();

        const url = "http://localhost/backends/waves/adminsignin.php";

        let formDatas = new FormData();
        Object.keys(formData).forEach((key) => {
            formDatas.append(key, formData[key]);
        })

        const formSubmit = async function () {
            try{
                const response = await axios.post(url, formData, {
                    headers: {
                        'Content-Type' : 'application/json'
                    },withCredentials: true,
                });

                const {msg, value} = response.data;

                if (msg === 'error'){
                    if (value.email === 'All fields required'){
                        setError('All fields required');
                        setErrorContainer('error-container active');
                    }

                    if (value.email === 'Invalid email address'){
                        setError('Invalid email address');
                        setErrorContainer('error-container active');
                    }

                    if (value.email === "Email don't exist"){
                        setError("Email don't exist");
                        setErrorContainer('error-container active');
                    }

                    if (value.password === "All fields required"){
                        setError("All fields required");
                        setErrorContainer('error-container active');
                    }

                    if (value.password === "Wrong password"){
                        setError("Wrong password");
                        setErrorContainer('error-container active');
                    }
                }

                if (msg === 'successful'){
                    setError("");
                    setErrorContainer("error-container");

                    sessionStorage.setItem('session', value.session);

                    let sessionStored = sessionStorage.getItem('session');

                    if (sessionStored === ''){
                        navigate("/admin_panel/"); 
                    }else{
                        navigate("/admin_panel/dashboard"); 
                    }
                }
            }catch(error){
                console.log(error);
            }
        }

        formSubmit();
    }

    return ( 
        <section id="sign-up">
            <div className="sign-up">
                <form action="#" className="signup-form" method="POST">
                    <div className="form-header">
                        <h1>Admin Sign In</h1>
                    </div>
                    <div className={errorContainer}>
                        <div className="error">{ error }</div>
                    </div>
                    <div className="form-content">
                        <div className="details">
                            <label htmlFor="email">Email</label>
                            <input type="text" name="email" value={formData.email} onChange={handleChanged} className="detail" id="email" placeholder="e.g. name@gmail.com" />
                            <div className="error"></div>
                        </div>
                        <div className="details">
                            <label htmlFor="password">Password</label>
                            <input type="password" name="password" value={formData.password} onChange={handleChanged} className="detail" id="password" placeholder="Chuku%12kd" />
                            <div className="error"></div>
                        </div>
                    </div>
                    <div className="submit-btn-container">
                        <button type="submit" name="submit" onClick={formSubmitted} className="submit-btn">Login</button>
                    </div>
                </form>
            </div>
        </section>
     );
}
 
export default Index;