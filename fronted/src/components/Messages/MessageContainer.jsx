// import { useEffect } from "react";
// import { useAuthContext } from "../../context/AuthContext";
// import useConversation from "../../zustand/useConversation";
// import MessageInput from "./MessageInput";
// import Messages from "./Messages";
// import { TiMessages } from "react-icons/ti";

// const MessageContainer = () => {
//   const { selectedConversation, setSelectedConversation } = useConversation();
//   useEffect(() => {
//     setSelectedConversation(null);
//   }, [setSelectedConversation]);

//   return (
//     <div className="md:min-w-[450px] flex flex-col">
//       {!selectedConversation ? (
//         <NoChatSelected />
//       ) : (
//         <>
//           {/* Header */}
//           <div className="bg-slate-500 px-4 py-2 mb-2 relative">
//             <span className="label-text">To:</span>{" "}
//             <span className="text-gray-900 font-bold">
//               {selectedConversation.fullname}
//             </span>
//           </div>
//           <Messages />
//           <MessageInput />
//         </>
//       )}
//     </div>
//   );

//   // 	<div className='md:min-w-[450px] flex flex-col'>

//   // 		{!selectedConversation?(<NoChatSelectedfunc/>):
//   // 		 (<> <div className='bg-slate-500 px-4 py-2 mb-2'>
//   // 				<span className='label-text'>To:</span> <span className='text-gray-900 font-bold'>{selectedConversation.fullname}</span>
//   // 			</div>
//   //              <Messages/>
//   // 			<MessageInput />

//   // 		</>)}
//   // 	</div>
//   // );
// };
// export default MessageContainer;
// const NoChatSelected = () => {
//   const { authUser } = useAuthContext();
//   return (
//     <div className="flex items-center justify-center w-full h-full ">
//       <div className="px-4 text-center sm:text-lg md:text-xl text-gray-200 font-semibold flex flex-col items-center gap-2 min-h-96 justify-center">
//         <p className="text-red-400">Welcome 👋{authUser.fullname} ❄</p>
//         <p className="text-blue-600">Select a chat to start messaging</p>
//         <TiMessages className="text-3xl md:text-6xl text-center" />
//       </div>
//     </div>
//   );
// };

import { useEffect } from "react";
import { useAuthContext } from "../../context/AuthContext";
import useConversation from "../../zustand/useConversation";
import MessageInput from "./MessageInput";
import Messages from "./Messages";
import { TiMessages } from "react-icons/ti";

const MessageContainer = () => {
  const { selectedConversation, setSelectedConversation } = useConversation();

  // Reset selected conversation on mount
  useEffect(() => {
    setSelectedConversation(null);
  }, [setSelectedConversation]);

  return (
    <div className="md:min-w-[450px] flex flex-col h-[100%]">
      {!selectedConversation ? (
        <NoChatSelected />
      ) : (
        <ChatView selectedConversation={selectedConversation} />
      )}
    </div>
  );
};

// Component when no chat is selected
const NoChatSelected = () => {
  const { authUser } = useAuthContext();
  
  return (
    <div className="flex items-center justify-center w-full h-full">
      <div className="px-4 text-center sm:text-lg md:text-xl text-gray-200 font-semibold flex flex-col items-center gap-2 min-h-96 justify-center">
        <p className="text-red-400">Welcome 👋 {authUser.fullname} ❄</p>
        <p className="text-blue-600">Select a chat to start messaging</p>
        <TiMessages className="text-3xl md:text-6xl text-center" />
      </div>
    </div>
  );
};

// Chat view when a conversation is selected
const ChatView = ({ selectedConversation }) => {
  return (
    <>
      {/* Chat Header */}
      <div className="bg-slate-500 px-4 py-2 mb-2">
        <span className="label-text">To:</span>{" "}
        <span className="text-gray-900 font-bold">
          {selectedConversation.fullname}
        </span>
      </div>
      {/* Messages and Input */}
      <Messages />
      <MessageInput />
    </>
  );
};

export default MessageContainer;
