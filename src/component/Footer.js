import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { AuthContext } from "./AuthContext";
import "bootstrap/dist/css/bootstrap.css";

class Footer extends React.Component {
  static contextType = AuthContext;

  render() {
    const { authenticated } = this.context;

    return (
      <footer className="text-center container-fluid text-white bg-black">
        <section>
          <div className="row text-center d-flex justify-content-center pt-5">
            <div className="col-md-2">
              <h6 className="text-uppercase font-weight-bold">
                <Link to="/all_users" className="text-white nav-link">
                  See Neighbors
                </Link>
              </h6>
            </div>
            {authenticated ? (
            <div className="col-md-2">
              <h6 className="text-uppercase font-weight-bold">
                <Link to="/add-store" className="text-white nav-link">
                  Add a Store
                </Link>
              </h6>
            </div>
            ) : (
            <div className="col-md-2">
              <h6 className="text-uppercase font-weight-bold">
                <Link to="/sign_up" className="text-white nav-link">
                  Add a Store
                </Link>
              </h6>
            </div>
            )}
            <div className="col-md-2">
              <h6 className="text-uppercase font-weight-bold">
                <Link to="/about" className="text-white nav-link">
                  About
                </Link>
              </h6>
            </div>
            <div className="col-md-2">
              <h6 className="text-uppercase font-weight-bold">
                <Link to="/contact" className="text-white nav-link">
                  Contact
                </Link>
              </h6>
            </div>
            <div className="col-md-2">
              <h6 className="text-uppercase font-weight-bold">
                <Link to="/terms" className="text-white nav-link">
                  Terms and Conditions
                </Link>
              </h6>
            </div>
          </div>
        </section>
        <hr className="my-5" />
        <section className="mb-5">
          <div className="row d-flex justify-content-center">
            <div className="col-lg-8">
              <p>
                Remember, Know-Your-Neighborhood is your go-to resource for all things local. 
                Stay connected with us for the latest updates, promotions, and new store additions. 
                Together, let's support and celebrate the vibrant stores in our neighborhood.
              </p>
            </div>
          </div>
        </section>
        <section className="text-center mb-5 text-white">
          <a href="https://www.facebook.com/" className="text-white me-4">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="https://www.twitter.com/" className="text-white me-4">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="https://www.google.com/" className="text-white me-4">
            <i className="fab fa-google"></i>
          </a>
          <a href="https://www.instagram.com/" className="text-white me-4">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="https://www.linkedin.com/" className="text-white me-4">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="https://www.github.com/" className="text-white me-4">
            <i className="fab fa-github"></i>
          </a>
        </section>
        <div
          className="text-center p-3"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
        >
          © 2023 Copyright: &nbsp;
          <Link className="text-white" to="">
            know-your-neighborhood.com
          </Link>
        </div>
        <Helmet>
          <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.0/css/all.min.css"
                rel="stylesheet"/>
          <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
                rel="stylesheet"/>
          <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.0/css/all.min.css"
                rel="stylesheet"/>
          <link	href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
                rel="stylesheet"/>
        </Helmet> 
      </footer>
    );
  }
}

export default Footer;
