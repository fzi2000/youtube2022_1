import React, { useContext } from 'react'
import { BsFillCameraFill } from 'react-icons/bs'
import { AiOutlineUserAdd } from 'react-icons/ai'
import { GrMoreVertical } from 'react-icons/gr'
import Messages from './Messages'
import Input from './Input'
import { ChatContext } from '../Context/ChatContext'
const Chat = () => {

  const { data } = useContext(ChatContext);
  console.log(data);

  return (
    <div className='chat'>
      <div className="chatInfo">
        <span>
          {data.user?.displayName}
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