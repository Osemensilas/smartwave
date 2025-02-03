import logo from "../assets/imgs/SmartVTU.png";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Top = () => {

    let browserSession = sessionStorage.getItem("session");

    const session = { userSession: browserSession };
    const navigate = useNavigate();

    const logoutSession = async () => {
        try {
            const response = await axios.post("http://localhost/backends/waves/logout.php",
            session,
            {
                headers: {
                    "Content-Type": "application/json", // Inform PHP that the data is in JSON format
                },
                withCredentials: true,
            }
        );   
        if (response.data === 'logged out'){
            sessionStorage.setItem('session', '');

            let browserSession = sessionStorage.getItem("session");

            if (browserSession === ''){
                navigate('/home');
            }
        }
        } catch (err) {
            console.log(err);
        }
    };

    
    const logoutClicked = (e) => {
        e.preventDefault();
        if (browserSession){
            logoutSession(); 
        }   
    };


    return ( 
       <div className="header-right">
            <div className="header-content">
            <div className="header-logo-container">
                <img src={logo} alt="" className="header-logo" />
            </div>
            <button type="submit" className="logout-btn" onClick={logoutClicked}>
                <i className="fa fa-power-off"></i>
                <p>Logout</p>
            </button>
            </div>
        </div>
     );
}
 
export default Top;