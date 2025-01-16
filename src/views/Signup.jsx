import { Link } from "react-router-dom";
import "../assets/css/signup.css";

const Signup = () => {
    return ( 
        <section id="sign-up">
            <div className="sign-up">
                <form action="#" className="signup-form">
                    <div className="form-header">
                        <h1>Sign Up</h1>
                    </div>
                    <div className="form-content">
                        <div className="details">
                            <label htmlFor="fullname">Name</label>
                            <input type="text" className="detail" id="fullname" placeholder="e.g. Chukwudi Audu Tobi" />
                            <div className="error"></div>
                        </div>
                        <div className="details">
                            <label htmlFor="email">Email</label>
                            <input type="text" className="detail" id="email" placeholder="e.g. name@gmail.com" />
                            <div className="error"></div>
                        </div>
                        <div className="details">
                            <label htmlFor="phone">Phone Number</label>
                            <input type="text" className="detail" id="phone" placeholder="e.g. 08077223335" />
                            <div className="error"></div>
                        </div>
                        <div className="details">
                            <label htmlFor="password">Password</label>
                            <input type="password" className="detail" id="password" placeholder="e.g. Chuku%12kd" />
                            <div className="error"></div>
                        </div>
                        <div className="details">
                            <label htmlFor="confirm-password">Cofirm Password</label>
                            <input type="password" className="detail" id="confirm-password" placeholder="e.g. Chuku%12kd" />
                            <div className="error"></div>
                        </div>
                    </div>
                    <div className="submit-btn-container">
                        <input type="submit" className="submit-btn" value="Register" />
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