import React from 'react'
import './index.css'

function Header() {
  const image2 = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4v1yZkujhIjkTii8DtaeaG_vR_EAteax_gQ&usqp=CAU'
  const image3 = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSB7OXZzVRIdAvFKfCwIDDxz1cE6S_odKaQcA&usqp=CAU'
  return (
    <div>
      <div className='headerNavbar' >
        <img className='navbarFoto' src={image2} ></img>
        <h1 className='header' >KANDİLLİ RASATHANESİ</h1>
        <p className='altHeader' >TÜRKİYE VE ÇEVRESİNDEKİ SON 500 DEPREM</p>
        <img className='imgThree' src={image3} ></img>
        <hr className='hr' />
      </div>
    </div>
  )
}

export default Header
