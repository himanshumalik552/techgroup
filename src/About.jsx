import React from 'react';
import about from '../src/image/about.png';
import Common from "./Common";

const About =() => 
{
  return (
  <>
  < Common  name="Welcome to About page"
    imgscr={about}
    visit="/contact"
    btname="Contact Now"  
  />
  </>
  );
};

export default About; 




