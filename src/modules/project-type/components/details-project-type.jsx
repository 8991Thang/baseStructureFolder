import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { FormDetailCustomers } from "../../../components/form-detail/form-detail";
import { FormEdit } from "../../../components/form-edit/form-edit";
import { deleteProjectType, getDetailsProjectType, updateProjectType } from "../project-type.services";
export const DetailsProjectType = () => {
  const [update, setUpdate] = useState(false);
  const params = useParams();
  const { dataDetails } = useSelector(state => state.projectType);
  const { loading } = useSelector(state => state.projectType);
  const dispatch = useDispatch();
  const history = useHistory();
  useEffect(() => {
    dispatch(getDetailsProjectType(params.id));
  }, [params]);
  const onSubmitupdateProjectType = async dataProjectTypes => {
    dataProjectTypes.priorityNumber = parseInt(dataProjectTypes.priorityNumber);
    const { _id } = dataDetails.record;
    await dispatch(updateProjectType(_id, dataProjectTypes));
    history.push("/project-type");
  };
  const sumbitDeleteProjectTypes = async () => {
    const { _id } = dataDetails.record;
    await dispatch(deleteProjectType(_id));
    history.push("/project-type");
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
              valueName={dataDetails.record.name}
              valueDes={dataDetails.record.description}
              valuePri={dataDetails.record.priorityNumber}
              name="Project Type"
              onSubmit={onSubmitupdateProjectType}
              setUpdate={setUpdate}
              valueStatus={dataDetails.record.status}
            />
          ) : (
            <FormDetailCustomers
              setUpdate={setUpdate}
              nameCustomers={dataDetails.record.name}
              name="Project Type"
              description={dataDetails.record.description}
              priority={dataDetails.record.priorityNumber}
              status={dataDetails.record.status}
              deleteCustomer={sumbitDeleteProjectTypes}
            />
          )}
        </div>
      )}
    </div>
  );
};
