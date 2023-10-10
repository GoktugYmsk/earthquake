

import CustomComponent from './components/customComponent';

import EarthquakeMap from './components/map';

import './App.css';
import { Route, Routes } from 'react-router-dom';

function App() {


  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<CustomComponent />} />
        <Route path="/earthquakeMap" element={<EarthquakeMap />} />
      </Routes>
    </div>
  );
}

export default App;
