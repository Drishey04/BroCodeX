import React from 'react'
import './header.css'

const header = () => {
  return (
    <div className='topbar'>
    
    <div className='topbarLeft'>
      <img src="logo1.jpg" alt='logo' className='logo'/>
    </div>
    <div className='topbarCenter'>Center</div>
    <div className='topbarRight'>Right</div>


    </div>
  )
}

export default header;

