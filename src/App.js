import './App.css';
import Header from './components/header';
import Subheader from './components/subheader';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Allgemein from './sites/Allgemein';
import Neubau from './sites/Neubau';
import Mode from './sites/Mode';
import Chemie from './sites/Chemie';
import Aula from './sites/Aula';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Subheader />
        
        <Routes>
          <Route path="/" element={<Allgemein />} />         {/* Root path for Allgemein */}
          <Route path="/Neubau" element={<Neubau />} />
          <Route path="/Mode" element={<Mode />} />
          <Route path="/Chemie" element={<Chemie />} />
          <Route path="/Aula" element={<Aula />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
