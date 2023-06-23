import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";

class AllStore extends Component {
  render() {
    const data = this.props.alldata;
    const storeHeader = (
      <thead className="bg-dark text-white">
        <tr>
          <th scope="col">#</th>
          <th scope="col">Store Name</th>
          <th scope="col">Locality</th>
          <th scope="col">Username</th>
          <th scope="col">Phone Number</th>
        </tr>
      </thead>
    );
    const storeData = data.map((s, index) => (
      <tr key={index}>
        <td>{s.id}</td>
        <td>{s.store_name}</td>
        <td>{s.locality}</td>
        <td>{s.username}</td>
        <td>{s.phone_number}</td>
      </tr>
    ));

    return (
      <>
        <div className="page-section container mb-5" style={{ marginTop: "150px" }}>
        <h2 className="page-section-heading text-center text-uppercase">Neighborhood Stores</h2>
        <div className="divider-custom-terms divider-light-terms mt-3">
            <div className="divider-custom-line-terms"></div>
            <div className="divider-custom-icon-terms"><i className="fa fa-building" aria-hidden="true"></i></div>
            <div className="divider-custom-line-terms"></div>
        </div>
          <div className="row mb-5">
            <div className="col-12 mb-5 table-responsive p-0">
              <table className="table table-hover table-bordered table-striped">
                {storeHeader}
                <tbody>{storeData}</tbody>
              </table>
            </div>
          </div>
        </div>
      </>
    );
  }
}


export default AllStore;
