import { useEffect, useRef } from 'react';
import Message from './Message';
import useGetMessages from '../../hooks/useGetMessage';
import MessageSkeleton from '../Skeletons/messageSkeleton';
import useListenMessages from '../../hooks/useListenMessages';

const Messages = () => {
  const { messages, loading } = useGetMessages();
  useListenMessages();
  const lastMessageRef = useRef(null);

  // Scroll to the last message when messages update
  useEffect(() => {
    if (lastMessageRef.current) {
      lastMessageRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);

  return (
    <div className={`flex-1 overflow-y-auto flex flex-col p-4 min-h-[400px] relative z-1 ${window.innerWidth < 700 ? "max-h-[300px]" : ""}`}
    >
      {/* Messages */}
      {!loading && messages.length > 0 ? (
        messages.map((msg, idx) => (
          <div key={msg._id} ref={idx === messages.length - 1 ? lastMessageRef : null}>
            <Message msg={msg} />
          </div>
        ))
      ) : (
        // Loading Skeletons
        loading && [...Array(3)].map((_, idx) => <MessageSkeleton key={idx} />)
      )}

      {/* Empty State */}
      {!loading && messages.length === 0 && (
        <div className="flex-1 flex justify-center items-center text-center">
          <p className="text-blue-600 ">Send a message to start the conversation 😊</p>
        </div>
      )}
    </div>
  );
};

export default Messages;
