import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'

import './index.css'

function Popup({ setShow }) {
  const handleClosePopup = () => {
    setShow(false);
  };

  return (
    <div className="popupContainer">
      <div className="popupContent">
        <h1 className='search' >Arama</h1>
        <input className='footerInput' placeholder='Kelime ile filtrele' ></input>
        <FontAwesomeIcon className='popupChevron' icon={faChevronDown} />
        <h1 className='filterHead' >İllere Göre Filtrele</h1>
        <input className='footerInputIl' placeholder='Tüm İller' ></input>
        <FontAwesomeIcon className='popupChevronAlt' icon={faChevronDown} />
        <input className='footerInputS' placeholder='Sırala' ></input>
        <h1 className='arrangement' >Sıralama</h1>
        <button className='popupFilter' ><strong>Filtrele</strong></button>
        <button className='popupClose' onClick={handleClosePopup} >Kapat</button>
        <hr className='popupHr' />
      </div>
    </div>
  )
}

export default Popup
