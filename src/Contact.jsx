import React, { useState } from 'react';

const Contact =() => 
{
  const [data, setData ] =useState({
    fullname:"", 
    email: "",
    contact:"",
    message:"",
  });

  const InputEvent = (event)=> {
    const {name, value} = event.target;

    setData((perVal) => {
      return {
         ...perVal,
         [name]:value,
      };
    });
  };
  const formSubmit= (e) => {
    e.preventDefault();
    alert(
      `my name is ${data.fullname}. My mobile number is ${data.contact }
      and email is ${data.email}. here is i want to say ${data.message} `
    )
  };
  return (
<>
<div className="my-5 ">
<h1 className="text-center">Contact Us</h1>
  <div className = "container contact_div">
  <div className="row">
      <div className="col-10 col-md-6 mx-auto ">
      <form onSubmit={formSubmit}>
  <div className="form-group">
    <label for="exampleFormControlInput1">Full Name</label>
    <input type="text"
      className="form-control"
      id="exampleFormControlInput1" 
      name="fullname"
      value={data.fullname}
      onChange={InputEvent}
      placeholder="Enter Your Name"/>
  </div>
  <div className="form-group">
    <label for="exampleFormControlInput1">Email address</label>
    <input type="email" 
    className="form-control" 
    id="exampleFormControlInput1" 
    name="email"
    value={data.email}
    onChange={InputEvent}
    placeholder="Techgrouo@example.com"/>
  </div>
  <div className="form-group">
    <label for="exampleFormControlInput1">Contact Number</label>
    <input type="text"  
    className="form-control" 
    id="exampleFormControlInput1" 
    name="contact"
    value={data.contact}
    onChange={InputEvent}
    placeholder="Enter Your Contact Number"/>
  </div>
  <div className="form-group">
    <label for="exampleFormControlTextarea1">Message</label>
    <textarea className="form-control" 
    id="exampleFormControlTextarea1" 
    name="message"
    value={data.message}
    onChange={InputEvent}
    placeholder="Enter Your Message" 
    rows="3"></textarea>
  </div>
  <div className="form-group row">
    <div className="col-sm-10">
      <button type="submit" 
      className="btn btn-outline-primary">Submit</button>
    </div>
  </div>

</form>

      
    </div>
  </div>
</div>
</div>
  </>
  );
};

export default Contact; 


