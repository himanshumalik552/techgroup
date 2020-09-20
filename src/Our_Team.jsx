import React from 'react';
import Card from "./Card";
import Tdata from "./Tdata";

const Our_Team =() => 
{
  return (
  <>
  <div className="my-5">
    <h1 className="text-center"> Our Team </h1>
  </div>
  <div className="container-fluid" >
    <div className="row">
      <div className="col-10 mx-auto">
        <div className="row gy-4">
          {Tdata.map((val,ind) => {
            return <Card key={ind} imgsrc={val.imgsrc} title={val.title} disc={val.disc} /> 
          })}
        </div>
      </div>
    </div>
  </div>
  </>
  ); 
};

export default Our_Team; 


