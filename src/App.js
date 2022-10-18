import "./App.css";
import Featured from "./featured/intex";
import { Element } from "react-scroll";

import Footer from "./components/outer/Footer";
import Header from "./components/outer/Header";
import VenueNfo from "./components/venueNfo";
import HighLights from "./components/highlights";
import Prices from "./components/pricing";
import Location from "./components/location";

function App() {
  return (
    <div>
      <Header />
      <Element name="featured">
        <Featured />
      </Element>
      <Element name="venuenfo">
        <VenueNfo />
      </Element>
      <Element name="highlights">
        <HighLights />
      </Element>
      <Element name="pricing">
        <Prices />
      </Element>
      <Element name="location">
        <Location />
      </Element>

      <Footer />
    </div>
  );
}

export default App;
