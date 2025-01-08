import { useState, useEffect } from "react";
import { BiMessageDetail } from "react-icons/bi";
import { IoExitOutline } from "react-icons/io5";
import useConversation from "../../zustand/useConversation";
import Conversations from "./Conversations";
import LogoutButton from "./LogoutButton";
import SearchInput from "./SearchInput";

const Sidebar = () => {
  const { selectedConversation } = useConversation();
  const [showModal, setShowModal] = useState(false);
  const [phoneActive, setPhoneActive] = useState(window.innerWidth < 700);

  // Handle window resize for phoneActive
  useEffect(() => {
    const handleResize = () => {
      setPhoneActive(window.innerWidth < 700);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Close the sidebar when a conversation is selected
  useEffect(() => {
    if (selectedConversation) {
      setShowModal(false); // Sidebar moves out when a conversation is selected
    }
  }, [selectedConversation]);

  return (
    <>
      {phoneActive && (
        <button
          id="hamburger"
          className="to-blue-950 cursor-pointer p-2 xl:hidden h-10 bg-yellow-200"
          onClick={() => setShowModal((prev) => !prev)}
        >
          <BiMessageDetail height={20} size={24} />
        </button>
      )}

      {showModal && (
        <button
          className="bg-green-600 absolute left-0 top-0 h-10 border-r-4 p-2 z-50 text-yellow rounded-xl mr-5"
          onClick={() => setShowModal(false)}
        >
          <IoExitOutline size={24} />
        </button>
      )}

      <div
        className={`border-r border-slate-500 p-4 flex flex-col transition-all duration-500 z-10 ${
          phoneActive ? "fixed left-0 top-0 h-full w-80 bg-[#294545] " : "relative"
        } ${
          showModal ? "translate-x-0" : phoneActive ? "-translate-x-full" : ""
        } ${!selectedConversation && phoneActive ? "to-blue-950" : "bg-blue-950"}`}
      >
        <SearchInput />
        <div className="divider px-3"></div>
        <Conversations />
        <LogoutButton />
      </div>
    </>
  );
};

export default Sidebar;
