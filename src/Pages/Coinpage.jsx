import React, { useState } from 'react'
import Coininfo from './Coininfo';
const Coinpage = () => {
  return (
    <div className='bg-black'>
        <div className="container">
        <h2 className='text-white text-center py-3'>Cryptocurrency Prices by Market Cap</h2>
        <Coininfo></Coininfo>
        </div>
    </div>
  )
}

export default Coinpage