import { useState } from "react";
import { IoSearchSharp } from "react-icons/io5";
import useConversation from "../../zustand/useConversation";
import useGetConversations from "../../hooks/useGetConversations";
import toast from "react-hot-toast";

const SearchInput = () => {
  const [search, setsearch] = useState("");
  const { setSelectedConversation } = useConversation();
  const { conversations } = useGetConversations();

  const handleSubmit = (e) => { 
    e.preventDefault();
    if (!search) return;
    if (search.length < 3) {
      return toast.error("search input must be at least of 3 characters");
    }

    const conversation = conversations.find((c) =>
      c.fullname.toLowerCase().includes(search.toLowerCase())
    );

    console.log(conversation);

    if (conversation) {
      setSelectedConversation(conversation);
      setsearch("");
    } else toast.error("No user found");
  };
  return (
    <form className="flex items-center gap-2 " onSubmit={handleSubmit} >
      <input
        type="text"
        placeholder="Search…"
        className="input input-bordered rounded-full mt-4"
		value={search}
		onChange={(e)=>setsearch(e.target.value)}
      />
      <button type="submit" className="btn btn-circle bg-sky-500 text-white" >
        <IoSearchSharp className="w-6 h-6 outline-none" />
      </button>
    </form>
  );
};
export default SearchInput;
