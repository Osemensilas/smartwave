import { Link } from "react-router-dom";
import "../assets/css/signup.css";

const Signin = () => {
    return ( 
        <section id="sign-up">
            <div className="sign-up">
                <form action="#" className="signup-form">
                    <div className="form-header">
                        <h1>Sign In</h1>
                    </div>
                    <div className="form-content">
                        <div className="details">
                            <label htmlFor="email">Email</label>
                            <input type="text" className="detail" id="email" placeholder="e.g. name@gmail.com" />
                            <div className="error"></div>
                        </div>
                        <div className="details">
                            <label htmlFor="password">Password</label>
                            <input type="password" className="detail" id="password" placeholder="Chuku%12kd" />
                            <div className="error"></div>
                        </div>
                    </div>
                    <div className="submit-btn-container">
                        <input type="submit" className="submit-btn" value="Login"/>
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