import React from 'react'
// import SideBarform from '../../components/SideBarform'
import Map from '../../components/Map'
import "./RidesbookingPage.css"

const RidesbookingPage = () => {
  return (
    <>
    <div className='mainContainer'>

      <div className='leftdiv'>
      {/* <SideBarform/> */}
      </div>

      <div className='rightdiv'>
      <Map/>
      </div>
    </div>
    </>
  )
}

export default RidesbookingPage