import { Link } from "react-router-dom";
import heroImg from "../assets/imgs/18147.jpg";
import "../assets/css/hero.css";

const Hero = () => {
    return ( 
        <section id="hero">
            <img src={heroImg} alt="" className="advert-img" />
            <div className="hero">
                <div className="hero-content">
                    <div className="advert-container">
                        <h1>Join SMARTWAVE</h1>
                        <h2>The Simpler, Smarter, and Safer way to buy Airtime, Data, pay tv subscription, and pay Utility bills online</h2>
                        <div className="hero-cta-container">
                            <Link to="/sign-up" className="hero-cta">Sign Up</Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
     );
}
 
export default Hero;