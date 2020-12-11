import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Pagination } from "../../../components/pagination-page/pagination";
import RowTable from "../../../components/row-table/row-table";
import { getListTechStack } from "../tech-stack.services";

export const TableTechStack = () => {
  const listTeckStack = useSelector(state => state.techStack);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getListTechStack());
  }, []);
  return (
    <div>
      {listTeckStack.loading ? (
        <div className="flex items-end justify-center">
          <img src="https://icon-library.com/images/loading-gif-icon/loading-gif-icon-17.jpg" />
        </div>
      ) : (
        <div>
          <table className="flex-col shadow-xl flex justify-center bg-white w-11/12 rounded-xl">
            <thead>
              <tr className=" flex w-full bg-indigo-700 justify-around text-white rounded-t-xl cursor-pointer hover:bg-indigo-600">
                <th className="pt-5 pb-5 w-2/12">STT</th>
                <th className="pt-5 pb-5 w-2/12 ">Name</th>
                <th className="pt-5 pb-5 w-2/12">Description</th>
                <th className="pt-5 pb-5 w-2/12">Status</th>
                <th className="pt-5 pb-5 w-2/12"></th>
              </tr>
            </thead>
            <tbody>
              {listTeckStack.data.map((techStack, i) => {
                return (
                  <RowTable
                    link={"/tech-stack/details/" + techStack._id}
                    key={techStack._id}
                    number={i + 1}
                    type={techStack.name}
                    description={techStack.description}
                    status={techStack.status}
                  />
                );
              })}
            </tbody>
          </table>
          <Pagination />
        </div>
      )}
    </div>
  );
};
