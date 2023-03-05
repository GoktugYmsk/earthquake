import React, { useState } from 'react';
import { FiRefreshCcw } from 'react-icons/fi';
import { FaHome, FaStackExchange, FaMapMarkedAlt } from 'react-icons/fa';
import './index.css';
import { Link, Route, Routes } from 'react-router-dom';
import Modal from 'react-modal';
import Statictic from './Statictic';

function Lower({ refresh }) {
  Modal.setAppElement('#root');

  const [showModal, setShowModal] = useState(false);
  const image4 = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIr2rls4d-3sJHOzvVoNKuPh8gPWvjfezhCQ&usqp=CAU';

  const handleRefreshClick = () => {
    setShowModal(true);
    window.location.reload();
    refresh();
  };

  return (
    <div className="lowerBar">
      <nav>
        <ul>
          <div className="home">
            <FaHome className="homeIcon" size="35" color="black" />
            <p>Anasayfa</p>
          </div>
          <div onClick={handleRefreshClick} className="refresh">
            <FiRefreshCcw className="refreshIcon" size="35" color="black" />
            <p className="refreshParagraph">Yenile</p>
          </div>
          <div className="magnifying">
            <img className="image4" src={image4} alt="icon" />
            <p className="glass">Filterele</p>
          </div>
          <div className="exchange">
            <FaStackExchange className="exchangeIcon" size="35" color="black" />
            <p className="statistik">İstatistik</p>
          </div>
          <div className="map">
            <FaMapMarkedAlt className="mapIcon" size="35" color="black" />
            <p className="mapParagraph">Harita</p>
          </div>
        </ul>
      </nav>
      {/*
        <Routes>
          <Route path="/Statistic" element={<Statictic />} />
        </Routes>
  */}
    </div>
  );
}

export default Lower;
