import { useState, useEffect } from 'react';
import axios from 'axios';

import Header from './components/header';
import Footer from './components/footer';
import CustomContent from './components/CustomContent';

import './App.css';

function App() {
  const [earthquakes, setEarthquakes] = useState([]);

  const refresh = async () => {
    setEarthquakes([])
    await axios.get('https://api.orhanaydogdu.com.tr/deprem/kandilli/live')
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
      <Footer refresh={refresh} />
    </div>
  );
}

export default App;
