import "../assets/css/signup.css";
import { useState } from "react";
import { Link, useSearchParams, useNavigate } from "react-router-dom";
import axios from "axios";

const Signup = () => {

    const [searchParams] = useSearchParams();

    let referedBy = searchParams.get('ref') || "";

    const [formData, setFormData] = useState({
        fullname: '',
        email: '',
        phone: '',
        password1: '',
        password2: '',
        ref: '',
    });
    const [formError, setFormError] = useState('');
    const [errorContainer, setErrorContainer] = useState('');
    const navigate = useNavigate();

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData({...formData, [name]: value});
    }

    const formSubmitted = (e) => {
        e.preventDefault();
    }

    const handleClicked = () => {
        
        const url = "http://localhost/backends/waves/signup.php";

        const formDatas = new FormData();

        Object.keys(formData).forEach((key) => {
            formDatas.append(key, formData[key]);
        });
        formDatas.append('ref', referedBy);

        axios.post(url, formData).then((response) => {
            
            const {error, success} = response.data;

            if (error.msg === 'not successful'){

                if (error.value.fullname === 'All fields required' || error.value.email === 'All fields required'
                    || error.value.password1 === 'All fields required' || error.value.password2 === 'All fields required'
                    || error.value.phone === 'All fields required'
                ){
                    setFormError('All fields required');
                    setErrorContainer('error-container active');
                }

                if (error.value.fullname === 'Name format not valid'){
                    setFormError('Name format not valid');
                    setErrorContainer('error-container active');
                }

                if (error.value.email === 'Invalid email address'){
                    setFormError('Invalid email address');
                    setErrorContainer('error-container active');
                }

                if (error.value.email === 'Email already exist'){
                    setFormError('Email already exist');
                    setErrorContainer('error-container active');
                }

                if (error.value.phone === 'Invalid phone number'){
                    setFormError('Invalid phone number');
                    setErrorContainer('error-container active');
                }

                if(error.value.phone === 'Phone number already exist'){
                    setFormError('Phone number already exist');
                    setErrorContainer('error-container active');
                }

                if (error.value.password1 === 'Password should be atleast 8 characters'){
                    setFormError('Password should be atleast 8 characters');
                    setErrorContainer('error-container active');
                }

                if (error.value.password1 === 'password must include a lowercase letter'){
                    setFormError('password must include a lowercase letter');
                    setErrorContainer('error-container active');
                }

                if (error.value.password1 === 'password must include an uppercase letter'){
                    setFormError('password must include an uppercase letter');
                    setErrorContainer('error-container active');
                }

                if (error.value.password1 === 'password must include a number'){
                    setFormError('password must include a number');
                    setErrorContainer('error-container active');
                }

                if (error.value.password1 === 'password must include one of !@#$%^&*_-'){
                    setFormError('password must include one of !@#$%^&*_-');
                    setErrorContainer('error-container active');
                }

                if (error.value.password2 === "Passwords don't match"){
                    setFormError("Passwords don't match");
                    setErrorContainer('error-container active');
                }
            }

            if (success.msg === 'successful'){
                setFormError("");
                setErrorContainer('error-container');

                sessionStorage.setItem('session', success.value);

                let sessionStored = sessionStorage.getItem('session');

                if (sessionStored === ''){
                    navigate("/sign-in"); 
                }else{
                    navigate("/dashboard"); 
                }
            }
        }).catch(error => error)
    }

    return ( 
        <section id="sign-up">
            <div className="sign-up">
                <form action="#" className="signup-form" onSubmit={formSubmitted}>
                    <div className="form-header">
                        <h1>Sign Up</h1>
                    </div>
                    <div className={errorContainer}>
                        <div className="error">{formError}</div>
                    </div>
                    <div className="form-content">
                        <div className="details">
                            <label htmlFor="fullname">Name</label>
                            <input type="text" className="detail" name="fullname" value={formData.fullname} onChange={handleChange} id="fullname" placeholder="e.g. Chukwudi Audu Tobi" />
                        </div>
                        <div className="details">
                            <label htmlFor="email">Email</label>
                            <input type="text" className="detail" name="email" value={formData.email} onChange={handleChange} id="email" placeholder="e.g. name@gmail.com" />
                        </div>
                        <div className="details">
                            <label htmlFor="phone">Phone Number</label>
                            <input type="text" className="detail" name="phone" value={formData.phone} onChange={handleChange} id="phone" placeholder="e.g. 08077223335" />
                        </div>
                        <div className="details">
                            <label htmlFor="password">Password</label>
                            <input type="password" className="detail" name="password1" value={formData.password1} onChange={handleChange} id="password" placeholder="e.g. Chuku%12kd" />
                        </div>
                        <div className="details">
                            <label htmlFor="confirm-password">Confirm Password</label>
                            <input type="password" className="detail" name="password2" value={formData.password2} onChange={handleChange} id="confirm-password" placeholder="e.g. Chuku%12kd" />
                        </div>
                    </div>
                    <div className="submit-btn-container">
                        <input type="text" name="ref" value={referedBy} onChange={(e) => {e.target.value}} hidden/>
                        <input type="submit" name="submit" className="submit-btn" onClick={handleClicked} value="Register" />
                    </div>
                    <div className="already-container">
                        Already have an account? <Link to="/sign-in">Sign In</Link>
                    </div>
                </form>
            </div>
        </section>
     );
}
 
export default Signup;