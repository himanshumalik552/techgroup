import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Service from "./Service";
import Our_Team from "./Our_Team";
import { Switch, Route, Redirect } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer ';


const App =() => 
{
  return (
  <>
  <Navbar/>
 <Switch>
<Route exact path="/" component={Home} />
<Route exact path="/about" component={About} />
<Route exact path="/service" component={Service} />
<Route exact path="/our_team" component={Our_Team} />
<Route exact path="/contact" component={Contact} />

<Redirect to ="/" />
 </Switch> 

 <Footer/>
  </>                 
  );
};

export default App; 


