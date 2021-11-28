import React from "react";

const Contactus = () => {
  return (
    <div>
      <section className="py-5 bg-info">
        <div className="container">
          <div className="row">
            <div className="col-md-4 my-auto">
              <h4>Contact us</h4>
            </div>
            <div className="col-md-8 my-auto">
              <h6 className="float-end">Home / Contact us</h6>
            </div>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div className="card shadow mt-4">
            <div className="card-body">
              <div className="row">
                <div className="col-md-6">
                  <h6>contact page</h6>
                  <hr />
                  <div className="form-group">
                    <label for="" className="mb-1">
                      Full name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      value=""
                      name=""
                    />
                  </div>

                  <div className="form-group">
                    <label for="" className="mb-1">
                    phone number
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      value=""
                      name=""
                    />
                  </div>


                  <div className="form-group">
                    <label for="" className="mb-1">
                 address
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      value=""
                      name=""
                    />
                  </div>


                  <div className="form-group">
                    <label for="" className="mb-1">
                      email
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      value=""
                      name=""
                    />
                  </div>

                  <div className="form-group">
                    <label for="" className="mb-1">
                   message
                    </label>
                   

                    <textarea rows="3"   className="form-control"></textarea>
                  </div>


                  <div className="form-group mt-4">
                

                    <button   className="btn btn-primary shadow w-100">send</button>
                  </div>                  
                </div>
              
              <div className="col-md-6 border-start">


                  <h5 className="main-heading">Address</h5>
                  <div className="underline"></div>
                   
              <p>sharah e faisal karachi pakistan </p>
         
       
              <p>+92xxxxxxxx</p>
          
           
              <p>aqsakhan19966@gmail.com</p>
            

              </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contactus;
