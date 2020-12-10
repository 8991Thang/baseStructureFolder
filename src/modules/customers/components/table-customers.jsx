import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { PaginationProjectType } from "../../../components/pagination-page/pagination-project-type";
import RowTable from "../../../components/row-table/row-table";
import { getCustomers } from "../customers.services";
export const TableCustomers = () => {
  const listCustomers = useSelector(state => state.customers);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCustomers());
  }, []);
  return (
    <div>
      {listCustomers.loading ? (
        <div className="flex items-end justify-center">
          <img src="https://icon-library.com/images/loading-gif-icon/loading-gif-icon-17.jpg" />
        </div>
      ) : (
        <div>
          <table className="flex-col shadow-xl flex justify-center bg-white w-11/12 rounded-xl">
            <thead>
              <tr className=" flex w-full bg-indigo-700 justify-around text-white rounded-t-xl cursor-pointer hover:bg-indigo-600">
                <th className="pt-5 pb-5 w-2/12">STT</th>
                <th className="pt-5 pb-5 w-2/12 ">Name Customers</th>
                <th className="pt-5 pb-5 w-2/12">Description</th>
                <th className="pt-5 pb-5 w-2/12">Priority</th>
                <th className="pt-5 pb-5 w-2/12">Status</th>
                <th className="pt-5 pb-5 w-2/12"></th>
              </tr>
            </thead>
            <tbody>
              {listCustomers.data.map(projectType => {
                return (
                  <RowTable
                    link={"/customers/details/" + projectType._id}
                    key={projectType._id}
                    number={projectType.priorityNumber}
                    type={projectType.name}
                    description={projectType.description}
                    priority={projectType.priorityNumber}
                    status={projectType.status}
                  />
                );
              })}
            </tbody>
          </table>
          <PaginationProjectType />
        </div>
      )}
    </div>
  );
};
