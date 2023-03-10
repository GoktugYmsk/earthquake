import React, { useState } from 'react';

import { FiRefreshCcw } from 'react-icons/fi';
import { FaHome, FaStackExchange, FaMapMarkedAlt } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.css';

import Popup from '../popup/';
import './index.css';


function Lower({ refresh, boot,handleClick }) {
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
          <div className="home">
            <FaHome className="homeIcon" size="35" color="black" />
            <p>Anasayfa</p>
          </div>
          <div onClick={handleRefreshClick} className="refresh">
            <FiRefreshCcw className="refreshIcon" size="35" color="black" />
            <p className="refreshParagraph">Yenile</p>
          </div>
          <div onClick={handleMagnifyingClick} className="magnifying">
            <img className="image4" src={image4} alt="icon" />
            <p className="glass">Filterele</p>
          </div>
          <div onClick={boot} className="exchange">
            <FaStackExchange className="exchangeIcon" size="35" color="black" />
            <p className="statistik">İstatistik</p>
          </div>
          <div className="map">
            <FaMapMarkedAlt className="mapIcon" size="35" color="black" />
            <p className="mapParagraph">Harita</p>
          </div>
        </ul>
      </nav>
      {/** component olacak */}
      {showPopup && (
        <Popup setShow={setShowPopup} />
      )}

      {/*
        <Routes>
          <Route path="/Statistic" element={<Statictic />} />
        </Routes>
  */}
    </div>
  );
}

export default Lower;
