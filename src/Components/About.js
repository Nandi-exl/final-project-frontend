import React, { Component } from "react";

class About extends Component {
  render() {
    
    return (
      <section id="about">
        
            <div className="nine columns main-col">
              <h2>About Me</h2>

              <p>bio</p>
              <div className="row">
                <div className="columns contact-details">
                  <h2>Contact Details</h2>
                  <p className="address">
                    <span>name</span>
                    <br />
                    <span>
                      street
                      <br />
                      city state, zip
                    </span>
                    <br />
                    <span>phone</span>
                    <br />
                    <span>email</span>
                  </p>
                </div>
                <div className="columns download">
                  <p>
                    <a href className="button">
                      <i className="fa fa-download"></i>Download Resume
                    </a>
                  </p>
                </div>
              </div>
            </div>
      </section>
    );
  }
}

export default About;
