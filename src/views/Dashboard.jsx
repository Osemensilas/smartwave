import "../assets/css/top.css";
import "../assets/css/dashboard.css";
import "../assets/css/purchase.css";
import "../assets/css/page.css";
import "../assets/css/main.css";
import Dash from "../components/Dash";
import Mainleft from "../components/Mainleft";
import Top from "../components/Top";


const Dashboard = () => {
    return ( 
       <div className="main">
            <Mainleft/>
            <div className="main-right">
                <Top/>
                <div className="main-right-content">
                    <Dash/>
                </div>
            </div>
        </div>
     );
}
 
export default Dashboard;