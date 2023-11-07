import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header/Header.js";
import Home from "./components/Home/Home.js";
//import FeaturesSection from './FeaturesSection';
//import SolutionsSection from './SolutionsSection';
//import PricingSection from './PricingSection';
//import Testimonials from './Testimonials';
//import NewsUpdates from './NewsUpdates';
import Footer from "./components/Footer/Footer.js";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />

          {/* Add more routes for other pages/components */}
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
