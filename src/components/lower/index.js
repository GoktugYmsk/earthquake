import React, { useState } from 'react';
import { FiRefreshCcw } from 'react-icons/fi';
import { FaHome, FaStackExchange, FaMapMarkedAlt } from 'react-icons/fa';
import './index.css';
import Modal from 'react-modal';

function Lower({ refresh }) {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState(null);

  const handleIconClick = (content) => {
    setModalOpen(true);
    setModalContent(content);
  };
  const handleCloseModal = () => {
    setModalOpen(false);
    setModalContent(null);
  };

  const handleMagnifyingClick = () => {
    setModalOpen(true);
    setModalContent(
      <div className='modalFilter' >
        <ul>
        </ul>
      </div>
    );
  };

  const image4 =
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIr2rls4d-3sJHOzvVoNKuPh8gPWvjfezhCQ&usqp=CAU';

  return (
    <div className="lowerBar">
      <nav>
        <ul>
          <div className='home' >
            <FaHome
              className="homeIcon"
              size="35"
              color="black"
              onClick={() => handleIconClick()}
            />
            <p>Anasayfa</p>
          </div>
          <div className='refresh' >
            <FiRefreshCcw
              className="refreshIcon"
              size="35"
              color="black"
              onClick={refresh}
            />
            <p className='refreshParagraph' >Yenile</p>
          </div>
          <div onClick={handleMagnifyingClick} className='magnifying' >
            <img className="image4" src={image4} alt="icon" />
            <p className='glass' >Filterele</p>
          </div>
          <div className='exchange' >
            <FaStackExchange
              className="exchangeIcon"
              size="35"
              color="black"
              onClick={() => handleIconClick()}
            />
            <p className='statistik' >İstatistik</p>
          </div>
          <div className='map' >
            <FaMapMarkedAlt
              className="mapIcon"
              size="35"
              color="black"
              onClick={() => handleIconClick()}
            />
            <p className='mapParagraph' >Harita</p>
          </div>
        </ul>
      </nav>
      {/* Modal */}
      {modalOpen && (
        <div className="modalOverlay" onClick={handleCloseModal}>
          <div className="modalContent" onClick={(e) => e.stopPropagation()}>
            <p>{modalContent}</p>
          </div>
        </div>
      )}
      {modalOpen && (
        <Modal isOpen={modalOpen} onRequestClose={handleCloseModal}>
          {modalContent}
        </Modal>
      )}
    </div>
  );
}

export default Lower;