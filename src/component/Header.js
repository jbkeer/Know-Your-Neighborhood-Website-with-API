import React, { useContext, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Helmet } from "react-helmet";
import storeImg from '../assets/images/store.svg';
import { AuthContext } from "./AuthContext";

const Header = () => {
  const { authenticated, setAuth } = useContext(AuthContext);
  const location = useLocation();
  const [navBg, setNavBg] = useState({});
  console.log("Authentication", authenticated);

  useEffect(() => {
    const bg = location.pathname !== "/" ? { backgroundColor: "rgba(0, 0, 0)" } : {};
    setNavBg(bg);
  }, [location]);

  const handleLogout = () => {
    setAuth(null); // Clear the authentication data
    localStorage.removeItem('auth'); // Remove the 'auth' key from localStorage
    window.location.href = '/';
  };
  
  return (
        <>
        <nav className="navbar navbar-expand-lg text-uppercase fixed-top" id="mainNav" style={navBg} >
        <div className="container">
            <Link className="navbar-brand d-flex align-items-center" to="/">
                <img src={storeImg} alt="Know Your Neighborhood Logo" className="me-2"
                style={{ width: '35px', height: '35px' }}></img> Know Your Neighborhood</Link>
            <button className="navbar-toggler text-uppercase font-weight-bold bg-white text-black rounded" 
                type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" 
                aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                <i className="fa fa-bars" aria-hidden="true"></i>
            </button>
            <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav ms-auto">
                { authenticated ? (
                <>
                <li className="nav-item mx-0 mx-lg-1">
                    <Link to="/" className="nav-link py-3 px-0 px-lg-3 rounded">
                    <i className="fa fa-home" aria-hidden="true"></i> Home</Link></li>
                <li className="nav-item mx-0 mx-lg-1">
                    <Link to="/add-store" className="nav-link py-3 px-0 px-lg-3 rounded">
                    <i className="fa fa-plus" aria-hidden="true"></i> Add a store</Link></li>
                <li className="nav-item mx-0 mx-lg-1">
                    <Link to="/all_stores" className="nav-link py-3 px-0 px-lg-3 rounded">
                    <i className="fa fa-server" aria-hidden="true"></i> Stores</Link></li>
                <li className="nav-item mx-0 mx-lg-1">
                    <Link to="/all_users" className="nav-link py-3 px-0 px-lg-3 rounded">
                    <i className="fa fa-users" aria-hidden="true"></i> Neighbors</Link></li>
                <li className="nav-item mx-0 mx-lg-1">
                    <button onClick={handleLogout} 
                    className="nav-link btn-danger border-0 mt-2 px-0 px-lg-3 rounded">Logout</button></li>
                </>
                ) : (
                <>
                <li className="nav-item mx-0 mx-lg-1">
                    <Link to="/" className="nav-link py-3 px-0 px-lg-3 rounded">
                    <i className="fa fa-home" aria-hidden="true"></i> Home</Link></li>
                <li className="nav-item mx-0 mx-lg-1">
                    <Link to="/register" className="nav-link py-3 px-0 px-lg-3 rounded">
                    <i className="fa fa-user-plus" aria-hidden="true"></i> Register</Link></li>
                <li className="nav-item mx-0 mx-lg-1">
                    <Link to="/sign_up" className="nav-link py-3 px-0 px-lg-3 rounded">
                    <i className="fa fa-user-plus" aria-hidden="true"></i> Login</Link></li>
                <li className="nav-item mx-0 mx-lg-1">
                    <Link to="/about" className="nav-link py-3 px-0 px-lg-3 rounded">
                    <i className="fa fa-users" aria-hidden="true"></i> About</Link></li>
                </>
                )} 
            </ul>
            </div>
        </div>
        <Helmet>
          <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.0/css/all.min.css"
                rel="stylesheet"/>
          <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
                rel="stylesheet"/>
          <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.0/css/all.min.css"
                rel="stylesheet"/>
          <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
                rel="stylesheet"/>
          <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" 
                rel="stylesheet"/>
          <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js">

          </script>
        </Helmet>
        </nav>
        </>
      );
  } 
  
  export default Header;