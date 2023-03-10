import React from 'react'

import './index.css'

function Popup({setShow}) {
  const handleClosePopup = () => {
    setShow(false);
  };

  return (
    <div className="popupContainer">
      <div className="popupContent">
        <h1 className='search' >Arama</h1>
        <input className='footerInput' placeholder='Kelime ile filtrele' ></input>
        <h1 className='filterHead' >İllere Göre Filtrele</h1>
        <input className='footerInputIl' placeholder='Tüm İller' ></input>
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
