import React from 'react';
import './App.css';
import Contact_form  from  './contact/contact'
import './contact/contact.css';
import Footer from './footer/footer'
import SocialFollow from "./SocialFollow/SocialFollow"
import { Map, GoogleApiWrapper } from 'google-maps-react';
//import Map  from  './map/map'


function App() {
  return (
    <div className="App">

     <Contact_form />
     <SocialFollow />
     <Footer />
    







      </div>
  );
}

export default App;
