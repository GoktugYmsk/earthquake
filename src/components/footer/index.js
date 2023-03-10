import React, { useState } from 'react';

import { FiRefreshCcw } from 'react-icons/fi';
import { FaHome, FaStackExchange, FaMapMarkedAlt } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.css';
import { Routes, Route, NavLink } from 'react-router-dom';

import Popup from '../popup/';
import './index.css';


function Statictic() {
  return (
    <div className='mainStatistic' >
      Bu sayfa istatistik sayfasıdır
    </div>
  )
}
function Home() {
  return (
    <div>
    </div>
  )
}


function Lower({ refresh, boot, handleClick }) {
  const [showModal, setShowModal] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const image4 = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIr2rls4d-3sJHOzvVoNKuPh8gPWvjfezhCQ&usqp=CAU';

  const handleRefreshClick = () => {
    setShowModal(true);
    refresh();
  };

  const handleMagnifyingClick = () => {
    setShowPopup(true);
  };


  return (
    <div className="lowerBar">
      <nav>
        <ul>
          <NavLink to='/' >
            <div className="home">
              <FaHome className="homeIcon" size="35" color="black" />
              <p className='mainPage' >Anasayfa</p>
            </div>
          </NavLink>
          <div onClick={handleRefreshClick} className="refresh">
            <FiRefreshCcw className="refreshIcon" size="35" color="black" />
            <p className="refreshParagraph">Yenile</p>
          </div>
          <div onClick={handleMagnifyingClick} className="magnifying">
            <img className="image4" src={image4} alt="icon" />
            <p className="glass">Filterele</p>
          </div>
          <NavLink to='/Statistic'>
            <div onClick={boot} className="exchange">
              <FaStackExchange className="exchangeIcon" size="35" color="black" />
              <p className="statistik">İstatistik</p>
            </div>
          </NavLink>
          <div className="map">
            <FaMapMarkedAlt className="mapIcon" size="35" color="black" />
            <p className="mapParagraph">Harita</p>
          </div>
        </ul>
      </nav>
      {showPopup && (
        <Popup setShow={setShowPopup} />
      )}
      <Routes>
        <Route path="/Statistic" element={<Statictic />} />
        <Route path='/' element={<Home />} />
      </Routes>
    </div>
  );
}

export default Lower;
