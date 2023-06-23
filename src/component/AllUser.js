import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";

class AllUser extends Component {
  render() {
    const data = this.props.alldata;
    const userHeader = (
      <thead className="bg-dark text-white">
        <tr>
          <th scope="col">#</th>
          <th scope="col">Name</th>
          <th scope="col">Address</th>
          <th scope="col">Email</th>
          <th scope="col">Role</th>
        </tr>
      </thead>
    );
    const userData = data.map((u, index) => (
      <tr key={index}>
        <td>{u.id}</td>
        <td>{u.name}</td>
        <td>{u.address}</td>
        <td>{u.email}</td>
        <td>{u.role}</td>
      </tr>
    ));

    return (
      <>
        <div className="page-section container mb-5" style={{ marginTop: "150px" }}>
        <h2 className="page-section-heading text-center text-uppercase">Registered Neighbors</h2>
        <div className="divider-custom-terms divider-light-terms mt-3">
            <div className="divider-custom-line-terms"></div>
            <div className="divider-custom-icon-terms"><i className="fa fa-server" aria-hidden="true"></i></div>
            <div className="divider-custom-line-terms"></div>
        </div>
          <div className="row mb-5">
            <div className="col-12 mb-5 table-responsive p-0">
              <table className="table table-hover table-bordered table-striped">
                {userHeader}
                <tbody>{userData}</tbody>
              </table>
            </div>
          </div>
        </div>
      </>
    );
  }
}


export default AllUser;
