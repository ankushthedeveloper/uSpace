import { IoChatbox, IoExitOutline, IoOptionsOutline, IoPeople } from "react-icons/io5";
import Conversations from "./Conversations";
import LogoutButton from "./LogoutButton";
import SearchInput from "./SearchInput";
import useConversation from "../../zustand/useConversation";
import { useState } from "react";

const Sidebar = () => {
  const { selectedConversation, setSelectedConversation } = useConversation();
  const [showModal, setshowModal] = useState(false);
  const [phoneActive, setPhoneActive] = useState(window.innerWidth < 700);

  return (
    <>
      {phoneActive && (
        <button
          id="hamburger"
          className="bg-white cursor-pointer max-w-fit max-h-fit"
          onClick={() => setshowModal(true)}
        >
          =
        </button>
      )}
      {
          showModal&&  (< button style={{background:"teal",
        width:"max-content",
        padding:"10px",
        zIndex:"10",
        position:"fixed",
        right:"0rem",
        height:"max-content"}} onClick={()=>setshowModal(false)}><IoExitOutline/></button>)
      }

      <div
        className={`border-r border-slate-500 p-4 flex flex-col opacity-0.2`}
        style={
          ( !selectedConversation||phoneActive)
            ? {
                background: "orange",
                width: "20rem",
                height: "100vh",
                position: "fixed",
                left: showModal ? "0" : "-20rem",
                transition: "all 0.5s",
              }
            : {}
        }
      >
        <h5 className=" text-blue-600 text-center pb-1.5 bg-gray-400 rounded-xl mb-2 opacity-0.1">
          Created by Ankush
        </h5>

        <SearchInput />
        <div className="divider px-3"></div>
        <Conversations />
        <LogoutButton />
      </div>
    </>
  );
};
export default Sidebar;
