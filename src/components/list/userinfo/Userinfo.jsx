import React from 'react'
import "./userInfo.css"

const Userinfo = () => {
  return (
    <div className="userInfo">
        <div className="user">
        <img src='/public/assets/avatar.png' alt='' />
        <h2>M Zubair</h2>
    </div>
    <div className='icons'>
      <img src="public/assets/more.png" alt="" />
      <img src="public/assets/video.png" alt="" />
      <img src="public/assets/edit.png" alt="" />
      

    </div>
    </div >
  )
}

export default Userinfo