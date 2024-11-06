import React, { useState } from 'react'
import "./chatList.css"

const ChatList = () => {
  const [addMode,setAddMode]= useState(false)
  return (
    <div className="chatList">
     <div className='search'>
      <div className='searchBar'>
        <img src="/assets/search.png" alt="search" />
        <input type='text' placeholder='' />
       </div>
       <img 
       src={addMode ? "/assets/minus.png" : "/assets/plus.png"}
        alt="" className='add'
        onClick={() => setAddMode((prev) => !prev)}
        />
     </div>
     <div className="item">
      <img src="/assets/avatar.png" alt="avatar" />
      <div className="texts">
        <span>M zubair</span>
        <p>Hello</p>
      </div>
     </div>
     <div className="item">
      <img src="/assets/avatar.png" alt="avatar" />
      <div className="texts">
        <span>M zubair</span>
        <p>Hello</p>
      </div>
     </div>
     <div className="item">
      <img src="/assets/avatar.png" alt="avatar" />
      <div className="texts">
        <span>M zubair</span>
        <p>Hello</p>
      </div>
     </div>
     <div className="item">
      <img src="/assets/avatar.png" alt="avatar" />
      <div className="texts">
        <span>M zubair</span>
        <p>Hello</p>
      </div>
     </div>
     <div className="item">
      <img src="/assets/avatar.png" alt="avatar" />
      <div className="texts">
        <span>M zubair</span>
        <p>Hello</p>
      </div>
     </div>
    </div>
  );
};

export default ChatList