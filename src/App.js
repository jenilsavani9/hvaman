import { useState } from "react";
import Cards from "./components/Cards";
import Navbar from "./components/Navbar";
import DataState from "./contexts/dataState";


function App() {

  const [mode, setMode] = useState('light');
  const [text, setText] = useState('dark');
  const [modemsg, setModemsg] = useState('Dark Mode');

  const handleMode = () => {    
    if (mode==='light'){
      setMode('dark');
      setText('white');
      setModemsg('Light Mode');
      document.body.style.backgroundColor = '#000'
    }
    else {
      setMode('light');
      setText('dark');
      setModemsg('Dark Mode');
      document.body.style.backgroundColor = '#fff'
    }
  }

  return (
    <>
      <DataState>
        <div className="container">
          <Navbar />
          <button type="button" className="btn btn-secondary my-3" onClick={handleMode}>{modemsg}</button>
          <Cards text={text} mode={mode}/>
        </div>
      </DataState>
    </>
  );
}

export default App;
