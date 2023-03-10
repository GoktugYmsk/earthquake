import React, { useState } from 'react'

import Content from '../components/content';

function CustomContent({ earthquakes }) {
  const image1 = 'https://cdn-icons-png.flaticon.com/512/3393/3393873.png'

  function formatDuration(duration) {
    if (duration < 60) {
      return `${duration} dakika önce`;
    } else {
      const hour = Math.floor(duration / 60);
      const minute = duration % 60;
      return `${hour} saat ${minute} dakika önce`;
    }
  }

  const depthColor = (depth) => {
    if (depth > 2) {
      return { backgroundColor: 'rgb(210, 253, 206)' };
    } else if (depth < 2) {
      return { backgroundColor: 'rgb(253, 247, 221)' };
    }
  }

  return (
    <div className='earthquake'>
      <ul>
        {earthquakes.map((earthquake) => {
          const depremDate = new Date(earthquake.date);
          const now = new Date();
          const duration = Math.floor((now - depremDate) / (1000 * 60));
          return (
            <Content key={earthquake._id} earthquake={earthquake} formatDuration={formatDuration} image1={image1} duration={duration} depthColor={depthColor} />
          )
        })}
      </ul>
    </div>
  )
}

export default CustomContent