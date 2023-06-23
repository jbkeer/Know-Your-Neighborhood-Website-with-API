import axios from "axios";
import { Component } from "react";
import { Link } from "react-router-dom";
 

class AddStore extends Component {
  constructor() {
    super();
    this.state = {
      store_name: "",
      locality: "",
      username: "",
      phone_number: ""
    };
  }

  state = {
    storeAdded: false
  };
  
  storeNameChange = (event) => {
    this.setState({
      store_name: event.target.value,
    });
  };

  localityChange = (event) => {
    this.setState({
      locality: event.target.value,
    });
  };

  usernameChange = (event) => {
    this.setState({
      username: event.target.value,
    });
  };

  phoneNumberChange = (event) => {
    this.setState({
      phone_number: event.target.value,
    });
  };

  addStore = (event) => {
    event.preventDefault();
    axios
      .post("add-store", this.state)
      .then((response) => {
        console.log(response.data);
        this.setState({ storeAdded: true });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    const { storeAdded } = this.state;

    return (
      <>
      <div className="container-fluid h-100">
        <div className="card rounded-4 container-fluid col-sm-5 box p-0" 
            style={{ marginTop: '200px', marginBottom: '300px'}}>
          <div className="card-body pb-3 p-0"> 
            <div className="registration-thankyou rounded-4 rounded-bottom" style={{ marginBottom: '30px'}}>
            </div>
            {storeAdded && (
                <div className="text-center p-3 alert alert-success mx-4" role="alert">
                <span>Store successfully added.{" "}
                <Link to="/all_stores" className="text-success">View all stores.</Link></span></div>
            )}
            <div className="row mb-3 px-5">
              <div className="col-4"><hr/></div>
              <div className="col-3 mx-auto">
                <h6 className="text-center mx-auto d-block mb-0 fs-5 fw-bold">ADD A STORE</h6>
              </div>
              <div className="col-4"><hr/></div>
            </div>
            <form onSubmit={this.addStore} className="was-validated px-5">
                <div className="row">
                <div className='col-1 d-flex justify-content-end pe-0'>
                  <i className="fas fa-building fa-lg fa-fw fs-5 mt-3 text-green"></i></div>
                  <div className="col-10 mb-3 mt-1 p-0 ms-1">
                  <input type="text" className="form-control" placeholder="Store Name"  
                    required value={this.state.store_name}
                    onChange={this.storeNameChange} />
                  <div className="invalid-feedback text-end">Please enter store name</div>
                </div>
                </div>
                <div className="row">
                <div className='col-1 d-flex justify-content-end p-0'>
                  <i className="fas fa-map-marker fa-lg fa-fw fs-5 mt-3 text-green"></i></div>
                  <div className="col-10 mb-3 mt-1 p-0 ms-1">
                  <input type="text" className="form-control" placeholder="Store Locality" 
                    required value={this.state.locality}
                    onChange={this.localityChange} />
                  <div className="invalid-feedback text-end">Please enter locality</div>
                </div>
              </div>
              <div className="row">
                <div className='col-1 d-flex justify-content-end pe-0'>
                  <i className="fas fa-user fa-lg fa-fw fs-5 mt-3 text-green"></i></div>
                <div className="col-10 mb-3 mt-1 p-0 ms-1">
                  <input type="text" className="form-control" placeholder="Name" 
                    required value={this.state.username}
                    onChange={this.usernameChange} />
                  <div className="invalid-feedback text-end">Please enter your name</div>
                </div>
              </div>
              <div className="row">
                <div className='col-1 d-flex justify-content-end pe-0'>
                  <i className="fas fa-phone fa-lg fa-fw fs-5 mt-3 text-green"></i></div>
                <div className="col-10 mb-3 mt-1 p-0 ms-1">
                  <input type="text" className="form-control" placeholder="Phone Number" 
                    required value={this.state.phone_number}
                    onChange={this.phoneNumberChange} />
                  <div className="invalid-feedback text-end">Please enter your number</div>
                </div>
              </div>
              <div className="mx-auto text-center mt-3">
                <input type="submit" value="Submit"
                        className="btn btn-dark p-2 px-5 small text-center" /> 
              </div>
            </form>
          </div>
        </div>
      </div>
      </>
    );
  }
}
  
  export default AddStore;