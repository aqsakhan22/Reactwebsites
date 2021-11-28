import React from "react";
import { Link } from "react-router-dom";
import Slider from "../inc/Slider";
import Vmc from "./Vmc";
import service1 from "../images/service1.jpg"
import service2 from "../images/service2.png"
import service3 from "../images/service3.jpg"

const Home = () => {
  return (
    <div>
      <Slider />
      <div className="section">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <h2 className="main-heading">our company</h2>
              <div className="underline mx-auto"></div>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
              <Link to="/about" className="btn btn-warning shadow">
                Read More
              </Link>
            </div>
          </div>
        </div>
      </div>

{/* vision */}
<Vmc/>

{/* services */}
<section className="section  border-top">
      <div className="container">
        <div className="row">
          <div className="col-md-12 text-center mb-5">
            <h2 className="main-heading">our services</h2>
            <div className="underline mx-auto"></div>
          </div>
          <div className="col-md-4 ">


              <div className="card shadow">
              <img src={service1} className="w-100 h-75  border-bottom"/>
                  <div className="card-body ">

                  <h6>our vision</h6>
                  <div className="underline"></div>
                  <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy
              text ever since the 1500s, when an unknown printer took a galley
              of type and scrambled it to make a type specimen book.
            </p>
            <Link to="/services" className="btn btn-link">Read more</Link>
                  </div>
              </div>
           
          </div>

          <div className="col-md-4 ">
          <div className="card shadow">
              <img src={service1} className="w-100 h-75  border-bottom"/>
                  <div className="card-body ">

                  <h6>our vision</h6>
                  <div className="underline"></div>
                  <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy
              text ever since the 1500s, when an unknown printer took a galley
              of type and scrambled it to make a type specimen book.
            </p>
            <Link to="/services" className="btn btn-link">Read more</Link>
                  </div>
              </div>
           
          </div>

          <div className="col-md-4 ">
          <div className="card shadow">
              <img src={service1} className="w-100 h-75 border-bottom"/>
                  <div className="card-body ">

                  <h6>our vision</h6>
                  <div className="underline"></div>
                  <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy
              text ever since the 1500s, when an unknown printer took a galley
              of type and scrambled it to make a type specimen book.
            </p>
            <Link to="/services" className="btn btn-link">Read more</Link>
                  </div>
              </div>
           
          </div>
        </div>
      </div>
   
   
    </section>
    </div>
  );
};

export default Home;
