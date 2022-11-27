import React, {useEffect, useState} from 'react'
import {FaUserCircle} from "react-icons/fa"
import {BsMic} from "react-icons/bs"
import {IoMdAttach} from "react-icons/io"
import {BsSearch} from "react-icons/bs"
import {FiMoreVertical} from "react-icons/fi"
import {GrEmoji} from "react-icons/gr"


import './Chat.css'


const Chat = () => {

    const [seed, setSeed] = useState(" ")
    const [input, setInput] = useState("");


    useEffect(()=> {
        setSeed(Math.floor(Math.random()* 5000))
    },[])

    const sendMessage = (e) => {
        e.preventDefault();
        console.log("you typed >>>", input)
        setInput(" ")
    }

  return (
    <div className='chat'>
    <div className='chat__header'>
        <FaUserCircle  className='icon' src={`https://avatars.dicebear.com/api/${seed}.svg`}/>
   

    <div className='chat__headerInfo'>
        <h3>Room name</h3>
        <p>last seen at ...</p>
    </div>

    <div className='sidebar__headerRight'>
    <BsSearch/>
    <IoMdAttach/>
    <FiMoreVertical/>
      
    </div>
    </div>

    <div className='chat__body'>
        <p className={`chat__message ${true && "chat__reciver"}`}>  <span className='chat__name'>Sonny Sangna</span> hey aslam  <span className='chat__timestamp'>3:52pm</span></p>
    </div>


    
    <div className='chat__footer'>
    <GrEmoji/>
    <form>
    <input type="text" placeholder="Type a message" value={input} onChange={e => setInput(e.target.value)}/>
    <button type="submit" onClick={sendMessage}>Send a Message</button>
    </form>
    <BsMic/>

    
    </div>
</div>
  )
}

export default Chat