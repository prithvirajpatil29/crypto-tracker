import React from 'react'
import BackgroundCarousel from './BackgroundCarousel'

const Backgroundimg = () => {
  return (
    <div className='background'>
        <h1 className='text-white text-center h1crypto'>Crypto Tracker</h1>
        <p className='text-center opacity-75 text-info'  >Get All The Info Regarding Your Favorite Crypto Currency</p>
        <BackgroundCarousel></BackgroundCarousel>
    </div>
  )
}

export default Backgroundimg