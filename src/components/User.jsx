import maleImg from "../assets/imgs/man.png";

const User = () => {
    return ( 
        <div className="user-container">
            <div className="user-left">
            <div className="user-img-container">
                <img src={maleImg} alt="" className="user-img" />
            </div>
            </div>
            <div className="user-right">
            <div className="user-right-top">
                <h3> Osemensilas </h3>
            </div>
            <div className="user-right-bottom">
                <p> Balance: ₦125 </p>
            </div>
            </div>
        </div>
     );
}
 
export default User;