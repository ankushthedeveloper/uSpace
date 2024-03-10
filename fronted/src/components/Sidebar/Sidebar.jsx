import { IoChatbox, IoPeople } from "react-icons/io5";
import Conversations from "./Conversations";
import LogoutButton from "./LogoutButton";
import SearchInput from "./SearchInput";

const Sidebar = () => {
	return (

		<div className='border-r border-slate-500 p-4 flex flex-col opacity-0.2 '>
			<h5 className=" text-cornflowerblue text-center pb-1.5 bg-slate-100 rounded-xl mb-2 opacity-0.3">Created by Ankush</h5>
			<SearchInput />
			<div className='divider px-3'></div>
			<Conversations />
			<LogoutButton />
			
		
	</div>
	);
};
export default Sidebar;