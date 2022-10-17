import "./App.css";
import Featured from "./featured/intex";
import Footer from "./components/outer/Footer";
import Header from "./components/outer/Header";
import VenueNfo from "./components/venueNfo";
import HighLights from "./components/highlights";

function App() {
  return (
    <div>
      <Header />
      <>
        <Featured />
      </>
      <>
        <VenueNfo />
      </>
      <>
        <HighLights />
      </>
      <div style={{ backgroundColor: "red", height: "800px" }}></div>
      <div style={{ backgroundColor: "yellow", height: "800px" }}></div>
      <div style={{ backgroundColor: "green", height: "800px" }}></div>
      <div style={{ backgroundColor: "pink", height: "800px" }}></div>
      <Footer />
    </div>
  );
}

export default App;
