import { useState } from "react";
import { BsSend } from "react-icons/bs";
import useSendMessage from "../../hooks/useSendMessage";

const MessageInput = () => {
  const [message, setmessage] = useState("");
  const { sendMessage, loading } = useSendMessage();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!message) return;
    await sendMessage(message);
    setmessage("");
  };

  return (
    <form className="px-4 my-3" onSubmit={handleSubmit}>
      <div className="w-full relative flex items-center">
        <input
          type="text"
          className="border text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 text-white pr-10 md:pr-12 focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Send a message"
          value={message}
          onChange={(e) => setmessage(e.target.value)}
        />
        <button
          type="submit"
          className="absolute right-3 md:right-4 flex items-center justify-center text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-full p-2 transition-all duration-150 ease-in-out"
        >
          {loading ? (
            <div className="loading loading-spinner"></div>
          ) : (
            <BsSend className="text-xl" />
          )}
        </button>
      </div>
    </form>
  );
};

export default MessageInput;
