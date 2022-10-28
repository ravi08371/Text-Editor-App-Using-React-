import "./App.css";
import MainContent from "./mainContent";
import Navbar from "./navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <MainContent heading="Enter Your Text" />
    </div>
  );
}

export default App;
