import React from 'react'
import "./detail.css"

const Detail = () => {
  return (
    <div className="detail">
       <div className='user'>
        <img src="/assets/avatar.png" alt="" width={'40%'}/>
        <h3>M Zubair</h3>
       <p>Lorem and bio graphi in the world.</p>
       </div>
       <div className='info'>
         <div className='option'>
          <div className='title'>
          <span>Chat Settings</span>
          <img src="/assets/arrowDown.png" alt="" />
          </div>
         </div>
        
         <div className='option'>
          <div className='title'>
          <span>Privacy % help</span>
          <img src="/assets/arrowDown.png" alt="" />
          </div>
         </div>
         <div className='option'>
          <div className='title'>
          <span>shared photos</span>
          <img src="/assets/arrowDown.png" alt="" />
          </div>
          <div className='photos'>
            <div className='photoItem'>
              <div className="photoDetail">

             
              <img src="" alt="" />
              <span>photo-2024-2.png</span> 
              </div>         
            <img src="/assets/download.png" alt="" className='icon' />
            </div>
            <div className='photoItem'>
              <div className="photoDetail">

             
              <img src="https://static.toiimg.com/photo/101136807.cms" alt="img"  />
              <span>photo-2024-2.png</span> 
              </div>         
            <img src="/assets/download.png" alt="" className='icon' />
            </div>
            <div className='photoItem'>
              <div className="photoDetail">

             
              <img src="" alt="" />
              <span>photo-2024-2.png</span> 
              </div>         
            <img src="/assets/download.png" alt="" className='icon' />
            </div>
            <div className='photoItem'>
              <div className="photoDetail">

             
              <img src="" alt="" />
              <span>photo-2024-2.png</span> 
              </div>         
            <img src="/assets/download.png" alt="" className='icon' />
            </div>
          </div>
         </div>
         <div className='option'>
          <div className='title'>
          <span>Shared Files</span>
          <img src="/assets/arrowDown.png" alt="" className='icon' />
          </div>
         </div>
         <button>Block User</button>
         <button className='logout'>Logout</button>
    </div>
   
     </div>
  )
}

export default Detail