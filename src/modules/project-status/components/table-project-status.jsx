import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { PaginationProjectType } from "../../../components/pagination-page/pagination-project-type";
import RowTable from "../../../components/row-table/row-table";
import { getListProjectStatus } from "../project-status.services";
export const TableProjectStatus = () => {
  const listProjectStatus = useSelector(state => state.projectStatus);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getListProjectStatus());
  }, []);
  return (
    <div>
      {listProjectStatus.loading ? (
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
              {listProjectStatus.data.map(projectType => {
                return (
                  <RowTable
                    key={projectType.name}
                    number={projectType.priorityNumber}
                    type={projectType.name}
                    description={projectType.description}
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
