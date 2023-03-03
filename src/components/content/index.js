import React from 'react'
import './index.css'
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'

function Content({ earthquake, formatDuration, image1, duration, depthColor }) {
  return (
    <li key={earthquake.id}>
      <div className='earthquake-bar' style={depthColor(earthquake.depth)}>
        <p className='location' > <strong> {earthquake.lokasyon} </strong> {" "}</p>
        <p className='mag' > <span> {earthquake.mag} {" "} </span></p>
        <strong value={earthquake.depth} className='depth' >{earthquake.depth} {""} km. </strong>
        <img className='image' src={image1} alt="earthquake icon" />
        <FontAwesomeIcon className='chevron' icon={faChevronDown} />
        <FontAwesomeIcon className='icon' icon={faCalendarAlt} />
        <div className='date' >{formatDuration(duration)}</div>
      </div>
    </li>
  )
}

export default Content