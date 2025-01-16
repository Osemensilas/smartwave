import { Link } from "react-router-dom";

const Purchase = () => {
    return ( 
        <div className="dashhbord-purchase">
            <div className="dashboard-purchase-container">
                <Link to="/airtime" className="dashboard-purchase-card">
                    <div className="purchase-card-top">
                        <img src="#" alt="" className="purchase-cardimg"/>
                    </div>
                    <div className="purchase-card-bottom">
                        <p>Buy Airtime</p>
                    </div>
                </Link>
                <Link to="/data" className="dashboard-purchase-card">
                    <div className="purchase-card-top">
                        <img src="#" alt="" className="purchase-cardimg"/>
                    </div>
                    <div className="purchase-card-bottom">
                        <p>Buy Data</p>
                    </div>
                </Link>
                <Link to="/cable" className="dashboard-purchase-card">
                    <div className="purchase-card-top">
                        <img src="#" alt="" className="purchase-cardimg"/>
                    </div>
                    <div className="purchase-card-bottom">
                        <p>Cable TV</p>
                    </div>
                </Link>
                <Link to="/electricity" className="dashboard-purchase-card">
                    <div className="purchase-card-top">
                        <img src="/" alt="" className="purchase-cardimg"/>
                    </div>
                    <div className="purchase-card-bottom">
                        <p>Electricity Bill</p>
                    </div>
                </Link>
            </div>
        </div>
     );
}
 
export default Purchase;