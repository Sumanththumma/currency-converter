
import React from 'react'

const Navbar = () => {
  return (
    <>
        <div className='w-full flex items-center justify-between'>
            <div id="logo">Learn</div>
            <div id="ul-and-darkmode">
                <ul className='flex gap-3'>
                    <li>Docs</li>
                    <li>Our Motive</li>
                    <li>contact</li>
                </ul>
            </div>
        </div>
    </>
  )
}

export default Navbar