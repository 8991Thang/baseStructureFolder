
import { useForm } from "react-hook-form";
export const FormEdit = ({ name, onSubmit, setUpdate, valueName, valueDes,
  valuePri, valueStatus }) => {
  const { register: dataForm, handleSubmit } = useForm();
  return (
    <div className="w-10/12 rounded-lg shadow-lg bg-white mt-10 ml-5">
      <div className="flex justify-between border-b border-gray-100  py-4">
        <form onSubmit={handleSubmit(onSubmit)} className="w-full">
          <div className="px-10">
            <div className="my-8">
              <div className="pb-6 md:pb-0 flex flex-col">
                <label htmlFor="name" className="input-label text-base mb-2">
                  Name {name}
                </label>
                <div>
                  <label className="input-field inline-flex w-3/4 items-baseline border-none shadow-md bg-white p-4">
                    <div className="flex-1 leading-none">
                      <input
                        ref={dataForm}
                        id="handle"
                        defaultValue={valueName}
                        type="text"
                        className="placeholder-blue w-full  p-0 outline-none text-dusty-blue-darker"
                        name="name"
                        placeholder="Jane"
                      />
                    </div>
                  </label>
                </div>
              </div>
            </div>
            <div className="my-8">
              <div className="pb-6 md:pb-0 flex flex-col">
                <label htmlFor="name" className="input-label text-base mb-2">
                  Description {name}
                </label>
                <div>
                  <label className="input-field inline-flex w-3/4 items-baseline border-none shadow-md bg-white p-4">
                    <div className="flex-1 leading-none">
                      <textarea
                        ref={dataForm}
                        id="handle"
                        defaultValue={valueDes}
                        type="text"
                        className="placeholder-blue w-full p-0 outline-none text-dusty-blue-darker"
                        name="description"
                        placeholder="..."
                      />
                    </div>
                  </label>
                </div>
              </div>
            </div>
            <div className="w-3/4">
              <div className="inline-block mt-2 w-1/2 pr-1">
                <label className="text-sm text-gray-600 mb-2" htmlFor="priority">
                  Priority
                </label>
                <select
                  ref={dataForm}
                  defaultValue={valuePri}
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
                  defaultValue={valueStatus}
                >
                  <option value="active">Active</option>
                  <option value="inactive">InActive</option>
                </select>
              </div>
            </div>
            <div className=" py-4 flex justify-end">
              <button
                type="sumbit"
                className="border border-green-500 bg-green-500 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-green-600 focus:outline-none focus:shadow-outline"
              >
                UPDATE
              </button>

              <button
                onClick={() => setUpdate(false)}
                className="border border-red-500 bg-red-500 text-white rounded-md px-3 py-2 m-2 transition duration-500 ease select-none hover:bg-red-600 focus:outline-none focus:shadow-outline"
              >
                Cancel
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
