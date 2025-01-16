import Header from "../components/Header";
import Hero from "./Hero";
import Services from "../components/Services";
import Footer from "./Footer";
import "../assets/css/home.css";




const Home = () => {
    return ( 
        <div className="home-main-container">
            <Header/>
            <Hero />
            <Services/>
            <section id="prices">
                <div className="prices-header">
                    <h2>Our Prices</h2>
                </div>
                <div className="prices">
                    <div className="prices-table">
                        <div className="prices-table-header">
                            <div className="header-service-column">
                                <h3>Service</h3>
                            </div>
                            <div className="header-basic-column">
                                <h3>Basic</h3>
                            </div>
                            <div className="header-reseller-column">
                                <h3>Reseller</h3>
                            </div>
                        </div>
                        <div className="description-row">
                            <h3>Airtime(MTN)</h3>
                        </div>
                        <div className="price-table-content">
                            <div className="table-item-row">
                                <div className="table-content-service">
                                    <h3>MTN Airtime</h3>
                                </div>
                                <div className="table-basic-service-price">
                                    <p>0.00% discount</p>
                                </div>
                                <div className="table-reseller-service-price">
                                    <p>0.05% discount</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section id="whatsapp">
                <a href="https://wa.me/2348168318983" target="_blank" className="whatsapp">
                    <div className="whatsapp-container">
                        <p>WhatsApp Us</p>
                        <i className="fa fa-whatsapp"></i>
                    </div>
                </a>
            </section>
            <Footer/>
        </div>
     );
}
 
export default Home;