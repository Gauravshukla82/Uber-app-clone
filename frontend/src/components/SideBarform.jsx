import React from 'react'
import "./SideBarform.css"
const SideBarform = () => {
  return (
    <>
    <div className='formdiv'>
        <h2>Request Ride Now</h2>
       <form action="">
       <br />
        <label htmlFor="currnt location">Location</label>
        <br />
        <input type="text" placeholder='enter  location' />
        <br />
        <br />
        <label htmlFor="destination">Destination</label>
        <br />
        <input type="text" placeholder='enter destination' />
        <br />
        <br />
        <button className='button'>Search</button>

        </form>
    </div>
    </>
  )
}

export default SideBarform