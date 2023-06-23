import { Component } from "react";
import { Link } from "react-router-dom";
 

class ThankYou extends Component {

  render() {
    return (
      <>
      <div className="container-fluid h-100">
        <div className="card rounded-4 container-fluid col-sm-5 box p-0" 
            style={{ marginTop: '200px', marginBottom: '300px'}}>
          <div className="card-body pb-3 p-0 rounded-4"> 
            <div className="registration-thankyou rounded-4 rounded-bottom">
            </div>
            <div className="row mb-3 px-2">
                <h6 className="text-center mx-auto d-block mb-5 mt-5 display-6">You have successfully created your account!</h6>
            </div>
            <div className="d-flex justify-content-center mt-2">
            <Link to="/sign_up" className='btn btn-outline-dark small text-center'>Continue to Sign in</Link>
            </div>
          </div>
        </div>
      </div>
      </>
    );
  }
}
  
  export default ThankYou;