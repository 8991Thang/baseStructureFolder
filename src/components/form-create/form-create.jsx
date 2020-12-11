import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
export const FormCreate = ({ name, action, link }) => {
  const { register: dataForm, handleSubmit } = useForm();
  const dispatch = useDispatch();
  const history = useHistory();
  const onSubmit = async data => {
    data.priorityNumber = parseInt(data.priorityNumber);
    await dispatch(action(data));
    history.push(link);
  };
  return (
    <div className="leading-loose w-6/12">
      <form className=" m-4 p-10 bg-white rounded shadow-xl" onSubmit={handleSubmit(onSubmit)}>
        <p className="text-gray-800 font-medium mb-5">{name} information</p>
        <div>
          <label className="block text-sm text-gray-00 mb-2" htmlFor="name">
            Name
          </label>
          <input
            ref={dataForm}
            className="w-full px-5 outline-none py-1 text-gray-700 bg-gray-200 rounded"
            id="name"
            name="name"
            type="text"
            required
            placeholder="Name"
          />
        </div>
        <div className="mt-4">
          <label className="block text-sm text-gray-600 mb-2" htmlFor="description">
            Description
          </label>
          <textarea
            ref={dataForm}
            className="w-full outline-none px-5  py-4 text-gray-700 bg-gray-200 rounded"
            id="description"
            name="description"
            type="text"
            required
            placeholder="Description"
          />
        </div>
        <div className="inline-block mt-2 w-1/2 pr-1">
          <label className="text-sm text-gray-600 mb-2" htmlFor="priority">
            Priority
          </label>
          <select
            ref={dataForm}
            className="w-full outline-none px-3 py-4 text-gray-700 bg-gray-200 rounded"
            id="priority"
            name="priorityNumber"
            type="text"
            required
            placeholder="Priority"
          >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </div>
        <div className="inline-block mt-2 w-1/2 pr-1">
          <label className="text-sm text-gray-600 mb-2" htmlFor="status">
            Status
          </label>
          <select
            ref={dataForm}
            className="w-full outline-none px-3 py-4 text-gray-700 bg-gray-200 rounded"
            id="status"
            name="status"
            type="text"
            required
            placeholder="Country"
          >
            <option value="active">Active</option>
            <option value="inactive">InActive</option>
          </select>
        </div>
        <div className="flex items-center justify-center mt-6">
          <div className="m-3">
            <button className="bg-white text-gray-800 font-bold rounded border-b-2 border-green-500 hover:border-green-600 hover:bg-green-500 hover:text-white shadow-md py-2 px-6 inline-flex items-center">
              <span className="mr-2">Add {name}</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <path fill="currentcolor" d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"></path>
              </svg>
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};
