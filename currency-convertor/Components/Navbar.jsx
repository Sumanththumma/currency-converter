
import React from 'react'

const Navbar = () => {
  return (
    <div id="nav-frame" className='w-full flex items-center justify-between bg-black text-white'>
        <div id="logo">
            <h1 className='font-semibold text-2xl'>CurrencyConverter</h1>
        </div>
        <div id="nav-otherhalf" className='flex'>
            <div id="hamburger">
                {/* hamburgericon */}
            </div>
            <ul>
                <li>Docs</li>
                <li>API</li>
                <li>Contact</li>
            </ul>
            <div id="darkmode" className=''>
                {/* darkmodeicon */}
            </div>
        </div>
    </div>
  )
}

export default Navbar