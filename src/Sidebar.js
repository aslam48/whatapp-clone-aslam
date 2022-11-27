import React from 'react'
import './Sidebar.css'
import {FaUserCircle} from "react-icons/fa"
import {MdDonutLarge} from "react-icons/md"
import {BsFillChatLeftTextFill} from "react-icons/bs"
import {FiMoreVertical} from "react-icons/fi"
import {AiOutlineSearch} from "react-icons/ai"
import Sidebarchat from './Sidebarchat'


const Sidebar = () => {
  return (
    <div className='sidebar'>
       <div className='sidebar__header'>
       <FaUserCircle/>

        <div className='sidebar__headerRight'>
        <MdDonutLarge/>
        <BsFillChatLeftTextFill/>
        <FiMoreVertical/>
        </div>
       </div> 


       <div className='sidebar__search'>
        <div className='sidebar__searchContainer'>
        <AiOutlineSearch/>
       <input  placeholder='search or start new chat'/>
        </div>
       </div>  
 
       <div className='sidebar__chats'>
      <Sidebarchat addNewChat/>
      <Sidebarchat/>
      <Sidebarchat/>
      <Sidebarchat/>
       </div>
    </div>
  )
}

export default Sidebar