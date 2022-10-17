import "./App.css";
import Featured from "./components/outer/featured/intex";
import Footer from "./components/outer/Footer";
import Header from "./components/outer/Header";

function App() {
  return (
    <div>
      <Header />
      <>
        <Featured />
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
