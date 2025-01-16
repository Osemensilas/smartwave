import "../assets/css/service.css";

const Services = () => {
    return ( 
        <section id="services">
            <div className="services-header">
                <h2>Our Services</h2>
            </div>
            <div className="services">
                <div className="service-card">
                    <div className="service-card-top">
                        <img src="assets/imgs/phone-call.png" alt="" className="service-card-img" />
                    </div>
                    <div className="service-card-bottom">
                        <h3>Airtime TopUp</h3>
                    </div>
                </div>
                <div className="service-card">
                    <div className="service-card-top">
                        <img src="assets/imgs/signal.png" alt="" className="service-card-img" />
                    </div>
                    <div className="service-card-bottom">
                        <h3>Data Subscription</h3>
                    </div>
                </div>
                <div className="service-card">
                    <div className="service-card-top">
                        <img src="assets/imgs/television.png" alt="" className="service-card-img" />
                    </div>
                    <div className="service-card-bottom">
                        <h3>Cable TV Subscription</h3>
                    </div>
                </div>
                <div className="service-card">
                    <div className="service-card-top">
                        <img src="assets/imgs/flash.png" alt="" className="service-card-img" />
                    </div>
                    <div className="service-card-bottom">
                        <h3>Electricity Recharge</h3>
                    </div>
                </div>
            </div>
        </section>
     );
}
 
export default Services;