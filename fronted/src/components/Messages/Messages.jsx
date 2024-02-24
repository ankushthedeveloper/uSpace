import  { useEffect, useRef } from 'react'
import Message from './Message'
import useGetMessages from '../../hooks/useGetMessage'
import MessageSkeleton from '../Skeletons/messageSkeleton';



const Messages = () => {
  const {messages, loading }=useGetMessages();
  const lastMessageRef = useRef();

  useEffect(() => {
		setTimeout(() => {
			lastMessageRef.current?.scrollIntoView({ behavior: "smooth" });
		}, 100);
	}, [messages]);

  return (
    <div className='px-4 flex-1 overflow-auto'>
    
      {!loading && messages.map(msg =>(
       <div key={msg._id} 
       ref={lastMessageRef}>
         <Message msg={msg} />
       </div>
      ))}
    {loading && [...Array(3)].map((_, idx) => <MessageSkeleton key={idx} />)}
			{!loading && messages.length === 0 && (<p className='text-center flex items-center justify-center font-serif'>Send a message to start the conversation 😊</p>)}
    </div>
  )
}

export default Messages