import React from 'react'
import { BsFillCameraFill } from 'react-icons/bs'
import { AiOutlineUserAdd } from 'react-icons/ai'
import { GrMoreVertical } from 'react-icons/gr'
import Messages from './Messages'
import Input from './Input'
const Chat = () => {
  return (
    <div className='chat'>
      <div className="chatInfo">
        <span>
          Jane
        </span>
        <div className="chatIcons">
          <BsFillCameraFill size={24} />
          <AiOutlineUserAdd size={24} />
          <GrMoreVertical size={24} />
        </div>

      </div>
      <Messages />
      <Input />
    </div>
  )
}

export default Chat