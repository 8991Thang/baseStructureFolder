import {
  AiOutlineAlignLeft,
  AiOutlineControl,
  AiOutlineDatabase,
  AiOutlineEllipsis,
  AiOutlineFieldTime,
  AiOutlineFundProjectionScreen,
  AiOutlineNumber,
  AiOutlineRocket,
  AiOutlineTeam,
  AiOutlineUser,
  AiOutlineUserSwitch,
} from "react-icons/ai";
import { NavLink } from "react-router-dom";
export const SidebarLeft = () => {
  return (
    <div className="w-2/12 mt-4">
      <div className="flex justify-center">
        <div className="flex items-center w-10/12">
          <div>
            <img
              className="w-20"
              src="https://cdn.icon-icons.com/icons2/582/PNG/512/man-2_icon-icons.com_55041.png"
              alt=""
            />
          </div>
          <div className="ml-5">
            <p className="font-bold tracking-wider text-xl">Tinselly.</p>
            <p className="text-gray-400">Palo Alto , CA</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center mt-10 h-5/6">
        <div className="w-10/12">
          <ul>
            <div className="text-gray-400 text-sm flex items-center">
              <p>CATEGORY</p>
              <p className="ml-2 text-2xl">
                <AiOutlineEllipsis />
              </p>
            </div>
            <NavLink
              to="/project-type"
              activeClassName="bg-indigo-700 text-white rounded-xl"
              className="flex mt-6 items-center p-2 cursor-pointer "
            >
              <AiOutlineAlignLeft className=" text-2xl " />
              <p className="text-base  ml-3">Project Type</p>
            </NavLink>
            <NavLink
              to="/project-status"
              activeClassName="bg-indigo-700 text-white rounded-xl"
              className="flex items-center mt-1 p-2"
            >
              <AiOutlineFieldTime className=" text-2xl" />
              <p className=" text-base ml-3">Project Status</p>
            </NavLink>
            <NavLink
              to="/tech-stack"
              activeClassName="bg-indigo-700 text-white rounded-xl"
              className="flex items-center mt-1 p-2"
            >
              <AiOutlineRocket className=" text-2xl" />
              <p className="  text-base ml-3"> Tech Stack</p>
            </NavLink>
            <NavLink
              to="/customers"
              activeClassName="bg-indigo-700 text-white rounded-xl"
              className="flex items-center mt-1 p-2"
            >
              <AiOutlineTeam className=" text-2xl" />
              <p className="  text-base ml-3">Customer</p>
            </NavLink>
          </ul>
        </div>
        <div className="w-10/12 mt-5">
          <ul>
            <div className="text-gray-400 text-sm flex items-center">
              <p>MANAGE</p>
              <p className="ml-2 text-2xl">
                <AiOutlineEllipsis />
              </p>
            </div>
            <li className="flex mt-5 items-center  p-2">
              <AiOutlineControl className=" text-2xl" />
              <p className="  text-base ml-3">Department</p>
            </li>
            <li className="flex items-center mt-1 p-2">
              <AiOutlineUserSwitch className=" text-2xl" />
              <p className="  text-base ml-3">Personnel</p>
            </li>
            <li className="flex items-center mt-1 p-2">
              <AiOutlineFundProjectionScreen className=" text-2xl" />
              <p className="  text-base ml-3">Project</p>
            </li>
            <li className="flex items-center mt-1 p-2">
              <AiOutlineUser className=" text-2xl" />
              <p className="  text-base ml-3">Admin</p>
            </li>
          </ul>
        </div>
        <div className="w-10/12 mt-5">
          <ul>
            <div className="text-gray-400 text-sm flex items-center">
              <p>REPORT</p>
              <p className="ml-2 text-2xl">
                <AiOutlineEllipsis />
              </p>
            </div>
            <li className="flex items-center mt-5 p-2">
              <AiOutlineNumber className=" text-2xl" />
              <p className="  text-base ml-3">Number of Projects</p>
            </li>
            <li className="flex items-center mt-1 p-2">
              <AiOutlineDatabase className=" text-2xl" />
              <p className="  text-base ml-3">Number of employees</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
