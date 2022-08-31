import { Avatar, IconButton } from '@mui/material'
import React, { useEffect, useState } from 'react'
import './Chat.css'
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import MicIcon from '@mui/icons-material/Mic';
import DonutLargeIcon from '@mui/icons-material/DonutLarge';
import ChatIcon from '@mui/icons-material/Chat';
import MoreVertIcon from '@mui/icons-material/MoreVert';


function Chat() {
    const [seed, setSeed] = useState("")
    const [input, setInput] = useState("")
  
  useEffect(() => {
    setSeed(Math.floor(Math.random()*5000))
    

  },[]);

  const sendMessage = (e) =>{
    e.preventDefault();
    console.log('you typed >>>',input);
    setInput("");

  };

  return (
    <div className='chat'>
        <div className="chat__header">
        <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />

            <div className="chat__headerInfo">
                <h3>Room Name</h3>
                <p>Last seen at ...</p>
            </div>

            <div className="chat__headerRight">
            <IconButton>
            <DonutLargeIcon />
            </IconButton>
            <IconButton>
            <ChatIcon />
            </IconButton>
            <IconButton>
            <MoreVertIcon />
            </IconButton> 
            </div>

        </div>
        <div className="chat__body">
            <p className={`chat__message ${true &&'chat__receiver'}`}>
            <span className="chat__name">Yuvraj Bhati</span>
            Hey Guys
            <span className="chat__timestamp">3:52pm</span>
           
            </p>
            

        </div>
        <div className="chat__footer">
          <InsertEmoticonIcon />
          <form>
            <input value={input} onChange={e=>setInput(e.target.value)} placeholder='Type a message' type="text" />
            <button onClick={sendMessage} type='submit'>Send a message</button>
          </form>
          <MicIcon />

        </div>
        </div>
  )
}

export default Chat