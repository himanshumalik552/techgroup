import React from 'react';
import { NavLink,  } from 'react-router-dom';

const Common =(props) => 
{
  return (
  <>
  <section id="header" className="df-flex align-items-center">
  <div className = "container-fluid nev-bg">
      <div className="row">
          <div className="col-10 mx-auto ">
             <div className="row">
            <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
            <h1 className="mt-5">
              {props.name} <strong className="brand_name">TechGroup</strong>
            </h1>
            <h4 className="my-4">
              We are the team of talented devloper making Websites, Android Applicaton, Desktop Applications 
            </h4>
            <div className="mt-5">
              <NavLink className="btn-get-started" to={props.visit}>{props.btname}</NavLink>
            </div>
          </div>
           <div className="col-lg-6 order-1 order-lg-2 header-img mt-5">

                 <img 
                 className=" img-fluid animated" 
                 src={props.imgscr}  
                 alt="homeimg"/>
           </div>
          </div>
        </div>
      </div>
  </div>
  </section>
  </>
  );
};

export default Common; 


