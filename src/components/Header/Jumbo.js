import logoText from './logo/logoText.svg';
import Avatar from './Avatar'
import React from "react";
import './Jumbo.css'

const Jumbo = ({user}) => {
    return (
      <div className="jumbotron-fluid jumbotron container-fluid pt-5">
          <div className="row pt-md-3 pt-lg-5"></div>
          <div className="row pt-sm-3 pt-md-5">
              <div className="col greeting">
                  <h1>Hello {user.firstName}!</h1>
              </div>
              <div className="col col-md-6 col-lg-4 col-xl-3 tagline">
                  <h5 className="pt-3 pl-5">Ready to put down some roots?</h5>
              </div>
          </div>
      </div>
    )
}

export default Jumbo;