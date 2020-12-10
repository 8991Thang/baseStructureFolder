
import { FcAbout } from "react-icons/fc";
export const FormDetailCustomers = ({
  name,
  nameCustomers,
  description,
  priority,
  status,
  deleteCustomer,
  setUpdate,
}) => {
  return (
    <div className="w-10/12 rounded-lg shadow-lg bg-white mt-10 ml-5">
      <div className="flex justify-between border-b border-gray-100 px-5 py-4">
        <div className="flex items-center">
          <FcAbout className="text-2xl mr-2" />
          <span className="font-bold text-gray-700 text-lg">{name} Information</span>
        </div>
      </div>
      <div>
        <div className="px-10 py-5 text-gray-600">
          Name {name} : <b>{nameCustomers}</b>
        </div>
        <div className="px-10 py-5 text-gray-600">
          Description : <b>{description}</b>
        </div>
        <div className="px-10 py-5 text-gray-600">
          Priority : <span className="text-xl ml-2">{priority}</span>
        </div>
        <div className="px-10 py-5 text-gray-600">
          Status :{" "}
          {status === "active" ? (
            <span className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
              <span
                aria-hidden
                className="absolute inset-0 bg-green-200 opacity-50 rounded-full"
              ></span>
              <span className="relative">Active</span>
            </span>
          ) : (
            <span className="relative inline-block px-3 py-1 font-semibold text-red-900 leading-tight">
              <span
                aria-hidden
                className="absolute inset-0 bg-red-200 opacity-50 rounded-full"
              ></span>
              <span className="relative">Inactive</span>
            </span>
          )}
        </div>
        <div className="px-5 py-4 flex justify-end">
          <button
            onClick={() => setUpdate(true)}
            className="border border-green-500 bg-green-500 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-green-600 focus:outline-none focus:shadow-outline"
          >
            UPDATE
          </button>
          <button
            onClick={deleteCustomer}
            className="border border-red-500 bg-red-500 text-white rounded-md px-3 py-2 m-2 transition duration-500 ease select-none hover:bg-red-600 focus:outline-none focus:shadow-outline"
          >
            DELETE
          </button>
        </div>
      </div>
    </div>
  );
};
