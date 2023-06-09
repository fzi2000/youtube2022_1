import React from 'react'
import { AiOutlineFile } from 'react-icons/ai'
import { IoAttachOutline } from 'react-icons/io5'

const Input = () => {
    return (
        <div className='input'>
            <input type="text" placeholder='Type Something...' />
            <div className="send">
                <AiOutlineFile  className='icons' size={24} />
                <IoAttachOutline className='icons'  size={24} />

            <button>Send</button>
            </div>
        </div>
    )
}

export default Input 