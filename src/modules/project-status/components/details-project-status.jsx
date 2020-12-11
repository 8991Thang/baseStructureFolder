import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { FormDetailCustomers } from "../../../components/form-detail/form-detail";
import { FormEdit } from "../../../components/form-edit/form-edit";
import { deleteProjectStatus, getDetailsProjectStatus, updateProjectStatus } from "../project-status.services";

export const DetailsProjectStatus = () => {
  const [update, setUpdate] = useState(false);
  const params = useParams();
  const { projectStatusDetails } = useSelector(state => state.projectStatus);
  const { loading } = useSelector(state => state.projectStatus);
  const dispatch = useDispatch();
  const history = useHistory();
  useEffect(() => {
    dispatch(getDetailsProjectStatus(params.id));
  }, [params]);
  const onSubmitupdateProjectType = dataProjectStatus => {
    dataProjectStatus.priorityNumber = parseInt(dataProjectStatus.priorityNumber);
    const { _id } = projectStatusDetails.record;
    dispatch(updateProjectStatus(_id, dataProjectStatus));
    history.push("/project-status");
  };
  const sumbitDeleteProjectStatus = async () => {
    const { _id } = projectStatusDetails.record;
    await dispatch(deleteProjectStatus(_id));
    history.push("/project-status");
  };
  return (
    <div>
      {loading ? (
        <div className="flex items-end justify-center">
          <img src="https://icon-library.com/images/loading-gif-icon/loading-gif-icon-17.jpg" />
        </div>
      ) : (
        <div>
          {update ? (
            <FormEdit
              valueName={projectStatusDetails.record.name}
              valueDes={projectStatusDetails.record.description}
              valuePri={projectStatusDetails.record.priorityPoint}
              name="Project Status"
              onSubmit={onSubmitupdateProjectType}
              setUpdate={setUpdate}
              valueStatus={projectStatusDetails.record.status}
            />
          ) : (
            <FormDetailCustomers
              setUpdate={setUpdate}
              nameCustomers={projectStatusDetails.record.name}
              name="Project Status"
              description={projectStatusDetails.record.description}
              status={projectStatusDetails.record.status}
              deleteCustomer={sumbitDeleteProjectStatus}
            />
          )}
        </div>
      )}
    </div>
  );
};
