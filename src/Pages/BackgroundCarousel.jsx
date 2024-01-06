import React, { useState, useEffect } from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import data from '../components/data/market_response_1704377655029.json'
const BackgroundCarousel = () => {
  const [coins, setCoins] = useState([]);
  useEffect(() => {
    setCoins(data)
  }, []);
  console.log(coins)
  const items = coins.map((item) => {
    return <div className='d-flex flex-column align-items-center justify-content-center my-3 '>
        <p className='text-white text-center ' style={{ textTransform: 'uppercase' }}>{item.id}</p>
        <img src={item.image} height={80} className='my-1' alt="" />
        <p className='text-white'>$ {item.current_price}</p>
    </div>
  });

  const responsive = {
    0: {
      items: 2,
    },
    512: {
      items: 4,
    },
  };

  return (
     <div >
        <AliceCarousel
      mouseTracking
      infinite
      autoPlayInterval={1000}
      animationDuration={1500}
      disableDotsControls
      disableButtonsControls
      autoPlay
      responsive={responsive}
      items={items}
    />
     </div>
   
    
  );
};

export default BackgroundCarousel;
