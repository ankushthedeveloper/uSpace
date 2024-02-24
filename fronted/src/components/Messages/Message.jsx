import React from 'react'

import useConversation from '../../zustand/useConversation';
import { extractTime } from '../../utils/extractTime';
import { useAuthContext } from '../../context/AuthContext';


const Message = ({msg}) => {
const {authUser}=useAuthContext();
	const { selectedConversation } = useConversation();

  const fromMe = (msg.senderId === authUser.id);
  const formattedTime = extractTime(msg.createdAt);
  const chatclass=fromMe?"chat-end":"chat-start;"
  const profilepicture=fromMe?authUser.profilepic:selectedConversation?.profilepic;
  const bubblebgcolor=fromMe?"bg-blue-500":"";
  return (
    <div className={`chat ${chatclass}`}>
        <div className="chat-image avatar">
            <div className='w-10 rounded-full'>
                <img src={profilepicture} alt="avatar"
                 />
            </div>
        </div>
<div className={`chat-bubble text-whie bg-blue-600 ${bubblebgcolor} pb-2`}>{msg.message}</div>
<div className="chat-footer opacity-50 text-xs flex gap-1 items-center">{formattedTime}</div>
    </div>
  )
}

export default Message