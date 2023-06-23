import axios from "axios";
import { Component } from "react";
import { Link } from "react-router-dom";
 

class Register extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      address: "",
      password: "",
      role: "USER",
    };
  }

  nameChange = (event) => {
    this.setState({
      name: event.target.value,
    });
  };

  addressChange = (event) => {
    this.setState({
      address: event.target.value,
    });
  };

  emailChange = (event) => {
    this.setState({
      email: event.target.value,
    });
  };

  passwordChange = (event) => {
    this.setState({
      password: event.target.value,
    });
  };

  registerUser = (event) => {
    event.preventDefault();
    axios
      .post("register", this.state)
      .then((response) => {
        console.log(response.data);
        window.location.href = "/thankyou";
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    return (
      <>
      <div className="container-fluid h-100">
        <div className="card rounded-4 container-fluid col-sm-5 box p-0" 
            style={{ marginTop: '200px', marginBottom: '300px'}}>
          <div className="card-body pb-3 p-0"> 
            <div className="registration rounded-4 rounded-bottom" style={{ marginBottom: '30px'}}>
            </div>
            <div className="row mb-3 px-5">
              <div className="col-5"><hr/></div>
              <div className="col-2 mx-auto">
                <h6 className="text-center mx-auto d-block mb-0 fs-5">REGISTER</h6>
              </div>
              <div className="col-5"><hr/></div>
            </div>
            <form onSubmit={this.registerUser} className="was-validated px-5">
              <div className="row">
                <div className="d-flex col-6 px-0">
                <div className='col-2 d-flex justify-content-end pe-0'>
                  <i className="fas fa-user fa-lg fa-fw fs-5 mt-3 text-green"></i></div>
                <div className="col-10 mb-3 mt-1 p-1">
                  <input type="text" className="form-control" placeholder="Name" 
                    required value={this.state.name}
                    onChange={this.nameChange} />
                  <div className="invalid-feedback text-end">Please enter your name</div>
                </div>
                </div> 
                <div className="d-flex col-6 px-0">
                <div className='col-1 d-flex justify-content-end p-0'>
                  <i className="fas fa-address-card fa-lg fa-fw fs-5 mt-3 text-green"></i></div>
                <div className="col-10 ps-1 mb-3 mt-1 pe-4 pt-1 pb-1">
                  <input type="text" className="form-control" placeholder="Address" 
                    required value={this.state.address}
                    onChange={this.addressChange} />
                  <div className="invalid-feedback text-end">Please enter your address</div>
                </div>
                </div>
              </div>
              <div className="row">
                <div className='col-1 d-flex justify-content-end pe-0'>
                  <i className="fas fa-envelope fa-lg fa-fw fs-5 mt-3 text-green"></i></div>
                <div className="col-10 mb-3 mt-1 p-0 ms-1">
                  <input type="email" className="form-control" placeholder="Email" 
                    required value={this.state.email}
                    onChange={this.emailChange} />
                  <div className="invalid-feedback text-end">Please enter your email</div>
                </div>
              </div>
              <div className="row mb-3">
              <div className='col-1 d-flex justify-content-end pe-0'>
                <i className="fas fa-lock fa-lg fa-fw fs-5 mt-3 text-green"></i></div>
                <div className="col-10 mb-3 mt-1 p-0 ms-1">
                  <input type="password" className="form-control" placeholder="Password" 
                    required value={this.state.password}
                    onChange={this.passwordChange} />
                  <div className="invalid-feedback text-end">Please enter your password</div>
                </div>
              </div>
              <div className="mx-auto text-center mt-3">
                <input type="submit" value="Register"
                        className="btn btn-dark p-2 px-5 small text-center" /> 
                <hr />
                <div><span>Aleady a member? <Link to="/sign_up" className='text-success'>Sign in</Link></span></div>
              </div>
            </form>
          </div>
        </div>
      </div>
      </>
    );
  }
}
  
  export default Register;