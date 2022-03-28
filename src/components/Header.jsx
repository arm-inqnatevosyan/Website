import React from 'react'
import img from "../img/43-437146_virtual-reality-hd-png-download.png";

const Header = () => {
  return (
    <header>
        <div className='img'>
           <img src={img} />
        </div>
        <div className='text-div'>
            <h3>Just the right amount</h3>
            <h3>of everything.</h3>
            <div>
                <input type="text" placeholder='Enter a valid email address' />
                <button>Submit</button>
            </div>
        </div>
    </header>
  )
}

export default Header