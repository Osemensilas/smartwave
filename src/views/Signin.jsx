import { Link, useNavigate } from "react-router-dom";
import "../assets/css/signup.css";
import { useState } from "react";
import axios from "axios";

const Signin = () => {

    const [formData, setFormData] = useState({
        'email': '',
        'password': '',
    });
    const [error, setError] = useState("");
    const [errorContainer, setErrorContainer] = useState("error-container");
    const navigate = useNavigate();

    const handleChanged = (e) => {
        const { name, value } = e.target;
        setFormData({...formData, [name]: value});
    }

    const btnClicked = (e) => {

        e.preventDefault();

        let url = "http://localhost/backends/waves/signin.php";

        let formDatas = new FormData();

        Object.keys(formData).forEach((key) => {
            formDatas.append(key, formData[key]);
        })


        axios.post(url, formData, { withCredentials: true }).then((response) => {
            
            const {error, success} = response.data;

            if (error.msg === 'not successful'){
                if (error.value.email === 'All fields required' || error.password === 'All fields required'){
                    setError("All fields required");
                    setErrorContainer("error-container active");
                }

                if (error.value.email === 'Invalid email address'){
                    setError("Invalid email address");
                    setErrorContainer("error-container active");
                }else{
                    if (error.value.email === "Email does not exist. Sign up"){
                        setError("Email does not exist. Sign up");
                        setErrorContainer("error-container active");
                    }
                }

                if (error.password === 'Wrong password'){
                    setError("Wrong password");
                    setErrorContainer("error-container active");
                }
            }

            if (success.msg === 'successful'){
                setError("");
                setErrorContainer("error-container");

                sessionStorage.setItem('session', success.session);

                let sessionStored = sessionStorage.getItem('session');

                if (sessionStored === ''){
                    navigate("/sign-in"); 
                }else{
                    navigate("/dashboard"); 
                }
            }

        }).catch(error => error);
        
    }

    return ( 
        <section id="sign-up">
            <div className="sign-up">
                <form action="#" className="signup-form">
                    <div className="form-header">
                        <h1>Sign In</h1>
                    </div>
                    <div className={errorContainer}>
                        <div className="error">{ error }</div>
                    </div>
                    <div className="form-content">
                        <div className="details">
                            <label htmlFor="email">Email</label>
                            <input type="text" name="email" className="detail" value={formData.email} onChange={handleChanged} id="email" placeholder="e.g. name@gmail.com" />
                        </div>
                        <div className="details">
                            <label htmlFor="password">Password</label>
                            <input type="password" name="password" className="detail" value={formData.password} onChange={handleChanged} id="password" placeholder="Chuku%12kd" />
                        </div>
                    </div>
                    <div className="submit-btn-container">
                        <input type="submit" className="submit-btn" onClick={btnClicked} value="Login"/>
                    </div>
                    <div className="already-container">
                        <span>Don&apos;t have an account?</span> <Link to="/sign-up">Sign Up</Link>
                    </div>
                </form>
            </div>
        </section>
     );
}
 
export default Signin;