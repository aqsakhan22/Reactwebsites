import { getRoles } from "@testing-library/dom";
import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <section className=" section footer bg-dark text-white">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h6>Company information</h6>
            <hr />
            <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
          </div>

          <div className="col-md-4">
            <h6>Quick Links</h6>
            <hr />
            <div className="mb-1">
              <Link to="/">Home</Link>
            </div>
            <div className="mb-1">
              <Link to="/about">About us</Link>
            </div>
            <div className="mb-1">
              <Link to="">Contact us</Link>
            </div>
            <div className="mb-1">
              <Link to="">Blog</Link>
            </div>
          </div>
          <div className="col-md-4">
            <h6>Contact information</h6>
            <hr />
            <div>
              <p>sharah e faisal karachi pakistan </p>
            </div>
            <div>
              <p>+92xxxxxxxx</p>
            </div>
            <div>
              <p>aqsakhan19966@gmail.com</p>
            </div>
          </div>


        </div>
      </div>
    </section>
  );
};

export default Footer;
