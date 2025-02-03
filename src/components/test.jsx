import "../assets/css/signup.css";
import { useState } from "react";
import axios from "axios";
import { useSearchParams, Link } from "react-router-dom";

const Signup = () => {

    const url = "http://localhost/backends/waves/airtime.php";

            const formDatas = new FormData();

            Object.keys(formData).forEach((key) => {
                formDatas.append(key, formData[key]);
            })

            axios.post(url, formData).then((response) => {
                console.log(response.data);
            }).catch(err => err)

    return ( 
        <section id="sign-up">
            <div className="sign-up">
                <form action="#" className="signup-form">
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
                            <input type="password" className="detail" name="password" value={formData.password} onChange={handleChange} id="password" placeholder="e.g. Chuku%12kd" />
                        </div>
                        <div className="details">
                            <label htmlFor="confirm-password">Confirm Password</label>
                            <input type="password" className="detail" name="password2" value={formData.password2} onChange={handleChange} id="confirm-password" placeholder="e.g. Chuku%12kd" />
                        </div>
                    </div>
                    <div className="submit-btn-container">
                        <input type="text" name="ref" value={formData.ref} onChange={handleChange} hidden/>
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