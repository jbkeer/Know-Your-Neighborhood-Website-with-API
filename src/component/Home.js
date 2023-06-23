import '../App.css';
import { Link } from 'react-router-dom';
import { Component } from "react";
import { AuthContext } from "./AuthContext";
import 'bootstrap/dist/css/bootstrap.css';
import homeStore from "../assets/images/home-stores.png"

class Home extends Component {
  static contextType = AuthContext;

    constructor(props) {
      super(props);
      this.state = {
        username: null,
        fbname: null
      };
    }
  
    componentDidMount() {
      const authData = localStorage.getItem('auth');
      if (authData) {
        const { username } = JSON.parse(authData);
        const { fbname } = JSON.parse(authData);
        console.log(username);
        this.setState({ username });
        this.setState({ fbname });
      }
    }
  
    render() {
      const authData = localStorage.getItem('auth');
    //   const { authenticated } = this.context;
      const { email } = authData ? JSON.parse(authData) : { email: null };
      const { username } = this.state;
      const { fbname } = this.state;
      const store = this.props.alldata;
      const storeData = store.map((s, index) => (
      <div className="col-lg-4 mb-4" key={index}>
      <div className='card registration-store text-white rounded-4'>
      <div className="card-body text-center p-4" style={{ backgroundColor: '#000000af'}}>
        <img className="card-img-top w-100 mt-3 mb-3" src={homeStore} 
             alt="stores" style={{ minWidth: '50px', maxWidth: '120px' }}/>
        <h4 className="card-title text-warning">{s.store_name}</h4>
        <h4 className="text-danger mb-3">
            <i className="fas fa-map-marker text-danger"></i> Located in {s.locality}</h4>
        <h6>{s.username}&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;{s.phone_number}</h6>
      </div>
      </div>
      </div>
      ));  
      return (
        <>
        <header className="masthead">
        <div className="container position-relative">
        <div className="row justify-content-center"> 
        <div className="col-xl-8">
            <div className="text-center text-white">
            <h1 className="mb-0 pt-5">Discover Your Neighborhood's Hidden Gems</h1>
            <h5 className="mb-0 mt-5 text-warning">Welcome to the Neighborhood <br/>{email}{username}{fbname}</h5> 
            </div>
        </div>
        </div>
        </div>
        </header>
        <section className="features-icons text-center pt-5 pb-5">
            <div className="container">
                <div className="row">
                    <Link to="/register" className="col-lg-4 home-hover pt-5 pb-5" style={{ textDecoration: 'none', color: 'inherit' }}>
                    <div>
                        <div className="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
                            <div className="features-icons-icon d-flex"><i className="fa fa-user-plus m-auto" aria-hidden="true"></i></div>
                            <h3>Join Us</h3>
                            <p className="lead mb-0">Stay connected to your neighborhood's shopping scene</p>
                        </div>
                    </div></Link>
                    { }
                    {/* {authenticated ? ( */}
                    <Link to="/add-store" className="col-lg-4 home-hover pt-5 pb-5" style={{ textDecoration: 'none', color: 'inherit' }}>
                    <div>
                        <div className="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
                            <div className="features-icons-icon d-flex"><i className="fa fa-shopping-cart m-auto" aria-hidden="true"></i></div>
                            <h3>Add your Store</h3>
                            <p className="lead mb-0">Uncover the secrets of your store for the neighborhood</p>
                        </div>
                    </div></Link>
                    {/* // ) : (
                    // <Link to="/sign_up" className="col-lg-4 home-hover pt-5 pb-5" style={{ textDecoration: 'none', color: 'inherit' }}>
                    // <div>
                    //     <div className="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
                    //         <div className="features-icons-icon d-flex"><i className="fa fa-shopping-cart m-auto" aria-hidden="true"></i></div>
                    //         <h3>Add your Store</h3>
                    //         <p className="lead mb-0">Uncover the secrets of your store for the neighborhood</p>
                    //     </div>
                    // </div></Link>
                    // )} */}
                    <a href="#stores" className="col-lg-4 home-hover pt-5 pb-5" style={{ textDecoration: 'none', color: 'inherit' }}>
                    <div>
                        <div className="features-icons-item mx-auto mb-0 mb-lg-3">
                            <div className="features-icons-icon d-flex"><i className="fa fa-window-maximize m-auto" aria-hidden="true"></i></div>  
                            <h3>View all Stores</h3>
                            <p className="lead mb-0">Find everything you need, right in your neighborhood</p>
                        </div>
                    </div></a>
                </div>
            </div>
        </section>
        <div className='container-fluid'>
        <div className="row justify-content-center mb-5" id="stores">
            {storeData}
        </div></div> <br></br><br></br><br></br>
        {/* <section className="page-section bg-black text-white mb-0" id="about">
            <div className="container">
                <h2 className="page-section-heading text-center text-uppercase text-white">About</h2>
                <div className="divider-custom divider-light">
                    <div className="divider-custom-line"></div>
                    <div className="divider-custom-icon"><i className="fas fa-users"></i></div>
                    <div className="divider-custom-line"></div>
                </div>
                <div className="row">
                    <div className="col-lg-4 pt-5 pb-5 ms-auto">
                      <p className="lead text-justify">Our mission is to make your neighborhood shopping more convenient 
                      and enjoyable. Whether you're a local resident or a visitor, our application will help you 
                      find the stores you need.</p></div>
                    <div className="col-lg-4 pt-5 pb-5 me-auto">
                      <p className="lead text-justify">With our extensive list of stores, you can easily explore and 
                      discover new places to shop, dine, or hang out. We strive to provide accurate and up-to-date 
                      information about each store.</p></div>
                </div>
                <div className="text-center mt-4">
                </div>
            </div>
        </section> */}
        <section className="signup-section text-white" id="signup">
            <div className="container px-4 px-lg-5">
                <div className="row gx-4 gx-lg-5">
                    <div className="col-md-10 col-lg-8 mx-auto text-center sign-up">
                        <i className="far fa-paper-plane fa-2x mb-2"></i>
                        <h2 className="fw-bold mb-5">Subscribe to receive updates!</h2>
                        <form className="form-signup" id="contactForm" data-sb-form-api-token="API_TOKEN">
                            <div className="row input-group-newsletter">
                                <div className="col">
                                  <input className="form-control bg-whitish" id="emailAddress" type="email" 
                                    placeholder="Enter email address..." aria-label="Enter email address..." 
                                    data-sb-validations="required,email" /></div>
                                <div className="col-auto"><button className="btn btn-light p-3" 
                                    id="submitButton" type="submit">Notify Me!</button></div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
        {/*  Contact */}
        <section className="contact-section bg-black pb-5">
            <div className="container px-4 px-lg-5 pb-5">
                <div className="row gx-4 gx-lg-5">
                    <div className="col-md-4 mb-3 mb-md-0">
                        <div className="card py-4 h-100 bg-dark text-white">
                            <div className="card-body text-center">
                                <i className="fas fa-map-marked-alt mb-2"></i>
                                <h4 className="text-uppercase m-0">Address</h4>
                                <hr className="my-4 mx-auto" />
                                <div className="small text-white-50">Gov. M. Cuenco Ave, Cebu City, 6000 Cebu, Philippines</div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 mb-3 mb-md-0">
                        <div className="card py-4 h-100 bg-dark text-white ">
                            <div className="card-body text-center">
                                <i className="fas fa-envelope mb-2"></i>
                                <h4 className="text-uppercase m-0">Email</h4>
                                <hr className="my-4 mx-auto" />
                                <div><a className="small text-white-50" href="#!">
                                  know-your-neighborhood@kyn.com</a></div>
                            </div>
                        </div>
                    </div> 
                    <div className="col-md-4 mb-3 mb-md-0">
                        <div className="card py-4 h-100 bg-dark text-white ">
                            <div className="card-body text-center">
                                <i className="fas fa-mobile-alt mb-2"></i>
                                <h4 className="text-uppercase m-0">Phone</h4>
                                <hr className="my-4 mx-auto" />
                                <div className="small text-white-50">+8 (092) 3396-9832</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section> 
        </>
      );
    }
  }
  
  export default Home;