import FacebookLogin from 'react-facebook-login';
import React, { Component } from 'react';
import { AuthContext } from './AuthContext';
import { Link } from 'react-router-dom';
import jwtDecode from 'jwt-decode';
import axios from 'axios';

class Login extends Component {
  static contextType = AuthContext;

  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      user: {},
      fbname: ''
    };
  }

  // FACEBOOK LOGIN
  facebookLogin = (response) => {
    if (response.status !== 'unknown') {
      const { name } = response;
      this.setState({ fbname: name });
      localStorage.setItem('auth', JSON.stringify({ fbname: name }));
      window.location.href = "/";
      console.log(response);
    } else {
        console.log('Login failed'); 
        console.log(response);
    }
    console.log(response);
  };

  // NORMAL LOGIN
  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleLogin = async (event) => {
    event.preventDefault();
    const { email, password } = this.state; 

    try {
      const response = await axios.post("http://localhost:9090/sign_in", { email, password });
        console.log("Response: ");
        console.log(response);
      
        if (response.data === "You have successfully logged in") {
        // Update the user data in the context
        const { setAuth } = this.context;
        setAuth({ email: email }); // Update with the actual user data
        console.log("Email", email);
        localStorage.setItem('auth', JSON.stringify({ email: email }));
        console.log(response.data);
        window.location.href = "/";
      } else {
        // window.location.href = "/sign_up";
        alert("Login failed! Please try again.");
        console.log(response.data); 
        console.log("Login failed.");
      }
    } catch (error) {
      console.log("Login error: ", error);
    }
  };

  // GOOGLE LOGIN
  handleCallbackResponse(response) {
    console.log("Encoded JWT ID token: ");
    const userObject = jwtDecode(response.credential);
    console.log(userObject);
    this.setState({ user: userObject });
    localStorage.setItem('auth', JSON.stringify({ username: userObject.name }));
    document.getElementById("signInDiv").hidden = true;
    window.location.href = "/"; 
  }

  handleSignOut(event) {
    this.setState({ user: {} });
    document.getElementById("signInDiv").hidden = false;
  }

  componentDidMount() {
    /* global google */
    google.accounts.id.initialize({
      client_id: "257059691336-nfsqjpsfq9tqqeub1pv3scdavkthk0fb.apps.googleusercontent.com",
      callback: this.handleCallbackResponse.bind(this)
    });

    google.accounts.id.renderButton(
      document.getElementById("signInDiv"),
      { theme: "filled_white", size: "large",　logo_alignment: "left", text: "signin_with", locale: "en_US"}
    );

    console.log(this.state.user.picture);
    console.log(this.state.user.name);
  }

  // Render the page
  render() {
    const { email, password } = this.state;

    return (  
        <div className="container-fluid h-100">
        <div className="card container-fluid col-sm-5 box p-0 rounded-4"   
            style={{ marginTop: '200px', marginBottom: '300px'}}>
          <div className="card-body p-5">
          <h6 className="text-center mb-3 mt-2">— SIGN IN WITH —</h6>
            <div className="row mx-auto d-flex py-3 px-2 justify-content-center text-center">
              <div className="row d-flex justify-content-center">
              <div className="col-4 mb-2 px-0 bg-facebook rounded border-0">
                <div className='p-0 d-flex align-items-center'>
                  <i className="fab fa-facebook p-2 ms-2 text-white fs-4 rounded"></i>
                  <FacebookLogin
                      appId="1277479926205741"
                      autoLoad={false}
                      fields="name,email,picture"
                      callback={this.facebookLogin} 
                  /> 
                </div>
              </div>
              <div className="col-5 rounded cursor-pointer">
                  <div id="signInDiv" className='mx-auto d-flex justify-content-center'><div></div></div>
              </div>
              </div>
            </div>
            <div>
              <div className="row">
                <div className="col-5"><hr/></div>
                <div className="col-2"><h6 className="text-center mx-auto d-block mb-0">SIGN IN</h6></div>
                <div className="col-5"><hr/></div>
              </div>
            </div>
            <form className="was-validated" onSubmit={this.handleLogin}>
            <div className="row">
              <div className='col-1 d-flex justify-content-end pe-0'>
                <i className="fas fa-envelope fa-lg fa-fw fs-5 mt-3 text-green"></i></div>
              <div className="col-10 mb-3 mt-1 p-0 ms-1">
                <input type="email" className="form-control" placeholder="Enter email" 
                  required name="email" value={email} 
                  onChange={this.handleInputChange}/>
                <div className="invalid-feedback text-end">Please enter your email</div>
              </div>
            </div>
            <div className="row mb-3">
              <div className='col-1 d-flex justify-content-end pe-0'>
                <i className="fas fa-lock fa-lg fa-fw fs-5 mt-3 text-green"></i></div>
                <div className="col-10 mb-3 mt-1 p-0 ms-1">
                    <input type="password" className="form-control" placeholder="Enter password" 
                      required name="password" value={password}
                      onChange={this.handleInputChange}/>
                    <div className="invalid-feedback text-end">Please enter your password</div>
                </div>
              </div>
              <div className="mx-auto text-center mt-3">
                <input type="submit" value="Sign In"
                        className="btn btn-dark p-2 px-5 small text-center" />
                <hr />
                <div><span>Don't have an account? <Link to="/register" className='text-success'>Register</Link></span></div>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
