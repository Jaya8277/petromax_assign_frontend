

// import './App.css';

import {Routes,Route} from "react-router-dom"
import Home from './Components/Home/Home.jsx';
import Update from './Admin/Admin';

function App() {
  return (
    <div className="App">
    
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/admin" element={<Update/>}/>
    </Routes>
  
    </div>
  );
}

export default App;
