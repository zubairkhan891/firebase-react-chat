import React, { useEffect, useRef } from 'react'
import "./chat.css"
import { useState } from 'react';
import EmojiPicker from 'emoji-picker-react'


const Chat = () => {
  const [open,setOpen] = useState(false)
  const [text,setText] = useState("")

  const endRef = useRef(null)

  useEffect(()=>{
     endRef.current?.scrollIntoView({behavior: "smooth" });
  },[]);

  const handleEmoji = (e) =>{
    setText((prev) => prev + e.emoji)
    setOpen(false)
  };

  console.log(text)

  return (
    <div className="chat">
      <div className="top">
        <div className="user">
          <img src="/assets/avatar.png" alt="avatar" />
          <div className="text">
            <span>M Zubair</span>
            <p>Lorem ipusm dolor , sit amet.</p>
          </div>
        </div>
        <div className="icons">
          <img src="/assets/phone.png" alt="phone" />
          <img src="/assets/video.png" alt="video" />
          <img src="/assets/info.png" alt="info" />
        </div>
      </div>
      <div className="center">
        <div className="message">
          <img src="/assets/avatar.png" alt="" />
          <div className="texts">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
               Tempora, perspiciatis possimus? Officiis nobis facilis
                molestias corporis! Suscipit obcaecati vitae, minus quaerat
                 non, porro hic perspiciatis distinctio, voluptates quisquam
                  explicabo quos.</p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="message own">
          <div className="texts">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
               Tempora, perspiciatis possimus? Officiis nobis facilis
                molestias corporis! Suscipit obcaecati vitae, minus quaerat
                 non, porro hic perspiciatis distinctio, voluptates quisquam
                  explicabo quos.</p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="message">
          <img src="/assets/avatar.png" alt="" />
          <div className="texts">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
               Tempora, perspiciatis possimus? Officiis nobis facilis
                molestias corporis! Suscipit obcaecati vitae, minus quaerat
                 non, porro hic perspiciatis distinctio, voluptates quisquam
                  explicabo quos.</p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="message own">        
          <div className="texts">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
               Tempora, perspiciatis possimus? Officiis nobis facilis
                molestias corporis! Suscipit obcaecati vitae, minus quaerat
                 non, porro hic perspiciatis distinctio, voluptates quisquam
                  explicabo quos.</p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="message">
          <img src="/assets/avatar.png" alt="" />
          <div className="texts">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
               Tempora, perspiciatis possimus? Officiis nobis facilis
                molestias corporis! Suscipit obcaecati vitae, minus quaerat
                 non, porro hic perspiciatis distinctio, voluptates quisquam
                  explicabo quos.</p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="message own">
          <div className="texts">
          <img src="https://static.toiimg.com/photo/101136807.cms" alt="img"  width={'20px'} height={'200px'}/>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
               Tempora, perspiciatis possimus? Officiis nobis facilis
                molestias corporis! Suscipit obcaecati vitae, minus quaerat
                 non, porro hic perspiciatis distinctio, voluptates quisquam
                  explicabo quos.</p>
            <span>1 min ago</span>
          </div>
        </div>
        <div ref={endRef}></div>
      </div>
      <div className="bottom">
        <div className="icons">
          <img src="/assets/img.png" alt="img" />
          <img src="/assets/camera.png" alt="camera" />
          <img src="/assets/mic.png" alt="mic" />
        </div>
        <input
         type="text"
          placeholder='Type a message...'
          value={text}
           onChange={e=>setText(e.target.value)} 
           />
        <div className="imoji">
          <img
           src="/assets/emoji.png"
            alt="emoji"
            onClick={() => setOpen((prev) => !prev)} 
            />
            <div className='picker'>
            <EmojiPicker open={open} onEmojiClick={handleEmoji} />
            </div>       
        </div>
        <button className='sendButton'>Send</button>
      </div>
    </div>
  );
};

export default Chat;