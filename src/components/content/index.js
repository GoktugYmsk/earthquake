import React from 'react'

import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'

import '../content/index.css'

function Content({ earthquake, formatDuration, image1, duration, depthColor }) {

  console.log(earthquake)

  return (
    <li >
      <div className='earthquake-bar' style={depthColor(earthquake.depth)}>
        <p className='location' > <strong> {earthquake.title} {" "} </strong></p>
        <p className='mag' > <span> {earthquake.mag} {" "} </span></p>
        <strong value={earthquake.depth} className='depth' >{earthquake.depth} {""} km. </strong>
        <img className='image' src={image1} alt="earthquake icon" />
        <strong><FontAwesomeIcon className='chevron' icon={faChevronDown} /></strong>
        <FontAwesomeIcon className='icon' icon={faCalendarAlt} />
        <div className='date' >{formatDuration(duration)}</div>
      </div>
    </li>
  )
}

export default Content