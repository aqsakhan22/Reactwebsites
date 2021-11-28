import React from 'react'
import Vmc from './Vmc'

const About = () => {
    return (
        <>
     <section className="py-5 bg-info" >

         <div className="container">

             <div className="row">

                 <div className="col-md-4 my-auto">

                      <h4>about us</h4>
                 </div>
                 <div className="col-md-8 my-auto">

                      <h6 className="float-end">Home / About us</h6>
                 </div> 
             </div>
         </div>



     </section>


<section className=" section  border-bottom" >

<div className="container">

    <h6 className="main-heading">our company</h6>
    <div className="underline"></div>
    <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
</div>



</section>

<Vmc/>
</>
    )
}

export default About
