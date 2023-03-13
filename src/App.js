import { useState, useEffect } from 'react';
import axios from 'axios';

import Header from './components/header';
import Footer from './components/footer';
import Content from './components/content';

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
      <Content earthquakes={earthquakes} />
      <Footer refresh={refresh} />
    </div>
  );
}

export default App;
