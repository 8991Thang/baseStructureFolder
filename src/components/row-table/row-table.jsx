import { FcViewDetails } from "react-icons/fc";
import { useHistory } from "react-router-dom";

const RowTable = ({ number, type, description, priority, status, link }) => {
  const history = useHistory();
  const onClickRedirect = e => {
    e.stopPropagation();
    history.push(link);
  };
  return (
    <tr
      onClick={onClickRedirect}
      className=" flex w-full justify-around pt-4 pb-4 border-gray-200 hover:bg-gray-200 cursor-pointer border-b-2"
    >
      <td className="w-2/12 text-center" data-title="STT">
        {number}
      </td>
      <td className="w-2/12 text-center" data-title="type">
        {type}
      </td>
      <td className="w-2/12 text-center" data-title="Description">
        {description}
      </td>
      {priority ? <td className="w-2/12 text-center" data-title="Priority">
        {priority}
      </td> : ""}
      <td className="w-2/12 text-center" data-title="Status">
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
      </td>
      <td className="w-2/12 items-center justify-center flex" data-title="Status">
        <button>
          <FcViewDetails className="mr-6 text-2xl custom-hover" />
        </button>
      </td>
    </tr>
  );
};

export default RowTable;
