import { BiSearch } from "react-icons/bi";
import { FaCaretDown } from "react-icons/fa";

export const Navbar = () => {
  return (
    <nav className="flex justify-between h-20 w-11/12">
      <form className="flex items-center ml-3">
        <BiSearch className="text-gray-400 text-xl mr-2" />
        <input placeholder="Search" className="outline-none text-lg bg-transparent" />
      </form>
      <div className="flex w-40 items-center justify-around ">
        <div className="relative">
          <div>
            <img
              className=" w-11"
              src="https://cdn.icon-icons.com/icons2/582/PNG/512/man-2_icon-icons.com_55041.png"
              alt=""
            />
          </div>
          <span className="absolute bottom-0 right-0 border-white border-solid border-2 w-3 h-3 bg-green-500 rounded-full"></span>
        </div>
        <div>
          <p>Tinselly</p>
        </div>
        <div>
          <FaCaretDown className="text-gray-500 text-xl cursor-pointer" />
        </div>
      </div>
    </nav>
  );
};
