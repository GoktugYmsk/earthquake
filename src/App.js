import './App.css';
import { useState, useEffect } from 'react';
import Header from './components/header';
import Lower from './components/lower';
import CustomContent from './components/CustomContent';
import axios from 'axios';

function App() {
  const [earthquakes, setEarthquakes] = useState([]);

  const refresh = () => {
    axios.get('https://api.orhanaydogdu.com.tr/deprem/kandilli/live')
      .then(response => setEarthquakes(response.data.result))
      .catch(error => console.log(error))
  }
  useEffect(() => {
    refresh();
  }, []);

  return (
    <div className="App">
      <Header />
      <CustomContent earthquakes={earthquakes} />
      <Lower refresh={refresh} />
    </div>
  );
}

export default App;
