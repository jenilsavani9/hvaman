import Cards from "./components/Cards";
import Navbar from "./components/Navbar";
import DataState from "./contexts/dataState";

function App() {
  return (
    <>
      <DataState>
        <div className="container">
          <Navbar />
          <Cards />
        </div>
      </DataState>
    </>
  );
}

export default App;
