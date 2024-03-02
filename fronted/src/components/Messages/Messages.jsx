import  { useEffect, useRef } from 'react'
import Message from './Message'
import useGetMessages from '../../hooks/useGetMessage'
import MessageSkeleton from '../Skeletons/messageSkeleton';
import useListenMessages from '../../hooks/useListenMessages';



const Messages = () => {
  const {messages, loading }=useGetMessages();
  useListenMessages();
  const lastMessageRef = useRef();

  useEffect(() => {
		setTimeout(() => {
			lastMessageRef.current?.scrollIntoView({ behavior: "smooth" });
		}, 100);
	}, [messages]);

  return (
    <div className='px-4 flex-1 overflow-auto flex-wrap text-wrap:wrap'>
    
      {!loading && messages.length>0 &&
       messages.map(msg =>(
       <div key={msg._id} 
       ref={lastMessageRef}>
         <Message msg={msg} />
       </div>
      ))}
    {loading && [...Array(3)].map((_, idx) => <MessageSkeleton key={idx} />)}
			{!loading && messages.length === 0 && (<p className='text-center'>Send a message to start the conversation 😊</p>)}
    </div>
  )
}

export default Messages