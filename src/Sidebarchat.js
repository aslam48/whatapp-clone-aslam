import React, {useState, useEffect} from 'react'
import {FaUserCircle} from "react-icons/fa"
import './Sidebarchat.css'


const Sidebarchat = ({addNewChat}) => {
    const [seed, setSeed] = useState(" ")

    useEffect(()=> {
        setSeed(Math.floor(Math.random()* 5000))
    },[])

    
const createChat = () => {
  const roomName = prompt("please enter name for chat")
  if (roomName){
  }
};

  return  !addNewChat ?(
    <div className='sidebarchats'>
       <FaUserCircle className='icon' src={`https://avatars.dicebear.com/api/${seed}.svg`}/>
       <div className='sidebarChart__info'>
        <h2>aslam</h2> 
        <p>Last message...</p>
       </div>
    </div> 
  )  : (
    <div onClick={createChat} className="sidebarchats"><h2>Add new  Chat</h2></div>
  )
  }

export default Sidebarchat