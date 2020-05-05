import React from "react";
import "./App.css";
import Contact_form from "./contact/contact";
import "./contact/contact.css";
import Footer from "./footer/footer";
import "./footer/footer.css";
import SocialFollow from "./SocialFollow/SocialFollow";
import Map from "./map/map";

function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/Contact_form" exact component={Contact_form} />
      </Router>
      <Contact_form />
      <Footer />
    </div>
  );
}

export default App;
