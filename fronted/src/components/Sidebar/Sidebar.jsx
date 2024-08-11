import { useState } from "react";
import { BiMenu } from "react-icons/bi";
import { IoExitOutline } from "react-icons/io5";
import useConversation from "../../zustand/useConversation";
import Conversations from "./Conversations";
import LogoutButton from "./LogoutButton";
import SearchInput from "./SearchInput";

const Sidebar = () => {
  const { selectedConversation, setSelectedConversation } = useConversation();
  const [showModal, setshowModal] = useState(false);
  const [phoneActive, setPhoneActive] = useState(window.innerWidth < 700);


  console.log(selectedConversation);
  return (
    <>
      {phoneActive && (
        <button
          id="hamburger"
          className="bg-white cursor-pointer max-w-fit max-h-fit xl:hidden"
          onClick={() => setshowModal((prev)=>!prev)}
      >
        <BiMenu/>
        </button>
      )}
      {
          showModal &&  (< button style={{background:"teal",
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
          ( !selectedConversation && phoneActive)
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

        <SearchInput />
        <div className="divider px-3"></div>
        <Conversations />
        <LogoutButton />
      </div>
    </>
  );
};
export default Sidebar;
