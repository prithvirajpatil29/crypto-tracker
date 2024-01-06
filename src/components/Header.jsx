import React from 'react'
const Header = () => {
  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-black text-info">
        <div className="container">
            <a href='' className='navbar-brand text-info fw-bold'>Crypto Tracker</a>
            <button type='button' className='navbar-toggler text-info' data-bs-toggle='collapse' data-bs-target='#menu'>
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="menu">
                <ul className="navbar-nav ms-auto">
                    <li className="nav-item">
                        <form action="">
                            <select name="" id=""  className='px-3 py-1 bg-black border-info text-info bg-info rounded'>
                                <option value="USD">USD</option>
                            </select>
                        </form>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
  )
}

export default Header