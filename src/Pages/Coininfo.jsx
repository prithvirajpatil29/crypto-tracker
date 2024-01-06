import React,{useEffect,useState} from 'react';
import data from '../components/data/market_response_1704377655029.json'

const Coininfo = () => {
  const [filtercoins, setFiltercoins] = useState([]);
  const [coins, setCoins] = useState([]);
  const submitHandler = (e) => {
    const searchItem = e.target.value.toLowerCase();
    const filteredCoins = coins.filter((item) => item.name.toLowerCase().includes(searchItem));
    setFiltercoins(filteredCoins);
  };
    useEffect(() => {
      setCoins(data);
      setFiltercoins(data)
    }, []);
  return (
    <div className='my-3 '>
      <form action="" className='row my-3'>
          <input type="text" name="" className='p-2 rounded bg-black text-white searchinput' placeholder='Search Currency by name' id="" onChange={submitHandler}  />
        </form>
        <div className="row bg-info rounded-top">
            <div className="col-sm-3 col-md-3 col-lg-6 col-xl-6 col-xxl-6 ">
                <h3 className='fw-bold'>Coins</h3>
            </div>
            <div className="col-sm-3 col-md-3 col-lg-2 col-xl-2 col-xxl-2">
                <h3 className='fw-bold'>Price</h3>
            </div>
            <div className="col-sm-3 col-md-3 col-lg-2 col-xl-2 col-xxl-2">
                <h3 className='fw-bold'>24 Change</h3>
            </div>
            <div className="col-sm-3 col-md-3 col-lg-2 col-xl-2 col-xxl-2">
                <h3 className='fw-bold'>Market Cap</h3>
            </div>
        </div>
        <div className="">
            {
                filtercoins && filtercoins.map((item, index) => {
                    return <div className='row border-bottom p-3'>
                            <div className="col-sm-3 col-md-3 col-lg-6 col-xl-6 col-xxl-6  ">
                              <div className='d-flex align-items-start'>
                              <img src={item.image} alt="" height={55}  /> <div className=' mx-3'> <p style={{textTransform:'uppercase'}} className='text-white'>{item.symbol}</p> <p style={{textTransform:'uppercase'}} className='text-white opacity-50'>{item.id}</p></div>

                              </div>
                            </div>
                            <div className="col-sm-3 col-md-3 col-lg-2 col-xl-2 col-xxl2 mt-3">
                              <p className='text-white'>$ {item.current_price}</p>
                            </div>
                            <div className="col-sm-3 col-md-3 col-lg-2 col-xl-2 col-xxl2 mt-3">
                              {
                                item.price_change_percentage_24h > 0 ? 
                                  <p className='text-success'>{item.price_change_percentage_24h} %</p> : 
                                  <p className='text-danger'>{item.price_change_percentage_24h} %</p>
                              }
                            </div>
                            <div className="col-sm-3 col-md-3 col-lg-2 col-xl-2 col-xxl2"> <p className='text-white mt-3 '>{item.market_cap}</p> </div>
                    </div>
                })
            }
        </div>
    </div>
  )
}

export default Coininfo